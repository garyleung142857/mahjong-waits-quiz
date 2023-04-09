const state = () => ({
  selection: [],
  currentNum: 0,
  history: [],
  currQna: {}
})

const getters = {
  getSelection (state) {
    return state.selection
  },
  getHistory (state) {
    return state.history
  },
  getCurrQuestion (state) {
    if (state.currQna.q == null) {
      return {}
    } else {
      return {
        n: state.currentNum,
        q: state.currQna.q,
        s: state.currQna.s
      }
    }
  }
}

const mutations = {
  toggleSelection (state, tileName) {
    if (!state.selection.includes(tileName)) {
      state.selection = [...state.selection, tileName].sort()
    } else {
      state.selection = state.selection.filter(tn => tn !== tileName)
    }
  },
  removeSelection (state, idx) {
    state.selection.splice(idx, 1)
  },
  clearSelection (state) {
    state.selection = []
  },
  appendHistory (state) {
    const attempt = state.selection.map(tile => tile[0]).join('')
    state.history.push({
      ...state.currQna,
      n: state.currentNum,
      attempt
    })
  },
  setCurrQna (state, qna) {
    state.currentNum += 1
    state.currQna = qna
  }
}

export default {
  state,
  getters,
  mutations
}
