<template>
  <div>
    {{ question }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TileQuestion',
  computed: {
    ...mapGetters('qna', ['getQuestion']),
    question () {
      return this.getQuestion
    }
  }
}
</script>
