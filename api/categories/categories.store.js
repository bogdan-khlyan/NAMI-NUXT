const state = () => ({
    list: []
})

const mutations = {
    setListCategories (state, data) {
        state.list = data
    }
}

export default { state, mutations }
