<template>
  <v-card
    flat
    tile
    class="selection d-flex ma-0 flex-wrap mb-4"
    width="100%"
  >
    <TileImage
      v-for="(tn, idx) in selection"
      :key="idx"
      :tile-name="tn"
      class="selection-tile"
      @tileFaceClick="() => tileFaceClick(idx)"
    />
  </v-card>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'TileSelection',
  computed: {
    selection () {
      return this.getSelection()
    }
  },
  methods: {
    ...mapMutations('qna', ['removeSelection']),
    ...mapGetters('qna', ['getSelection']),
    tileFaceClick (idx) {
      this.removeSelection(idx)
    }
  }
}
</script>
<style scoped>
  .selection {
    min-height: 60px;
    justify-content: flex-start;
    align-items: center;
    border: 3px solid rgb(100, 83, 67);
    line-height: 1.15;
  }
  .selection-tile:hover{
    cursor: pointer;
  }
</style>
