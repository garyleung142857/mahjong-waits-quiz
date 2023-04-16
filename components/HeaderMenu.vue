<template>
  <v-row no-gutters >
    <v-col cols="3" class="d-flex justify-center">
      <v-btn
        text
        class="pa-6"
      >
        <v-icon> mdi-information-outline </v-icon>
      </v-btn>
    </v-col>
    <v-col cols="6" class="d-flex justify-center align-center">
      <h3> {{ appName}} </h3>
    </v-col>
    <v-col cols="3" class="d-flex justify-center">
      <v-btn
        text
        class="pa-6"
      >
        <v-icon> mdi-github </v-icon>
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
