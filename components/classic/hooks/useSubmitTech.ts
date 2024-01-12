import { SubmitTechnology, submitTechnology } from '@/services/technologies'
import { useMutation } from '@tanstack/react-query'

export default function useSubmitTech() {
  const { mutateAsync } = useMutation({
    mutationKey: ['submit-tech'],
    mutationFn: ({ id, gameMode }: SubmitTechnology) =>
      submitTechnology({ id, gameMode }),
  })

  const submitTech = async (technologyParas: SubmitTechnology) => {
    const data = await mutateAsync(technologyParas)

    return data
  }

  return submitTech
}
