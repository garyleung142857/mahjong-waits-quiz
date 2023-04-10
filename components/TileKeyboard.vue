<template>
  <v-card flat class="input-keyboard d-flex pa-2 ma-2">
    <v-card flat class="pa-1">
      <v-row v-for="(r, rowid) in curSuitLayout" :key="rowid" dense class="d-flex justify-end">
        <TileImage
          v-for="tn in r"
          :key="tn"
          :tile-name="tn"
          button
          :class="{selected: selection.indexOf(tn)>=0}"
          @tileFaceClick="inputTile(tn)"
        />
      </v-row>
    </v-card>
    <v-card flat class="pa-1 d-flex flex-column">
      <v-row dense class="d-flex">
        <v-btn
          class="suit-btn pa-1 ma-1"
          outlined
          color="pink lighten-2"
          :ripple="false"
          @click="clearAll()"
        >
          <v-icon> mdi-cancel </v-icon>
        </v-btn>
      </v-row>
      <v-row dense class="d-flex">
        <v-btn
          class="suit-btn pa-1 ma-1"
          outlined
          color="teal lighten-2"
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
import { mapMutations, mapGetters } from 'vuex'
import LAYERS from '@/constants/KeyboardPattern'
export default {
  name: 'TileKeyboard',
  data () {
    return {}
  },
  computed: {
    curSuitLayout () {
      return LAYERS ? LAYERS[this.curSuit] : null
    },
    curSuit () {
      return this.getCurrQuestion().s || 'm'
    },
    selection () {
      return this.getSelection()
    }
  },
  mounted () {
    this.$mousetrap.bind(['esc', 'delete', 'backspace'], this.clearAll)
    this.$mousetrap.bind(['space', 'enter'], this.submit, 'keyup')
    this.$mousetrap.bind(['1', 'z'], () => this.inputTile('1' + this.curSuit))
    this.$mousetrap.bind(['2', 'x'], () => this.inputTile('2' + this.curSuit))
    this.$mousetrap.bind(['3', 'c'], () => this.inputTile('3' + this.curSuit))
    this.$mousetrap.bind(['4', 'a'], () => this.inputTile('4' + this.curSuit))
    this.$mousetrap.bind(['5', 's'], () => this.inputTile('5' + this.curSuit))
    this.$mousetrap.bind(['6', 'd'], () => this.inputTile('6' + this.curSuit))
    this.$mousetrap.bind(['7', 'q'], () => this.inputTile('7' + this.curSuit))
    this.$mousetrap.bind(['8', 'w'], () => this.inputTile('8' + this.curSuit))
    this.$mousetrap.bind(['9', 'e'], () => this.inputTile('9' + this.curSuit))
  },
  methods: {
    ...mapMutations('qna', ['toggleSelection', 'clearSelection']),
    ...mapGetters('qna', ['getCurrQuestion', 'getSelection']),
    inputTile (tileName) {
      this.toggleSelection(tileName)
    },
    clearAll () {
      this.clearSelection()
    },
    submit () {
      this.$emit('submitAnswer')
    }
  }
}
</script>

<style scoped>
  .input-keyboard{
    align-self: center;
    border: 5px rgb(139, 122, 105) solid;
    border-radius: 10px;
    user-select: none;
    background-color: #FAFCFB;
  }
  .suit-btn{
    justify-content: center;
    align-items: center;
    position: relative;
    height: unset !important;
    border: 3px solid;
    font-weight: bold;
  }
  .selected{
    outline: 3px solid #D4EEE3;
    background-color: #D4EEE3;
  }
</style>
