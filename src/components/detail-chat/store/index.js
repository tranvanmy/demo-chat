import DetailChatService from '../api/index';

const DEMO_DETAIL_CHAT = 'DEMO_DETAIL_CHAT';

const state = {
    message: [],
};

const mutations = {
    [DEMO_DETAIL_CHAT](state, user) {
        state.message = [1212, 1212, 12, 12, 1212];
    },
};

const actions = {
    async actionChat({ commit }, params) {},
};

const storeDetailChat = {
    state,
    actions,
    mutations,
};

export default storeDetailChat;