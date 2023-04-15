<template>
  <v-row no-gutters >
    <v-col cols="4" class="d-flex justify-center">
      <v-btn
        text
      >
        <v-icon> mdi-information-outline </v-icon> About
      </v-btn>
    </v-col>
    <v-col cols="4" class="d-flex justify-center align-center">
      {{ appName}}
    </v-col>
    <v-col cols="4" class="d-flex justify-center">
      <v-btn
        text
      >
        <v-icon> mdi-github </v-icon> Source
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HeaderMenu',
  data () {
    return {
      appName: 'Mahjong Waits Test'
    }
  },
}
</script>
