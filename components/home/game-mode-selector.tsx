import GameCard from './game-card'

export default function GameModelSelector() {
  return (
    <div className='flex w-full flex-wrap justify-center gap-10'>
      <div className='flex w-full flex-wrap justify-center gap-10'>
        <GameCard mode='classic' />
        <GameCard mode='picture' />
      </div>

      <div className='flex w-full flex-wrap justify-center gap-10'>
        <GameCard mode='quote' />
        <GameCard mode='code' />
      </div>
    </div>
  )
}
