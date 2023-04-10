<template>
  <span
    class="tileFace"
    :class="{'tile-text': text, 'tile-button': button, 'tile-text-small': small}"
    @click="tileFaceClick"
  >
    {{ tileChar }}
  </span>
</template>

<script>
import tileMap from '@/constants/TileMap'
export default {
  name: 'TileImage',
  props: {
    tileName: { type: String, default: '', required: true },
    text: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    button: { type: Boolean, default: false }
  },
  data () {
    return {
      tileMap
    }
  },
  computed: {
    tileChar () {
      return tileMap[this.tileName]
    }
  },
  methods: {
    tileFaceClick () {
      this.$emit('tileFaceClick', this.tileName)
    }
  }
}
</script>

<style scoped>
  .tileFace {
    height: max(40px, min(10vw, 60px));
    font-size: max(40px, min(10vw, 60px));
    line-height: 0.6;
    font-family: 'Mahjong';
    text-align: center;
    margin: 1px;
  }
  .tile-text {
    height: 40px;
    font-size: 40px;
    line-height: 0.8;
    margin: 1px;
  }
  .tile-text-small{
    height: max(36px, min(9vw, 48px));
    font-size: max(36px, min(9vw, 48px));
    line-height: 0.6;
    margin: 1px;
  }
  .tile-button {
    height: 70px;
    font-size: 70px;
    line-height: 0.6;
    margin: 3px;
    padding: 3px 6px;
    overflow-y: hidden;
    cursor: pointer;
    border-radius: 5px;
  }
  .tile-button:active{
    background-color: #dddddd;
  }
</style>
