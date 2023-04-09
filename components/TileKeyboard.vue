<template>
  <v-card flat class="input-keyboard d-flex justify-start pa-2 mb-4">
    <v-card flat class="pa-1">
      <v-row v-for="(r, rowid) in curSuitLayout" :key="rowid" dense class="d-flex justify-end">
        <TileImage
          v-for="tn in r"
          :key="tn"
          :tile-name="tn"
          button
          @tileFaceClick="inputTile(tn)"
        />
      </v-row>
    </v-card>
    <v-card flat class="pa-1 d-flex flex-column">
      <v-row dense class="d-flex" align-content="stretch">
        <v-btn
          class="suit-btn pa-1 ma-1"
          :ripple="false"
          @click="clearAll()"
        >
          <v-icon> mdi-cancel </v-icon>
        </v-btn>
      </v-row>
      <v-row dense class="d-flex">
        <v-btn
          class="suit-btn pa-1 ma-1"
          :ripple="false"
          @click="submit()"
        >
          <v-icon> mdi-check </v-icon>
        </v-btn>
      </v-row>
    </v-card>
  </v-card>
</template>
<script>
import { mapMutations } from 'vuex'
import LAYERS from '@/constants/KeyboardPattern'
export default {
  name: 'TileKeyboard',
  data () {
    return {
      curSuit: 'm'
    }
  },
  computed: {
    curSuitLayout () {
      return LAYERS ? LAYERS[this.curSuit] : null
    }
  },
  methods: {
    ...mapMutations('qna', ['addSelection', 'clearSelection']),
    inputTile (tileName) {
      this.addSelection(tileName)
    },
    clearAll () {
      this.clearSelection()
    },
    submit () {
      this.$emit('submitAnswer')
    },
    changeSuit (suit) {
      this.curSuit = suit
    }
  }
}
</script>

<style scoped>
  .input-keyboard{
    align-self: center;
    border: 3px rgb(139, 122, 105) solid;
    user-select: none;
  }
  .suit-btn{
    justify-content: center;
    align-items: center;
    position: relative;
    height: unset !important;
  }
</style>
