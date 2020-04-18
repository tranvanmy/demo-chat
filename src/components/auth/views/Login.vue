<template>
<!-- Start Containerbar -->
<div id="containerbar" class="containerbar authenticate-bg">
    <!-- Start Container -->
    <div class="container">
        <div class="auth-box login-box">
            <!-- Start row -->
            <div class="row no-gutters align-items-center justify-content-center">
                <!-- Start col -->
                <div class="col-md-6 col-lg-5">
                    <!-- Start Auth Box -->
                    <div class="auth-box-right">
                        <div class="card">
                            <div class="card-body">
                                <form>
                                    <div class="form-head">
                                        <a href="" class="logo"><img src="../../../assets/images/logo.svg" class="img-fluid" alt="logo"></a>
                                    </div>
                                    <router-link  class="btn btn-success btn-lg btn-block font-18" to="/">
                                        Log in with GAC
                                    </router-link>
                                </form>
                                <p class="mb-0 mt-3">Don't have a account? <a href="http://themesbox.in/admin-templates/gappa/html/light/register.html">Sign up</a></p>
                            </div>
                        </div>
                    </div>
                    <!-- End Auth Box -->
                </div>
                <!-- End col -->
            </div>
            <!-- End row -->
        </div>
    </div>
    <!-- End Container -->
</div>
<!-- End Containerbar -->
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    name: "Login",
    components: {

    },
    data() {
        return {};
    },
    computed: {},
    created() {}
}
</script>
