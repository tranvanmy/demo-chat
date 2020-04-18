<template>
<!-- Start Chat User Info -->
<div class="chat-user-info">
    <div class="chat-user-head">
        <div class="row align-items-center">
            <div class="col-9">
                <h5>User Info</h5>
            </div>
            <div class="col-3">
                <ul class="list-inline float-right mb-0">
                    <li class="list-inline-item">
                        <a href="#" id="close-user-info"><i class="feather icon-x"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="chat-user-body">
        <div class="userbar">
            <img class="user-pic img-fluid" src="../../../assets/images/girl.svg" alt="user-pic">
            <h5>TranVanMy</h5>
            <p class="mb-0">New York, USA</p>
        </div>
        <div class="user-detail">
            <p class="user-detail-header">About</p>
            <div class="user-about">
                <h6><i class="feather icon-heart mr-2"></i>Feeling good today.</h6>
                <h6 class="my-3"><i class="feather icon-mail mr-2"></i>demo@example.com</h6>
                <h6 class="mb-0"><i class="feather icon-phone-call mr-2"></i>+1 9876543210</h6>
            </div>
            <p class="user-detail-header">Social Profile</p>
            <div class="user-social">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                        <a href="#" class="facebook"><i class="feather icon-facebook"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="twitter"><i class="feather icon-twitter"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="instagram"><i class="feather icon-instagram"></i></a>
                    </li>
                </ul>
            </div>
            <p class="user-detail-header">Media</p>
            <div class="user-media">
                <div class="user-media-slider">
                    <div class="user-media-slider-item">
                        <img src="../../../assets/images/media_01.png" class="" alt="user-media">
                    </div>
                    <div class="user-media-slider-item">
                        <img src="../../../assets/images/media_02.png" class="" alt="user-media">
                    </div>
                    <div class="user-media-slider-item">
                        <img src="../../../assets/images/media_03.png" class="" alt="user-media">
                    </div>
                    <div class="user-media-slider-item">
                        <img src="../../../assets/images/media_04.png" class="" alt="user-media">
                    </div>
                    <div class="user-media-slider-item">
                        <img src="../../../assets/images/pdf.svg" class="" alt="user-media">
                    </div>
                    <div class="user-media-slider-item">
                        <img src="../../../assets/images/xls.svg" class="" alt="user-media">
                    </div>
                    <div class="user-media-slider-item">
                        <img src="../../../assets/images/doc.svg" class="" alt="user-media">
                    </div>
                </div>
            </div>
            <p class="user-detail-header">Settings</p>
            <div class="user-setting">
                <div class="row align-items-center pb-3">
                    <div class="col-9">
                        <h6 class="mb-0">Mute Notifications</h6>
                    </div>
                    <div class="col-3 text-right">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="muteNotification" checked>
                            <label class="custom-control-label" for="muteNotification"></label>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center pb-3">
                    <div class="col-9">
                        <h6 class="mb-0">Block Contact</h6>
                    </div>
                    <div class="col-3 text-right">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="blockContact">
                            <label class="custom-control-label" for="blockContact"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Chat User Info -->
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    name: "UserInfor",
    components: {

    },
    data() {
        return {};
    },
    computed: {},
    created() {}
}
</script>
