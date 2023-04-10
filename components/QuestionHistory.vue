<template>
  <v-card
    flat
    tile
    class="histories pa-4"
  >
    <v-row
      v-for="record in history"
      :key="record.qNum"
      no-gutters
    >
      <v-col cols="1" class="d-flex">
        <v-row no-gutters class="d-inline-flex justify-center align-center">
          {{ record.qNum }}
        </v-row>
      </v-col>
      <v-col cols="10">
        <v-row no-gutters>
          <v-card
            flat
            tile
            class="record d-flex ma-0 flex-wrap mb-4"
            width="100%"
          >
            <TileImage
              v-for="(tn, idx) in record.hand"
              :key="idx"
              :tile-name="tn"
              small
            />
          </v-card>
        </v-row>
        <v-row no-gutters>
          <span
            class="record-answer"
          >
            <v-icon> mdi-check </v-icon> {{ record.answer }}
          </span>
          <span
            v-show="!record.isCorrect"
            class="record-attempt"
          >
            <v-icon> mdi-pen </v-icon> {{ record.attempt }}
          </span>
        </v-row>
      </v-col>
      <v-col
        cols="1"
        class="d-flex"
      >
        <v-icon>
          {{ record.isCorrect ? 'mdi-check-circle-outline' : 'mdi-close-box-outline' }}
        </v-icon>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { mapGetters } from 'vuex'
import { tileStringToArray } from '@/scripts/helper'
export default {
  name: 'QuestionHistory',
  computed: {
    history () {
      return this.getHistory().map(r => this.formatRecord(r)).reverse()
    }
  },
  methods: {
    ...mapGetters('qna', ['getHistory']),
    formatRecord (record) {
      const qNum = record.n
      const hand = tileStringToArray(record.q, record.s)
      let attempt = record.attempt
      if (attempt.length === 0) {
        attempt = '---'
      }
      const answer = record.a
      const isCorrect = record.attempt === record.a
      return {
        qNum,
        hand,
        attempt,
        answer,
        isCorrect
      }
    }
  }
}
</script>

<style scoped>
  .histories{
    background-color: transparent;
  }
  .record {
    min-height: 40px;
    justify-content: flex-start;
    align-items: center;
    line-height: 1.15;
    margin-bottom: 0 !important;
    background-color: transparent;
  }
  .record-answer{
    font-size: smaller;
    font-style: italic;
    padding-right: 2em;
    font-weight: bold;
  }
  .record-attempt{
    font-size: smaller;
    font-style: italic;
    font-weight: bold;
    color: brown;
  }
</style>
