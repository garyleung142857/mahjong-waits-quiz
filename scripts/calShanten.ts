import { calOptimalSuitCombination } from './suitCobmination';

export const calShantenMenzu = (hand:Array<number>) => {

  const menzuFormula = (deficit:number, taatsu:number, pairExists:boolean): number => {
    if(taatsu < deficit + 1){
      return 2 * deficit - taatsu
    } else {
      return deficit - Number(pairExists)
    }
  }

  const stats = calOptimalSuitCombination(hand)

  const deficit = 4 - stats[0]
  const maxTaatsus = stats[1]
  const maxTaatsusWithPair = stats[2]
  
  const shanten = Math.min(
    menzuFormula(deficit, maxTaatsus, false), 
    menzuFormula(deficit, maxTaatsusWithPair, true)
  )

  return shanten
}