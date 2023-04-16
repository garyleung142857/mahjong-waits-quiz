<template>
  <v-row no-gutters>
    <v-col cols="3" class="d-flex justify-center">
      <v-dialog
        v-model="dialog"
        max-width="600"
      >
        <template #activator="{ on, attrs }">
          <v-btn
            text
            class="pa-6"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon> mdi-information-outline </v-icon>
          </v-btn>
        </template>
        <v-img
          :src="require('@/assets/illustration.jpg')"
          class="d-flex align-center"
        />
      </v-dialog>
    </v-col>
    <v-col cols="6" class="d-flex justify-center align-center">
      <h3> {{ appName }} </h3>
    </v-col>
    <v-col cols="3" class="d-flex justify-center">
      <v-btn
        text
        class="pa-6"
        :href="githubURL"
        target="_blank"
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
      dialog: false,
      appName: 'Mahjong Waits Test',
      githubURL: 'https://github.com/garyleung142857/mahjong-waits-quiz'
    }
  }
}
</script>
