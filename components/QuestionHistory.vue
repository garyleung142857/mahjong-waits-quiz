<template>
  <v-card
    flat
    tile
    class="histories my-2"
  >
    <v-row
      v-if="history.length > 0"
      no-gutters
    >
      <v-col cols="6">
        <v-btn
          v-longpress="resetHistory"
          text
          class="reset-btn px-4"
        >
          Hold to reset
        </v-btn>
      </v-col>
      <v-col cols="6" class="d-flex justify-center align-center">
        Score: {{ currentScore }}
      </v-col>
    </v-row>
    <template
      v-for="record in history"
    >
      <v-row
        :key="record.qNum"
        no-gutters
      >
        <v-col
          cols="1"
          class="d-flex"
          :class="record.isCorrect ? 'teal lighten-4' : 'pink lighten-4'"
        >
          <v-row
            no-gutters
            class="d-inline-flex justify-center align-center"
          >
            {{ record.qNum }}
          </v-row>
        </v-col>
        <v-col
          cols="11"
          class="d-flex flex-wrap"
        >
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
          <v-row
            no-gutters
            class="d-flex align-center"
          >
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
      </v-row>
      <v-divider
        :key="'div' + record.qNum"
      />
    </template>
  </v-card>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { tileStringToArray } from '@/scripts/helper'
export default {
  name: 'QuestionHistory',
  computed: {
    history () {
      return this.getHistory().map(r => this.formatRecord(r)).reverse()
    },
    currentScore () {
      const totalCount = this.history.length
      const correctCount = this.history.filter(r => r.isCorrect).length
      return `${correctCount} / ${totalCount}`
    }
  },
  methods: {
    ...mapGetters('qna', ['getHistory']),
    ...mapMutations('qna', ['resetHistory']),
    formatRecord (record) {
      const qNum = record.n
      const hand = tileStringToArray(record.q, record.s)
      let attempt = record.attempt
      if (attempt.length === 0) {
        attempt = '---'
      }
      const answer = record.a
      const isCorrect = record.isCorrect
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
    height: 300px;
    background-color: #FAFCFB;
    border: 5px solid #445577;
    border-radius: 5px !important;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .histories::-webkit-scrollbar {
    display: none;
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
  .reset-btn{
    z-index: 9
  }
</style>
