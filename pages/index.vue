<template>
  <v-container class="d-flex flex-column pa-0">
    <HeaderMenu />
    <TileQuestion />
    <TileKeyboard @submitAnswer="submitAnswer" />
    <QuestionHistory />
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import QnaWorker from '~/scripts/qna.worker.ts'
const worker = new QnaWorker()
export default {
  name: 'IndexPage',
  data () {
    return {
      qnaBank: null
    }
  },
  computed: {
    history () {
      return this.getHistory()
    },
    currQuestion () {
      return this.getCurrQuestion()
    }
  },
  mounted () {
    this.setQuestion()
  },
  created () {
    worker.addEventListener('message', (event) => {
      this.setCurrQna(event.data.qna)
    })
  },
  methods: {
    ...mapGetters('qna', ['getHistory', 'getCurrQuestion', 'getTotalCorrect']),
    ...mapMutations('qna', ['appendHistory', 'clearSelection', 'setCurrQna', 'resetHistory']),
    setQuestion () {
      worker.postMessage({})
    },
    submitAnswer () {
      this.appendHistory()
      this.clearSelection()
      this.setQuestion()
    },
    resetAll () {
      this.resetHistory()
      this.setQuestion()
    }
  }
}
</script>
<style scoped>
.side-btn{
  border: 3px solid grey;
}
</style>
