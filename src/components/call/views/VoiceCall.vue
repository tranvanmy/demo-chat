<template>
  <!-- Start Incoming Voice Call Modal -->
    <div class="modal incoming-voice-modal fade" id="incomingVoiceCall" tabindex="-1" role="dialog" aria-labelledby="incomingVoiceCallTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="incomingVoiceCallTitle">Incoming Voice Call</h5>
                </div>
                <div class="modal-body">
                    <img src="../../../assets/images/men.svg" alt="avatar" class="rounded-circle">
                    <h5>Jessica Meir</h5>
                    <p>Texas, USA</p>
                    <button type="button" class="btn btn-success mr-3"><i class="feather icon-check mr-2"></i>Accept</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="feather icon-x mr-2"></i>Reject</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End Incoming Voice Call Modal -->
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    name: "VoiceCall",
    components: {

    },
    data() {
        return {};
    },
    computed: {},
    created() {}
}
</script>
