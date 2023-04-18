const state = () => ({
  selection: [],
  currentNum: 0,
  correctCount: 0,
  totalCount: 0,
  history: [],
  currQna: {},
  currSuit: ['m', 'p', 's'][Math.floor(Math.random() * 3)]
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
        s: state.currSuit
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
    const newSuit = ['m', 'p', 's'].filter(suit => suit !== state.currSuit)[Math.floor(Math.random() * 2)]
    state.currQna = {
      ...qna,
      s: newSuit
    }
    state.currSuit = newSuit
  },
  resetHistory (state) {
    // Todo: generate new question
    state.selection = []
    state.currentNum = 1 // still a question here
    state.correctCount = 0
    state.totalCount = 0
    state.history = []
  }
}

export default {
  state,
  getters,
  mutations
}
