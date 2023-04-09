<template>
  <v-card
    flat
    tile
    class="question d-flex ma-0 flex-wrap mb-4"
    width="100%"
  >
    <TileImage
      v-for="(tn, idx) in questionHand"
      :key="idx"
      :tile-name="tn"
    />
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { tileStringToArray } from '@/scripts/helper'
export default {
  name: 'TileQuestion',
  computed: {
    questionHand () {
      const question = this.getCurrQuestion()
      if (question.q != null) {
        return tileStringToArray(question.q, question.s)
      }
      return null
    }
  },
  methods: {
    ...mapGetters('qna', ['getCurrQuestion'])
  }
}
</script>

<style scoped>
  .question {
    min-height: 80px;
    justify-content: flex-start;
    align-items: center;
    border-top: 5px transparent solid;
    border-bottom: 5px rgb(100, 83, 67) solid;
    background-color: rgb(238, 231, 222);
    line-height: 1.15;
  }
</style>
