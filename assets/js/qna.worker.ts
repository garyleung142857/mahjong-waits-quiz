import { randomQuestion } from '@/scripts/generateQuestion'
const ctx: Worker = self as any

ctx.addEventListener('message', (event) => {
  const qnaBank = randomQuestion(event.data.nQuestions)
  ctx.postMessage({ qnaBank })
})
