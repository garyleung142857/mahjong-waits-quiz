import { ukeire1, ukeire2 } from "./ukeire";

const TILES = [
  1, 1, 1, 1,
  2, 2, 2, 2,
  3, 3, 3, 3,
  4, 4, 4, 4,
  5, 5, 5, 5,
  6, 6, 6, 6,
  7, 7, 7, 7,
  8, 8, 8, 8,
  9, 9, 9, 9,
]

const randomTiles = (): Array<number> => {
  let tiles = [...TILES].sort(() => 0.5 - Math.random()).slice(0, 14)
  return tiles.sort()
}

const tile2Hand = (tiles:Array<number>): Array<number> => {
  let hand = Array(9).fill(0)
  tiles.forEach(tile => {
    hand[tile - 1]++
  })
  return hand
}


export const randomQuestion = () => {
  while (true){
    let tiles = randomTiles()
    const hand = tile2Hand(tiles)
    const u2 = ukeire2(hand)
    if (u2.shanten >= 1) continue
    if (u2.shanten === 0) {
      // remove best tile
      tiles.splice(tiles.indexOf(u2.bestTile), 1)
    }
    if (u2.shanten === -1) {
      // winning hand, randomly remove one tile
      tiles.splice(Math.floor(Math.random() * tiles.length), 1)
    }
    const hand1 = tile2Hand(tiles)
    const u1 = ukeire1(hand1)
    return {
      q: tiles.join(''),
      a: u1.ukeireList.join(''),
    }
  }

}
