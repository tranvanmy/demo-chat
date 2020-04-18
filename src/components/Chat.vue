<template>
<div>
    <create-group></create-group>
    <video-call></video-call>
    <voice-call></voice-call>
    <connection-call></connection-call>
    <div class="chat-layout">
        <leftbar></leftbar>
        <div class="chat-rightbar">
            <detail-chat></detail-chat>
            <user-infor></user-infor>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
import Leftbar from './leftbar/views/Leftbar.vue';
import DetailChat from './detail-chat/views/DetailChat.vue';
import UserInfor from './user-infor/views/UserInfor.vue';
import VideoCall from './call/views/VideoCall.vue';
import VoiceCall from './call/views/VoiceCall.vue';
import ConnectionCall from './call/views/ConnectionError.vue';
import CreateGroup from './create-group/views/CreateGroup.vue';
export default {
    components: {
        Leftbar,
        DetailChat,
        UserInfor,
        VideoCall,
        VoiceCall,
        ConnectionCall,
        CreateGroup
    },
    data() {
        return {};
    },
    computed: {},
    created() {}
}
</script>
