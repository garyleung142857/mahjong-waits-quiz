<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center" />
      <TileKeyboard @submitAnswer="submitAnswer"/>
      <TileSelection />
      {{ currQna }}
      <div>
        {{ history }}
      </div>
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
      qnaBank: null,
      currQna: null
    }
  },
  computed: {
    history () {
      return this.getHistory()
    }
  },
  mounted () {
    this.setQuestion()
  },
  created () {
    worker.addEventListener('message', (event) => {
      this.currQna = event.data.qna
    })
  },
  methods: {
    ...mapGetters('qna', ['getHistory']),
    ...mapMutations('qna', ['appendHistory', 'clearSelection']),
    setQuestion () {
      worker.postMessage({})
    },
    submitAnswer () {
      this.appendHistory(this.currQna)
      this.setQuestion()
      this.clearSelection()
    }
  }
}
</script>
