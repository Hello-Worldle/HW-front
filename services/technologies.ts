import { xhr } from '@/lib/utils/xhr'

type AllTechnologies = Array<{
  id: string
  name: string
}>

export const getAllTechnologies = async (): Promise<AllTechnologies> => {
  const { data } = await xhr({ url: '/get_all' })
  // Handle the successful response data
  return data
}

export type SubmitTechnology = {
  id: number
  gameMode: string
}

export type SubmitTechnologyResponse = {
  data?: { creator: 'valid' | 'invalid' }
  error?: string
}

export const submitTechnology = async ({
  id,
  gameMode,
}: SubmitTechnology): Promise<SubmitTechnologyResponse> => {
  try {
    const { data } = await xhr({
      url: '/submit_tech',
      method: 'POST',
      data: { id, gameMode },
    })

    return data
  } catch {
    return { error: 'Something went wrong' }
  }
}
