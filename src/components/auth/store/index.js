import ConfigAxios from '../../../library/axios';
import AuthService from '../api/index';

const DEMO_LOGIN = 'DEMO_LOGIN';

const state = {
    staff: "staff-1",
    token: null,
    loading: false,
};

const mutations = {
    [DEMO_LOGIN](state, user) {
        state.user = user;
    },
};

const actions = {
    async actionAuth({ commit }, params) {},
};

const storeAuth = {
    state,
    actions,
    mutations,
};

export default storeAuth;