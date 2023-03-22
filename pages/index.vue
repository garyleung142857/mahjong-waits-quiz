<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center" />
      <TileKeyboard />
      <TileSelection />
      {{ qnaBank }}
    </v-col>
  </v-row>
</template>

<script>
import QnaWorker from '~/assets/js/qna.worker.ts'
const worker = new QnaWorker()
export default {
  name: 'IndexPage',
  data () {
    return {
      qnaBank: null
    }
  },
  created () {
    worker.addEventListener('message', event => console.log(event.data))
  },
  mounted () {
    this.setQuestions(10)
  },
  methods: {
    setQuestions (nQuestions) {
      worker.postMessage({ nQuestions })
    }
  }
}
</script>
