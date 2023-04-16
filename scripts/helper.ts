export const tileStringToArray = (q:String, s:String) => {
  return q.split('').map(tile => tile + s)
}
