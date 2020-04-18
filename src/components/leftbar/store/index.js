import ConfigAxios from '../../../library/axios';
import LeftbarService from '../api/index';

const DEMO_LEFT_BAR = 'DEMO_LEFT_BAR';

const state = {
    user: 'tranvanmy',
    token: null,
    loading: false,
};

const mutations = {
    [DEMO_LEFT_BAR](state, user) {
        state.user = user;
    },
};

const actions = {
    async actionDemo({ commit }, params) {},
};

const storeLeftbar = {
    state,
    actions,
    mutations,
};

export default storeLeftbar;