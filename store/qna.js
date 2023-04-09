const state = () => ({
  selection: [],
  currentNum: 0,
  history: []
})

const getters = {
  getSelection (state) {
    return state.selection
  },
  getHistory (state) {
    return state.history
  }
}

const mutations = {
  addSelection (state, newSelection) {
    if (!state.selection.includes(newSelection)) {
      state.selection = [...state.selection, newSelection].sort()
    }
  },
  clearSelection (state) {
    state.selection = []
  },
  appendHistory (state, qna) {
    const attempt = state.selection.map(tile => tile[0]).join('')
    state.history.push({
      ...qna,
      attempt
    })
  },
  appendQna (state, qna) {
    state.currentNum += 1
    this.history.push(qna)
  }
}

export default {
  state,
  getters,
  mutations
}
