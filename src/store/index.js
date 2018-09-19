import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex);
var store = new vuex.Store({
	state:{
		isNavShow:false
	},
	mutations:{
        CHANGE_NAV_SHOW(state,action){
        state.isNavShow = action.payload;
        }
	}
});
export default store;