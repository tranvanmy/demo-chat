<template>
<!-- Start Error Screen Modal -->
<div class="modal error-screen-modal fade" id="errorScreen" tabindex="-1" role="dialog" aria-labelledby="errorScreenTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="errorScreenTitle">Connection Error</h5>
            </div>
            <div class="modal-body">
                <img src="../../../assets/images/connection_error.svg" class="img-fluid" alt="connection_error">
                <h5>Computer not Connected</h5>
                <p>Please, check internet connection this PC.</p>
                <button type="button" class="btn btn-info"><i class="feather icon-repeat mr-2"></i>Try Again</button>
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
    name: "ConnectionError",
    components: {

    },
    data() {
        return {};
    },
    computed: {},
    created() {}
}
</script>
