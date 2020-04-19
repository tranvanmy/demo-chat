<template>
 <div class="modal incoming-video-modal fade" id="incomingVideoCall" tabindex="-1" role="dialog" aria-labelledby="incomingVideoCallTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-white" id="incomingVideoCallTitle">Incoming Video Call</h5>
                </div>
                <div class="modal-body">
                    <img src="../../../assets/images/girl.svg" alt="avatar" class="rounded-circle">
                    <h5 class="text-white">Jessica Meir</h5>
                    <p class="text-white">Texas, USA</p>
                    <button type="button" class="btn btn-success mr-3"><i class="feather icon-check mr-2"></i>Accept</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="feather icon-x mr-2"></i>Reject</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    name: "VideoCall",
    components: {

    },
    data() {
        return {};
    },
    computed: {},
    created() {}
}
</script>
