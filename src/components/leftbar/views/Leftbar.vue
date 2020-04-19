<template>
<!-- Start Chat Leftbar -->
<div class="chat-leftbar">
    <div class="tab-content" id="pills-tab-justifiedContent">
        <!-- Start Chat Listbar -->
        <div class="tab-pane fade show active" id="pills-chat-justified" role="tabpanel" aria-labelledby="pills-chat-tab-justified">
            <div class="chat-listbar">
                <div class="chat-left-headbar">
                    <div class="row align-items-center">
                        <div class="col-9">
                            <ul class="list-unstyled mb-0">
                                <li class="media">
                                    <img class="align-self-center mr-2" src="../../../assets/images/logo.svg" alt="Generic placeholder image">
                                    <div class="media-body">
                                        <h5 class="mb-0 mt-2">Chat</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <router-link data-toggle="tooltip" data-placement="right" to="/login">
                                <i class="feather icon-log-out"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="chat-left-search">
                    <form>
                        <div class="input-group">
                            <input type="search" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="chat-left-search-btn">
                            <div class="input-group-append">
                                <button class="btn" type="submit" id="chat-left-search-btn"><i class="feather icon-search"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="chat-left-body">
                    <div class="nav flex-column nav-pills chat-userlist" id="chat-list-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link active" id="chat-first-tab" data-toggle="pill" href="#chat-first" role="tab" aria-controls="chat-first" aria-selected="true">
                            <div class="media active">
                                <div class="user-status"></div>
                                <img class="align-self-center rounded-circle" src="../../../assets/images/girl.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>TranVanMy<span class="chat-timing">02:30 pm</span></h5>
                                    <p>Waiting for module 1 to finish...</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="chat-second-tab" data-toggle="pill" href="#chat-second" role="tab" aria-controls="chat-second" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/boy.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>James Simeron<span class="chat-timing">Today</span></h5>
                                    <p>Send your CV for more info...</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="chat-third-tab" data-toggle="pill" href="#chat-third" role="tab" aria-controls="chat-third" aria-selected="false">
                            <div class="media">
                                <div class="user-status status-offline"></div>
                                <img class="align-self-center rounded-circle" src="../../../assets/images/men.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Lauren Gotlib<span class="badge badge-primary ml-2">5</span><span class="chat-timing">Oct 08</span></h5>
                                    <p>Hi</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="chat-fourth-tab" data-toggle="pill" href="#chat-fourth" role="tab" aria-controls="chat-fourth" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/women.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Nebraska Oshivo<span class="chat-timing">Sep 25</span></h5>
                                    <p>Could you please send PDF?</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="chat-fifth-tab" data-toggle="pill" href="#chat-fifth" role="tab" aria-controls="chat-fifth" aria-selected="false">
                            <div class="media">
                                <div class="user-status status-away"></div>
                                <img class="align-self-center rounded-circle" src="../../../assets/images/girl.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Noir Ajkeban<span class="badge badge-primary ml-2">8</span> <span class="chat-timing">Sep 10</span></h5>
                                    <p>See you at the Lunch...</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="chat-sixth-tab" data-toggle="pill" href="#chat-sixth" role="tab" aria-controls="chat-sixth" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/boy.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Will Patinson<span class="chat-timing">Sep 08</span></h5>
                                    <p>Where have you been?</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="chat-seventh-tab" data-toggle="pill" href="#chat-seventh" role="tab" aria-controls="chat-seventh" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/girl.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Simran Kaur<span class="badge badge-primary ml-2">3</span> <span class="chat-timing">Sep 07</span></h5>
                                    <p>I sent app proposal to you.</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="chat-eighth-tab" data-toggle="pill" href="#chat-eighth" role="tab" aria-controls="chat-eighth" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/women.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Courtney Cox<span class="chat-timing">Sep 05</span></h5>
                                    <p>Please, revert on issues.</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="chat-ninth-tab" data-toggle="pill" href="#chat-ninth" role="tab" aria-controls="chat-ninth" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/men.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Andrew Garfield<span class="chat-timing">Aug 25</span></h5>
                                    <p>Your presence is awaited...</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="chat-tenth-tab" data-toggle="pill" href="#chat-tenth" role="tab" aria-controls="chat-tenth" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/girl.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Rose Witherspoon<span class="chat-timing">Aug 18</span></h5>
                                    <p>Fanfest is coming...</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="chat-eleventh-tab" data-toggle="pill" href="#chat-eleventh" role="tab" aria-controls="chat-eleventh" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/women.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Seema Roy<span class="chat-timing">Aug 11</span></h5>
                                    <p>Bye. Tc...</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="chat-twelth-tab" data-toggle="pill" href="#chat-twelth" role="tab" aria-controls="chat-twelth" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/boy.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Anand Kumar<span class="badge badge-primary ml-2">2</span> <span class="chat-timing">Aug 03</span></h5>
                                    <p>I see</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="chat-thirteenth-tab" data-toggle="pill" href="#chat-thirteenth" role="tab" aria-controls="chat-thirteenth" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/men.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Vladimir Jeir<span class="chat-timing">Jul 28</span></h5>
                                    <p>When are you coming home?</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="chat-fourtinth-tab" data-toggle="pill" href="#chat-fourtinth" role="tab" aria-controls="chat-fourtinth" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/girl.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Jessica Meir<span class="chat-timing">Jul 21</span></h5>
                                    <p>Hmmmm</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Chat Listbar -->
        <!-- Start Chat Addbar -->
        <div class="tab-pane fade" id="pills-addchat-justified" role="tabpanel" aria-labelledby="pills-addchat-tab-justified">
            <div class="chat-addbar">
                <div class="chat-left-headbar">
                    <div class="row align-items-center">
                        <div class="col-9">
                            <ul class="list-unstyled mb-0">
                                <li class="media">
                                    <img class="align-self-center mr-2" src="../../../assets/images/logo.svg" alt="Generic placeholder image">
                                    <div class="media-body">
                                        <h5 class="mb-0 mt-2">New Chat</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <a href="#" data-toggle="modal" data-target="#createGroup"><i class="feather icon-users"></i></a>
                        </div>
                    </div>
                </div>
                <div class="chat-left-search">
                    <form>
                        <div class="input-group">
                            <input type="search" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="chat-left-search-user-btn">
                            <div class="input-group-append">
                                <button class="btn" type="submit" id="chat-left-search-user-btn"><i class="feather icon-search"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="chat-left-body">
                    <div class="nav flex-column nav-pills chat-userlist" id="new-chat-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link active" id="new-chat-first-tab" data-toggle="pill" href="#" role="tab" aria-selected="true">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/men.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>John Doe</h5>
                                    <p>Hey there. I am on Chalty.</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="new-chat-second-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/women.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Ema Star</h5>
                                    <p>Work mode ON !!</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="new-chat-third-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/boy.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Roger Day</h5>
                                    <p>Let's go hiking.</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="new-chat-fourth-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/men.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Paul Taylor</h5>
                                    <p>Why so serious ?</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="new-chat-fifth-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/girl.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Cary Peck</h5>
                                    <p> ** No Status **</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="new-chat-sixth-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/women.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Meghan Murphy</h5>
                                    <p>Feeling happy...</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="new-chat-seventh-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/boy.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Sansa Smith</h5>
                                    <p>World is Selfish.</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="new-chat-eighth-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/girl.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Jelly Witherspoon</h5>
                                    <p>Best day of my life.</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="new-chat-ninth-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/men.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Loy Diesel</h5>
                                    <p>Hoping for better tomorrow.</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="new-chat-tenth-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/boy.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Sham Chaterjee</h5>
                                    <p>No Status</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="new-chat-eleventh-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/girl.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Krishna Nayar</h5>
                                    <p>Looking for Graphics Designer.</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="new-chat-twelth-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/men.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Arjun Lohia</h5>
                                    <p>Mood Off</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="new-chat-thirteenth-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/boy.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Mike Spencer</h5>
                                    <p>It's School time</p>
                                </div>
                            </div>
                        </a>
                        <a class="nav-link" id="new-chat-fourthinth-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">
                            <div class="media">
                                <img class="align-self-center rounded-circle" src="../../../assets/images/men.svg" alt="User Image">
                                <div class="media-body">
                                    <h5>Tom Cruz</h5>
                                    <p>New Job. New Asporations.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Chat Addbar -->
        <!-- Start Chat Profilebar -->
        <div class="tab-pane fade" id="pills-profile-justified" role="tabpanel" aria-labelledby="pills-profile-tab-justified">
            <div class="chat-profilebar">
                <div class="chat-left-headbar">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <ul class="list-unstyled mb-0">
                                <li class="media">
                                    <img class="align-self-center mr-2" src="../../../assets/images/logo.svg" alt="Generic placeholder image">
                                    <div class="media-body">
                                        <h5 class="mb-0 mt-2">My Profile</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="chat-left-body">
                    <div class="profilebar">
                        <img class="profile-pic img-fluid" src="../../../assets/images/men.svg" alt="profile-pic">
                        <div class="profile-edit">
                            <i class="feather icon-camera upload-button"></i>
                            <input class="profile-upload" type="file" accept="image/*" />
                        </div>
                        <h5>Will Patinson</h5>
                        <p class="mb-0">Florida, USA</p>
                    </div>
                    <div class="profile-detail">
                        <ul class="list-unstyled mb-0">
                            <li class="media">
                                <i class="feather icon-user align-self-center"></i>
                                <div class="media-body">
                                    <p>Username</p>
                                    <div class="input-group">
                                        <input type="text" class="form-control" value="Will Patinson" aria-label="Will Patinson" aria-describedby="button-addon-group-username">
                                        <div class="input-group-append">
                                            <button class="btn btn-link" type="button" id="button-addon-group-username">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="media">
                                <i class="feather icon-map align-self-center"></i>
                                <div class="media-body">
                                    <p>Location</p>
                                    <div class="input-group">
                                        <input type="text" class="form-control" value="Florida, USA" aria-label="Florida, USA" aria-describedby="button-addon-group-location">
                                        <div class="input-group-append">
                                            <button class="btn btn-link" type="button" id="button-addon-group-location">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="media">
                                <i class="feather icon-message-square align-self-center"></i>
                                <div class="media-body">
                                    <p>Status</p>
                                    <div class="input-group">
                                        <input type="text" class="form-control" value="I am on Gappa." aria-label="I am on Gappa" aria-describedby="button-addon-group-status">
                                        <div class="input-group-append">
                                            <button class="btn btn-link" type="button" id="button-addon-group-status">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="media">
                                <i class="feather icon-mail align-self-center"></i>
                                <div class="media-body">
                                    <p>Email ID</p>
                                    <div class="input-group">
                                        <input type="email" class="form-control" value="demo@example.com" aria-label="demo@example.com" aria-describedby="button-addon-group-emailid">
                                        <div class="input-group-append">
                                            <button class="btn btn-link" type="button" id="button-addon-group-emailid">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="media">
                                <i class="feather icon-lock align-self-center"></i>
                                <div class="media-body">
                                    <p>Password</p>
                                    <div class="input-group">
                                        <input type="password" class="form-control" value="********" aria-label="********" aria-describedby="button-addon-group-password">
                                        <div class="input-group-append">
                                            <button class="btn btn-link" type="button" id="button-addon-group-password">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Chat Profilebar -->
        <!-- Start Chat Settingbar -->
        <div class="tab-pane fade" id="pills-setting-justified" role="tabpanel" aria-labelledby="pills-setting-tab-justified">
            <div class="chat-settingbar">
                <div class="chat-left-headbar">
                    <div class="row align-items-center">
                        <div class="col-9">
                            <ul class="list-unstyled mb-0">
                                <li class="media">
                                    <img class="align-self-center mr-2" src="../../../assets/images/logo.svg" alt="Generic placeholder image">
                                    <div class="media-body">
                                        <h5 class="mb-0 mt-2">Setting</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <div class="dropdown">
                                <a href="#" id="settingDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="feather icon-more-vertical-"></i></a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="settingDropdown">
                                    <a class="dropdown-item font-14" href="#">Reset to Defaults</a>
                                    <a class="dropdown-item font-14" href="#">Backup</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chat-left-body">
                    <p class="setting-header">General Settings</p>
                    <div class="general-setting">
                        <div class="row align-items-center pb-3">
                            <div class="col-9">
                                <h6 class="mb-0">Notification Sounds</h6>
                            </div>
                            <div class="col-3 text-right">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="notificationSound" checked>
                                    <label class="custom-control-label" for="notificationSound"></label>
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-center pb-3">
                            <div class="col-9">
                                <h6 class="mb-0">New Message Alerts</h6>
                            </div>
                            <div class="col-3 text-right">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="newMessageAlerts">
                                    <label class="custom-control-label" for="newMessageAlerts"></label>
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-center pb-3">
                            <div class="col-9">
                                <h6 class="mb-0">Show Mini Messages in Sidebar</h6>
                            </div>
                            <div class="col-3 text-right">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="showMiniMessages">
                                    <label class="custom-control-label" for="showMiniMessages"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="setting-header">Privacy Settings</p>
                    <div class="privacy-setting">
                        <div class="row align-items-center pb-3">
                            <div class="col-9">
                                <h6 class="mb-0">Read Receipts</h6>
                            </div>
                            <div class="col-3 text-right">
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" class="custom-control-input" id="readReceipts" checked>
                                    <label class="custom-control-label" for="readReceipts"></label>
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-center pb-3">
                            <div class="col-9">
                                <h6 class="mb-0">Show Profile Picture</h6>
                            </div>
                            <div class="col-3 text-right">
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" class="custom-control-input" id="showProfilePicture">
                                    <label class="custom-control-label" for="showProfilePicture"></label>
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-center pb-3">
                            <div class="col-9">
                                <h6 class="mb-0">Allow Messages from Strangers</h6>
                            </div>
                            <div class="col-3 text-right">
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" class="custom-control-input" id="allowMessageToStrangers">
                                    <label class="custom-control-label" for="allowMessageToStrangers"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="setting-header">Design Settings</p>
                    <div class="design-setting custom-checkbox-button">
                        <div class="form-check-inline checkbox-primary">
                            <input type="checkbox" id="customCheckboxInline5" name="customCheckboxInline2" checked>
                            <label for="customCheckboxInline5"></label>
                        </div>
                        <div class="form-check-inline checkbox-secondary">
                            <input type="checkbox" id="customCheckboxInline6" name="customCheckboxInline2">
                            <label for="customCheckboxInline6"></label>
                        </div>
                        <div class="form-check-inline checkbox-success">
                            <input type="checkbox" id="customCheckboxInline7" name="customCheckboxInline2">
                            <label for="customCheckboxInline7"></label>
                        </div>
                        <div class="form-check-inline checkbox-danger">
                            <input type="checkbox" id="customCheckboxInline8" name="customCheckboxInline2">
                            <label for="customCheckboxInline8"></label>
                        </div>
                        <div class="form-check-inline checkbox-warning">
                            <input type="checkbox" id="customCheckboxInline9" name="customCheckboxInline2">
                            <label for="customCheckboxInline9"></label>
                        </div>
                        <div class="form-check-inline checkbox-info">
                            <input type="checkbox" id="customCheckboxInline10" name="customCheckboxInline2">
                            <label for="customCheckboxInline10"></label>
                        </div>
                        <div class="form-check-inline checkbox-light">
                            <input type="checkbox" id="customCheckboxInline11" name="customCheckboxInline2">
                            <label for="customCheckboxInline11"></label>
                        </div>
                        <div class="form-check-inline checkbox-dark">
                            <input type="checkbox" id="customCheckboxInline12" name="customCheckboxInline2">
                            <label for="customCheckboxInline12"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Chat Settingbar -->
    </div>
    <div class="chat-menu">
        <ul class="nav nav-pills nav-justified mb-0" id="pills-tab-justified" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="pills-chat-tab-justified" data-toggle="pill" href="#pills-chat-justified" role="tab" aria-controls="pills-chat-justified" aria-selected="true"><i class="feather icon-message-circle"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-addchat-tab-justified" data-toggle="pill" href="#pills-addchat-justified" role="tab" aria-controls="pills-addchat-justified" aria-selected="false"><i class="feather icon-edit-1"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-profile-tab-justified" data-toggle="pill" href="#pills-profile-justified" role="tab" aria-controls="pills-profile-justified" aria-selected="false"><i class="feather icon-user"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-setting-tab-justified" data-toggle="pill" href="#pills-setting-justified" role="tab" aria-controls="pills-setting-justified" aria-selected="false"><i class="feather icon-settings"></i></a>
            </li>
        </ul>
    </div>
</div>
<!-- End Chat Leftbar -->
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    name: "Leftbar",
    components: {

    },
    data() {
        return {};
    },
    computed: {},
    created() {}
}
</script>
