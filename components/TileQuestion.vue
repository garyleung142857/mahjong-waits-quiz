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
    justify-content: center;
    align-items: center;
    border: 5px solid #E5EBD7;
    border-radius: 10px !important;
    background-color: #FAFCFB;
    line-height: 1.15;
  }
</style>
