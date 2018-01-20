const state = {
  all: [
    {
      id: '1',
      body: '评论1'
    },
    {
      id: '2',
      body: '评论2'
    }
  ]
}

const mutations = {
  addComment(state, comment) {
    state.all.push(comment)
  }
}

export default {
  state,
  mutations
}
