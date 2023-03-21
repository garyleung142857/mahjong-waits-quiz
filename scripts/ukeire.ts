import { calShantenMenzu } from './calShanten';

const tileIndex2Tile = (tileIndex:number) => {
  return tileIndex + 1
}


export const ukeire1 = (hand:Array<number>) => {
  // for 3n + 1 hands
  let ukeireList = []
  let totalUkeire = 0
  const originalShanten = calShantenMenzu(hand)  // at least 0, since not completed

  for (let j = 0; j < 9; j++){
    const remainingCount = 4 - hand[j]
    if (remainingCount > 0){
      hand[j]++
      const newShanten = calShantenMenzu(hand)
      hand[j]--
      if (newShanten < originalShanten){
        ukeireList.push(tileIndex2Tile(j))
        totalUkeire += remainingCount
      }
    }
  }
  
  return {
    ukeireList: ukeireList,
    totalUkeire: totalUkeire,
    shanten: originalShanten,
  }
}

export const ukeire2 = (hand:Array<number>) => {
  // for 3n + 2 hands
  // consider every tile, even if shanten increases
  const originalShanten = calShantenMenzu(hand)
  // let ukeires = emptyHand()
  let bestUkeire:number = -1
  let bestTile:number = -1

  if (originalShanten === -1) {
    return {
      bestTile: -1,
      shanten: -1,
    }
  }

  for (let j = 0; j < 9; j++){
    if(hand[j] > 0){
      hand[j]--
      const newUkeire = ukeire1(hand)
      if(newUkeire.shanten === originalShanten && newUkeire.totalUkeire > bestUkeire){
        bestUkeire = newUkeire.totalUkeire
        bestTile = tileIndex2Tile(j)
      }
      hand[j]++
    }
  }
  
  return {
    bestTile: bestTile,
    shanten: originalShanten,
  }
}