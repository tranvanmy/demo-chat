<template>
<div class="modal create-group-modal fade" id="createGroup" tabindex="-1" role="dialog" aria-labelledby="createGroupTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="createGroupTitle">Create Group</h5>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" id="groupName" placeholder="Enter Group Name">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" name="groupDesc" id="groupDesc" rows="3" placeholder="Enter Group Description"></textarea>
                    </div>
                    <p class="create-group-header">Add Users</p>
                    <div class="added-users">
                        <div class="avatar-group">
                            <div class="avatar">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="TranVanMy">
                                    <img src="../../../assets/images/girl.svg" alt="avatar" class="rounded-circle">
                                </a>
                            </div>
                            <div class="avatar">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Lauren Gotlib">
                                    <img src="../../../assets/images/men.svg" alt="avatar" class="rounded-circle">
                                </a>
                            </div>
                            <div class="avatar">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Noir Ajkeban">
                                    <img src="../../../assets/images/women.svg" alt="avatar" class="rounded-circle">
                                </a>
                            </div>
                            <div class="avatar">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add New User">
                                    <img src="../../../assets/images/plus.svg" alt="avatar" class="rounded-circle">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="add-users-search">
                        <div class="input-group">
                            <input type="search" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="add-users-search-btn">
                            <div class="input-group-append">
                                <button class="btn" type="submit" id="add-users-search-btn"><i class="feather icon-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="add-users-list">
                        <ul class="list-unstyled">
                            <li class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/girl.svg" alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5><span>TranVanMy</span></h5>
                                    <p>Hey there. I am on Chalty.</p>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="userfirstAdd" checked>
                                    <label class="custom-control-label" for="userfirstAdd"></label>
                                </div>
                            </li>
                            <li class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/boy.svg" alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5>James Simeron</h5>
                                    <p>Work mode ON !!</p>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="usersecondAdd">
                                    <label class="custom-control-label" for="usersecondAdd"></label>
                                </div>
                            </li>
                            <li class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/men.svg" alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5>Lauren Gotlib</h5>
                                    <p>Let's go hiking.</p>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="userthirdAdd" checked>
                                    <label class="custom-control-label" for="userthirdAdd"></label>
                                </div>
                            </li>
                            <li class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/girl.svg" alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5>Nebraska Oshivo</h5>
                                    <p>Why so serious ?</p>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="userfourthAdd">
                                    <label class="custom-control-label" for="userfourthAdd"></label>
                                </div>
                            </li>
                            <li class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/women.svg" alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5>Noir Ajkeban</h5>
                                    <p> ** No Status **</p>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="userfifthAdd" checked>
                                    <label class="custom-control-label" for="userfifthAdd"></label>
                                </div>
                            </li>
                            <li class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/boy.svg" alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5><span>John Smith</span></h5>
                                    <p>Hey there. I am on Chalty.</p>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="userSixthAdd" checked>
                                    <label class="custom-control-label" for="userSixthAdd"></label>
                                </div>
                            </li>
                            <li class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/girl.svg" alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5>Arya Thompson</h5>
                                    <p>Work mode ON !!</p>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="userSeventhdAdd">
                                    <label class="custom-control-label" for="userSeventhdAdd"></label>
                                </div>
                            </li>
                            <li class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/men.svg" alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5>Mike Wright</h5>
                                    <p>Let's go hiking.</p>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="userEightAdd">
                                    <label class="custom-control-label" for="userEightAdd"></label>
                                </div>
                            </li>
                            <li class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/boy.svg" alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5>Robert Pattinson</h5>
                                    <p>Why so serious ?</p>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="userNinthAdd">
                                    <label class="custom-control-label" for="userNinthAdd"></label>
                                </div>
                            </li>
                            <li class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/women.svg" alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5>Seema Rao</h5>
                                    <p> ** No Status **</p>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="userTenthAdd">
                                    <label class="custom-control-label" for="userTenthAdd"></label>
                                </div>
                            </li>
                            <li class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/girl.svg" alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5>Noir Williamson</h5>
                                    <p> ** No Status **</p>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="userEleventhAdd">
                                    <label class="custom-control-label" for="userEleventhAdd"></label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-3 text-center">
                        <button type="submit" class="btn btn-primary"><i class="feather icon-plus mr-2"></i>Create Group</button>
                    </div>
                </form>
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
    name: "CreatGroup",
    components: {

    },
    data() {
        return {};
    },
    computed: {},
    created() {}
}
</script>
