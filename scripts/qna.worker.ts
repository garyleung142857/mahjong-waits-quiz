import { randomQuestion } from '@/scripts/generateQuestion'
const ctx: Worker = self as any

ctx.addEventListener('message', () => {
  const qna = randomQuestion()
  ctx.postMessage({ qna })
})

export default ctx
