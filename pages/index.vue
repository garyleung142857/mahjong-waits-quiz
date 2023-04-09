<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <div class="sticky">
        <TileKeyboard @submitAnswer="submitAnswer" />
        <TileQuestion />
      </div>
      <QuestionHistory />
    </v-col>
  </v-row>
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
    ...mapGetters('qna', ['getHistory', 'getCurrQuestion']),
    ...mapMutations('qna', ['appendHistory', 'clearSelection', 'setCurrQna']),
    setQuestion () {
      worker.postMessage({})
    },
    submitAnswer () {
      this.appendHistory()
      this.setQuestion()
      this.clearSelection()
    }
  }
}
</script>
<style scoped>
.sticky{
  position: sticky;
  top: 20px;
  z-index: 4;
  background-color: white;
}
</style>
