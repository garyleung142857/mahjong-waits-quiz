<template>
  <div>
    {{ selection }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TileSelection',
  computed: {
    ...mapGetters('qna', ['getSelection']),
    selection () {
      return this.getSelection
    }
  }
}
</script>
