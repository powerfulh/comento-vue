const state = {
	sid: ''
}

const getters = {}

const actions = {
	// init({commit}){
	// 	commit('', '')
	// },
	setSid({commit}, data){
		commit('setSid', data)
	}
}

const mutations = {
	setSid(state, object) {
		state.sid = object
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
