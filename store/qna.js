const state = () => ({
  selection: [],
  currentNum: 0,
  correctCount: 0,
  totalCount: 0,
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
  },
  getCurrentScore (state) {
    return {
      correctCount: state.correctCount,
      totalCount: state.totalCount
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
    const isCorrect = attempt === state.currQna.a
    if (isCorrect) {
      state.correctCount += 1
    }
    state.history.push({
      ...state.currQna,
      n: state.currentNum,
      isCorrect,
      attempt
    })
    state.totalCount += 1
  },
  setCurrQna (state, qna) {
    state.currentNum += 1
    state.currQna = qna
  },
  resetHistory (state) {
    state.selection = []
    state.currentNum = 0
    state.correctCount = 0
    state.totalCount = 0
    state.history = []
    // state.currQna = {}
  }
}

export default {
  state,
  getters,
  mutations
}
