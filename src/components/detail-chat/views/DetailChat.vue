<template>
<!-- Start Chat Detail -->
<div class="chat-detail">
    <div class="chat-head">
        <div class="row align-items-center">
            <div class="col-6">
                <ul class="list-unstyled mb-0">
                    <li class="media">
                        <div class="user-status"></div>
                        <img class="align-self-center rounded-circle" src="../../../assets/images/girl.svg" alt="Generic placeholder image">
                        <div class="media-body">
                            <h5>TranVanMy</h5>
                            <p class="mb-0">Online</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <ul class="list-inline float-right mb-0">
                    <li class="list-inline-item">
                        <a href="#" data-toggle="modal" data-target="#incomingVoiceCall"><i class="feather icon-phone"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" data-toggle="modal" data-target="#incomingVideoCall"><i class="feather icon-video"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <div class="dropdown">
                            <a href="#" class="" id="chatDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="feather icon-more-vertical-"></i></a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="chatDropdown">
                                <a class="dropdown-item font-14" href="#" id="view-user-info">View User Info</a>
                                <a class="dropdown-item font-14" href="#">Search</a>
                                <a class="dropdown-item font-14" href="#">Archive</a>
                                <a class="dropdown-item font-14" href="#">Mute</a>
                                <a class="dropdown-item font-14" href="#">Export Chat</a>
                                <a class="dropdown-item font-14" href="#">Clear Message</a>
                            </div>
                        </div>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="back-arrow"><i class="feather icon-x"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="chat-body">
        <div class="tab-content" id="chat-listContent">
            <div class="tab-pane fade show active" id="chat-first" role="tabpanel" aria-labelledby="chat-first-tab">
                <div class="chat-day text-center mb-3">
                    <span class="badge badge-secondary-inverse">Today</span>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Hello! please, let me know the status about project after school.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:18 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>I have completed 4 stages 5 stages remaining.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:20 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Let me share video for detailed information</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:22 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>

                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Thanks for the video.</span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>I am sharing images of project work done so far. <br />Please, have a look at images and let me know if changes required.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:30 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Could you share photos, please?</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:31 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <ul class="list-inline message-media">
                            <li class="list-inline-item">
                                <img src="../../../assets/images/media_01.png" class="img-fluid" alt="media">
                            </li>
                            <li class="list-inline-item">
                                <img src="../../../assets/images/media_02.png" class="img-fluid" alt="media">
                            </li>
                            <li class="list-inline-item">
                                <p class="media-more">+07</p>
                            </li>
                        </ul>
                        <span>Photos of product</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:32 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>I request you to schedule demo at 3 pm after 2 days for the better progress. <br />After that we are discussion of final confirmation this project.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:33 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>

                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <ul class="list-unstyled message-document">
                            <li class="media">
                                <img class="align-self-center img-fluid mr-2" src="../../../assets/images/pdf.svg" alt="pdf">
                                <div class="media-body">
                                    <h5><a href="#">Document.pdf</a></h5>
                                    <p>50kb</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:40 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Please, refer this doc file for documentation.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:41 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Sure, I will prepare for the same.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:43 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Great. Thanks</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:45 pm<i class="feather icon-clock ml-2"></i></span>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="chat-second" role="tabpanel" aria-labelledby="chat-second-tab">
                <div class="empty-screen">
                    <img src="../../../assets/images/empty-logo.png" class="img-fluid" alt="empty-logo">
                    <h4 class="my-3">No Conversation Yet.</h4>
                </div>
            </div>
            <div class="tab-pane fade" id="chat-third" role="tabpanel" aria-labelledby="chat-third-tab">
                <div class="chat-day text-center mb-3">
                    <span class="badge badge-secondary-inverse">Today</span>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Hello! I got 95% in Semester 7</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:18 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Yay !!!</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:20 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Wow! That's great news. Where's the party?</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:22 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <ul class="list-unstyled message-document">
                            <li class="media">
                                <img class="align-self-center img-fluid mr-2" src="../../../assets/images/pdf.svg" alt="pdf">
                                <div class="media-body">
                                    <h5><a href="#">Results.pdf</a></h5>
                                    <p>50kb</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:40 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Thanks I will check and get back.</span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Wow!! great continuity.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:30 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Thank you for your nice words.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:31 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Continue process of improving everyday. <br />I will be there this weekend for further guidance.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:33 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="chat-fourth" role="tabpanel" aria-labelledby="chat-fourth-tab">
                <div class="empty-screen">
                    <img src="../../../assets/images/empty-logo.png" class="img-fluid" alt="empty-logo">
                    <h4 class="my-3">No Conversation Yet.</h4>
                </div>
            </div>
            <div class="tab-pane fade" id="chat-fifth" role="tabpanel" aria-labelledby="chat-fifth-tab">
                <div class="chat-day text-center mb-3">
                    <span class="badge badge-secondary-inverse">Today</span>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Hi</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:18 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Hello</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:20 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>How was your day going?</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:22 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Seems you are enjoying too much in Las Vegas.</span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Be Responsible. <br />Don't drink and drive. Take the taxi for home.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:30 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>I never drink and drive, ma!!!</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:31 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Send me photos of your hotelview as well.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:31 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <ul class="list-inline message-media">
                            <li class="list-inline-item">
                                <img src="../../../assets/images/media_01.png" class="img-fluid" alt="media">
                            </li>
                            <li class="list-inline-item">
                                <img src="../../../assets/images/media_02.png" class="img-fluid" alt="media">
                            </li>
                            <li class="list-inline-item">
                                <p class="media-more">+07</p>
                            </li>
                        </ul>
                        <span>Photos of Nevada Trip</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:32 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Wow. That seems so much fun.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:33 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Wish, could you be there also.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:41 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>gotta go. See you soon. Take Care</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:43 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>You too. Have Fun.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:45 pm<i class="feather icon-clock ml-2"></i></span>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="chat-sixth" role="tabpanel" aria-labelledby="chat-sixth-tab">
                <div class="empty-screen">
                    <img src="../../../assets/images/empty-logo.png" class="img-fluid" alt="empty-logo">
                    <h4 class="my-3">No Conversation Yet.</h4>
                </div>
            </div>
            <div class="tab-pane fade" id="chat-seventh" role="tabpanel" aria-labelledby="chat-seventh-tab">
                <div class="chat-day text-center mb-3">
                    <span class="badge badge-secondary-inverse">Today</span>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>I love you</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:18 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Lol</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:20 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>I need you in my life</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:22 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>lol</span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>you are my everything. love you so much</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:30 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>LOL</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:31 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>iPhone X or iPhone XR</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:33 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>iPhone X</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:33 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Lol</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:33 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Are you going to buy me that phone?</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:33 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>lol</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:33 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Please, tell me yes</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:33 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>LOL</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:33 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Why are so many lol</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:33 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>It's thunder from zambia fire.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:33 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="chat-eighth" role="tabpanel" aria-labelledby="chat-eighth-tab">
                <div class="empty-screen">
                    <img src="../../../assets/images/empty-logo.png" class="img-fluid" alt="empty-logo">
                    <h4 class="my-3">No Conversation Yet.</h4>
                </div>
            </div>
            <div class="tab-pane fade" id="chat-ninth" role="tabpanel" aria-labelledby="chat-ninth-tab">
                <div class="chat-day text-center mb-3">
                    <span class="badge badge-secondary-inverse">Today</span>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>How you doin???</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:18 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>I watched F.R.I.E.N.D.S. compeletely.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:20 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Let's go party then</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:22 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Duh !!! Next time</span>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="chat-tenth" role="tabpanel" aria-labelledby="chat-tenth-tab">
                <div class="empty-screen">
                    <img src="../../../assets/images/empty-logo.png" class="img-fluid" alt="empty-logo">
                    <h4 class="my-3">No Conversation Yet.</h4>
                </div>
            </div>
            <div class="tab-pane fade" id="chat-eleventh" role="tabpanel" aria-labelledby="chat-eleventh-tab">
                <div class="chat-day text-center mb-3">
                    <span class="badge badge-secondary-inverse">Today</span>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Please, pay $100 to megan. I will give it to you when home.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:18 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Okay given. Now you owe me $110.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:20 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Why 10$ Extra?</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:22 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Convenience Charge it is.</span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>I am not gonna pay any damn charges.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:31 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="chat-twelth" role="tabpanel" aria-labelledby="chat-twelth-tab">
                <div class="empty-screen">
                    <img src="../../../assets/images/empty-logo.png" class="img-fluid" alt="empty-logo">
                    <h4 class="my-3">No Conversation Yet.</h4>
                </div>
            </div>
            <div class="tab-pane fade" id="chat-thirteenth" role="tabpanel" aria-labelledby="chat-thirteenth-tab">
                <div class="chat-day text-center mb-3">
                    <span class="badge badge-secondary-inverse">Today</span>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Ding dong. who is it?</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:18 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>Lorem Ipsum</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:20 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Need some serif.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:22 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>We only have slabs.</span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Do you have more height or width?</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:31 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-left">
                    <div class="chat-message-text">
                        <span>We are bold.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:41 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
                <div class="chat-message chat-message-right">
                    <div class="chat-message-text">
                        <span>Fine with it.</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:43 pm<i class="feather icon-check ml-2"></i></span>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="chat-fourtinth" role="tabpanel" aria-labelledby="chat-fourtinth-tab">
                <div class="empty-screen">
                    <img src="../../../assets/images/empty-logo.png" class="img-fluid" alt="empty-logo">
                    <h4 class="my-3">No Conversation Yet.</h4>
                </div>
            </div>
        </div>
    </div>
    <div class="chat-bottom">
        <div class="chat-messagebar">
            <form>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <a href="#" id="button-addonmic"><i class="feather icon-mic"></i></a>
                    </div>
                    <input type="text" class="form-control" placeholder="Type a message..." aria-label="Text">
                    <div class="input-group-append">
                        <a href="#" class="mr-3" id="button-addonlink"><i class="feather icon-paperclip"></i></a>
                        <a href="#" id="button-addonsend"><i class="feather icon-send"></i></a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- End Chat Detail -->
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    name: "DetailChat",
    components: {

    },
    data() {
        return {};
    },
    computed: {},
    created() {}
}
</script>
