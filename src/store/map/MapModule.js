import Vue from 'vue'
import Vuex from 'vuex'

import actions from "@/store/map/actions.js"
import states from "@/store/map/states.js"

Vue.use(Vuex)

const MapModule = {
    namespaced: true,
    actions,
    states
}

export default MapModule