import { NuxtState } from '@nuxt/types/app'
import { randomQuestion } from '@/scripts/generateQuestion'

const state = () => ({
  selection: []
})

const getters = {
  getSelection (state:NuxtState) {
    return state.selection
  }
}

const mutations = {
  addSelection (state:NuxtState, newSelection:string) {
    if (!state.selection.includes(newSelection)) {
      state.selection = [...state.selection, newSelection].sort()
    }
  },
  clearSelection (state:NuxtState) {
    state.selection = []
  }
}

export default {
  state,
  mutations,
  getters
}
