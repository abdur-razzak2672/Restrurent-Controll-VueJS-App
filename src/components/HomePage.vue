<template>
  <TopHeader />
  <main class="flex-shrink-0 main-container">
        <!-- page content goes here -->
        <div class="banner-hero vh-100 bg-white text-dark">
            <!-- Swiper -->
            <div class="swiper-container slider-vertical swiper-horizontal-arrow vh-100">
                <div class="swiper-wrapper">
                    <div class="swiper-slide no-zoom">
                        <span class="slider-backgound-cicrle"></span>
                        <div class="container h-100">
                            <div class="row h-100">
                                <div class="col-12 col-md-8 col-lg-6 align-self-center slide-content">
                                    <h1 class="f-80">Enjoy hand made delicious food</h1>
                                    <h3 class="font-weight-medium">We are offering quality food and<br>Taste like home made food.</h3>
                                    <br>
                                    <a href="" class="btn btn-lg btn-outline-default">Order now <span class="ml-2 icon arrow_right"></span></a>
                                </div>
                                <div class="col position-relative section-100">
                                    <div class="background background-w-100">
                                        <img src="img/banner2.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide no-zoom">
                        <span class="slider-backgound-cicrle"></span>
                        <div class="container h-100">
                            <div class="row h-100">
                                <div class="col-12 col-md-8 col-lg-6 align-self-center slide-content">
                                    <h1 class="f-80">Enjoy hand crafted & delicious food</h1>
                                    <h3 class="font-weight-medium">We are offering quality food and<br>Taste like home made food.</h3>
                                    <br>
                                    <a href="" class="btn btn-lg btn-outline-default">Order now <span class="ml-2 icon arrow_right"></span></a>
                                </div>
                                <div class="col position-relative section-100">
                                    <div class="background background-w-100">
                                        <img src="img/banner1.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide no-zoom">
                        <span class="slider-backgound-cicrle"></span>
                        <div class="container h-100">
                            <div class="row h-100">
                                <div class="col-12 col-md-8 col-lg-6 align-self-center slide-content">
                                    <h1 class="f-80">Enjoy hand crated & delicious food</h1>
                                    <h3 class="font-weight-medium">We are offering quality food and<br>Taste like home made food.</h3>
                                    <br>
                                    <a href="" class="btn btn-lg btn-outline-default">Order now <span class="ml-2 icon arrow_right"></span></a>
                                </div>
                                <div class="col position-relative section-100">
                                    <div class="background background-w-100">
                                        <img src="img/banner.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Add Arrows -->
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
        <div class="section-50 bg-default pt-0 z-1 position-relative ">
            <div class="background opacity-10">
                <img src="/public/assets/img/map.png" alt="">
            </div>
            <div class="container-fluid">
                <div class="row top-85t position-relative">
                    <div class="col-11 col-md-8 col-lg-6 col-xl-5 mx-auto">
                        <div class="card border-0 shadow">
                            <div class="card-header">
                                <ul class="nav nav-pills nav-justified" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="delivery-tab" data-toggle="tab" href="#delivery" role="tab" aria-controls="delivery" aria-selected="true"><span class="icon_pin_alt icons icon-40 mr-3 bg-default text-white mr-2"></span>Delivery</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="pickup-tab" data-toggle="tab" href="#pickup" role="tab" aria-controls="pickup" aria-selected="false"><span class="icon_gift_alt icons icon-40 mr-3 bg-default text-white mr-2"></span>Pickup</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="delivery" role="tabpanel" aria-labelledby="delivery-tab">
                                        <div class="input-group input-group-lg mb-4">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><span class="icon_map_alt"></span></span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Search your location">
                                        </div>
                                        <button class="btn btn-lg btn-block btn-outline-secondary" type="button"><span class="icon_compass_alt mr-2"></span> Find my location</button>
                                    </div>
                                    <div class="tab-pane fade text-dark" id="pickup" role="tabpanel" aria-labelledby="pickup-tab">
                                        <div class="input-group input-group-lg">
                                            <input type="text" class="form-control basic" placeholder="Search store area" autocomplete="off">
                                            <div class="input-group-append">
                                                <span class="input-group-text"><span class="icon_search"></span></span>
                                            </div>
                                        </div>
                                        <p class="form-text text-muted small text-center mt-3">Autosuggest with city populated ex. type 'New ' </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <button class="btn btn-lg  text-light mt-50" type="button" data-toggle="collapse" data-target="#findmore" aria-expanded="false" aria-controls="findmore">See places around<span class="icon_plus ml-2"></span></button>
                </div>
                <div class="content collapse" id="findmore">
                    <h1 class="text-center mb-5 f-80">Find store to pickup:</h1>
                    <div class="swiper-container multiple mb-4">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide p-2 w-auto">
                                <button type="button" class="btn btn-outline-light pl-2">
                                    <span class="icon_tags_alt icons icon-40 mr-2 bg-default text-white mr-2"></span>
                                    New York
                                </button>
                            </div>
                            <div class="swiper-slide p-2 w-auto">
                                <button type="button" class="btn btn-outline-light pl-2 active">
                                    <span class="icon_tags_alt icons icon-40 mr-2 bg-default text-white mr-2"></span>
                                    Chicago
                                </button>
                            </div>
                            <div class="swiper-slide p-2 w-auto">
                                <button type="button" class="btn btn-outline-light pl-2">
                                    <span class="icon_tags_alt icons icon-40 mr-2 bg-default text-white mr-2"></span>
                                    San Francisco
                                </button>
                            </div>
                            <div class="swiper-slide p-2 w-auto">
                                <button type="button" class="btn btn-outline-light pl-2">
                                    <span class="icon_tags_alt icons icon-40 mr-2 bg-default text-white mr-2"></span>
                                    Los Angeles
                                </button>
                            </div>
                            <div class="swiper-slide p-2 w-auto">
                                <button type="button" class="btn btn-outline-light pl-2">
                                    <span class="icon_tags_alt icons icon-40 mr-2 bg-default text-white mr-2"></span>
                                    Boston
                                </button>
                            </div>
                            <div class="swiper-slide p-2 w-auto">
                                <button type="button" class="btn btn-outline-light pl-2">
                                    <span class="icon_tags_alt icons icon-40 mr-2 bg-default text-white mr-2"></span>
                                    Washington
                                </button>
                            </div>
                            <div class="swiper-slide p-2 w-auto">
                                <button type="button" class="btn btn-outline-light pl-2">
                                    <span class="icon_tags_alt icons icon-40 mr-2 bg-default text-white mr-2"></span>
                                    Las Vegas
                                </button>
                            </div>
                            <div class="swiper-slide p-2 w-auto">
                                <button type="button" class="btn btn-outline-light pl-2">
                                    <span class="icon_tags_alt icons icon-40 mr-2 bg-default text-white mr-2"></span>
                                    Seattles
                                </button>
                            </div>
                            <div class="swiper-slide p-2 w-auto">
                                <button type="button" class="btn btn-outline-light pl-2">
                                    <span class="icon_tags_alt icons icon-40 mr-2 bg-default text-white mr-2"></span>
                                    San Diego
                                </button>
                            </div>
                            <div class="swiper-slide p-2 w-auto">
                                <button type="button" class="btn btn-outline-light pl-2">
                                    <span class="icon_tags_alt icons icon-40 mr-2 bg-default text-white mr-2"></span>
                                    San Antonio
                                </button>
                            </div>
                            <div class="swiper-slide p-2 w-auto">
                                <button type="button" class="btn btn-outline-light pl-2">
                                    <span class="icon_tags_alt icons icon-40 mr-2 bg-default text-white mr-2"></span>
                                    Austin
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="grid row pb-5 no-gutters">
                        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 align-self-center mb-4 grid-sizer"></div>
                        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 align-self-center mb-4 grid-item">
                            <div class="card mx-2 text-dark border-0 shadow">
                                <div class="card-body">
                                    <h4>Brook store</h4>
                                    <p class="text-mute">Building 3<br>
                                        12980 Saratoga Ave Suite B<br>
                                        Saratoga,<br>
                                        CH 95070
                                    </p>
                                    <button type="button" class="btn btn-outline-default pl-2 active">
                                        <span class="icon_gift_alt icons icon-30 mr-2 bg-default text-white mr-2"></span>
                                        Pickup from here
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 align-self-center mb-4 grid-item">
                            <div class="card mx-2 text-dark border-0 shadow">
                                <div class="card-body">
                                    <h4>Silvalika Brook store</h4>
                                    <p class="text-mute">12980 Saratoga Ave Suite B<br>
                                        Saratoga,<br>
                                        CH 95070
                                    </p>
                                    <button type="button" class="btn btn-outline-default pl-2">
                                        <span class="icon_gift_alt icons icon-30 mr-2 bg-default text-white mr-2"></span>
                                        Pickup from here
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 align-self-center mb-4 grid-item">
                            <div class="card mx-2 text-dark border-0 shadow">
                                <div class="card-body">
                                    <h4>Alexadrain store</h4>
                                    <p class="text-mute">Building 3<br>
                                        12980 Saratoga Ave Suite B<br>
                                        Saratoga,<br>
                                        CH 95070
                                    </p>
                                    <button type="button" class="btn btn-outline-default pl-2">
                                        <span class="icon_gift_alt icons icon-30 mr-2 bg-default text-white mr-2"></span>
                                        Pickup from here
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 align-self-center mb-4 grid-item">
                            <div class="card mx-2 text-dark border-0 shadow">
                                <div class="card-body">
                                    <h4>Markchevron store</h4>
                                    <p class="text-mute">Building 3,
                                        12980 Saratoga Ave Suite B,
                                        Saratoga,<br>
                                        CH 95070
                                    </p>
                                    <button type="button" class="btn btn-outline-default pl-2">
                                        <span class="icon_gift_alt icons icon-30 mr-2 bg-default text-white mr-2"></span>
                                        Pickup from here
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 align-self-center mb-4 grid-item">
                            <div class="card mx-2 text-dark border-0 shadow">
                                <div class="card-body">
                                    <h4>Brook store</h4>
                                    <p class="text-mute">Building 3<br>
                                        12980 Saratoga Ave Suite B<br>
                                        Saratoga,<br>
                                        CH 95070
                                    </p>
                                    <button type="button" class="btn btn-outline-default pl-2">
                                        <span class="icon_gift_alt icons icon-30 mr-2 bg-default text-white mr-2"></span>
                                        Pickup from here
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 align-self-center mb-4 grid-item">
                            <div class="card mx-2 text-dark border-0 shadow">
                                <div class="card-body">
                                    <h4>Silvalika Brook store</h4>
                                    <p class="text-mute">12980 Saratoga Ave Suite B<br>
                                        Saratoga,<br>
                                        CH 95070
                                    </p>
                                    <button type="button" class="btn btn-outline-default pl-2">
                                        <span class="icon_gift_alt icons icon-30 mr-2 bg-default text-white mr-2"></span>
                                        Pickup from here
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 align-self-center mb-4 grid-item">
                            <div class="card mx-2 text-dark border-0 shadow">
                                <div class="card-body">
                                    <h4>Alexadrain store</h4>
                                    <p class="text-mute">Building 3<br>
                                        12980 Saratoga Ave Suite B<br>
                                        Saratoga,<br>
                                        CH 95070
                                    </p>
                                    <button type="button" class="btn btn-outline-default pl-2">
                                        <span class="icon_gift_alt icons icon-30 mr-2 bg-default text-white mr-2"></span>
                                        Pickup from here
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 align-self-center mb-4 grid-item">
                            <div class="card mx-2 text-dark border-0 shadow">
                                <div class="card-body">
                                    <h4>Markchevron store</h4>
                                    <p class="text-mute">Building 3<br>
                                        12980 Saratoga Ave Suite B<br>
                                        Saratoga,<br>
                                        CH 95070
                                    </p>
                                    <button type="button" class="btn btn-outline-default pl-2">
                                        <span class="icon_gift_alt icons icon-30 mr-2 bg-default text-white mr-2"></span>
                                        Pickup from here
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-mute text-center"> This address blocks are masonry auto arrange even not same heights.</p>
                </div>
            </div>
        </div>
        <div class="section-150 bg-white">
            <div class="container">
                <h2 class="f-80">Are you hungry enough?</h2>
                <div class="my-3 my-md-4 my-lg-5 h1">We have found most loving items and based on your recent orders. Checkout our wide range of available products or order from menu now! Choose delisious food and tell us about Taste.</div>
            </div>
            <div class="container-fluid mb-2">
                <div class="swiper-container slider-horizontal-arrow swiper-horizontal-arrow swiper-arrow-dark multiple">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide w-400 px-3 pt-4 pb-5">
                            <div class="service-block text-center mb-4 mb-lg-0">
                                <div class="border-block">
                                    <div class="h-250 position-relative mb-4 team">
                                        <div class="background background-h-100">
                                            <img src="img/banner.png" alt="">
                                        </div>
                                    </div>
                                    <h4 class="text-default">Kings Burger</h4>
                                    <p>Delicious Taste | <span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span></p>
                                    <h3 class="text-success my-0">$ 28<sup>.00</sup></h3>
                                    <br>
                                    <button type="button" class="btn-44 btn btn-outline-secondary">S</button>
                                    <button type="button" class="btn-44 btn btn-outline-secondary active">M</button>
                                    <button type="button" class="btn-44 btn btn-outline-secondary">L</button>
                                    <hr>
                                    <div class="row select-quantity">
                                        <div class="col-auto"><button type="button" class="btn btn-outline-light text-dark quantity-remove">-</button></div>
                                        <div class="col"><button type="button" class="btn btn-outline-default addtocartselect"><span class="icon icon_cart_alt vm mr-2"></span> <span class="quantity-number font-weight-bold ">0</span> Add</button></div>
                                        <div class="col-auto"><button type="button" class="btn btn-outline-light text-dark quantity-add">+</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide w-400 px-3 pt-4 pb-5">
                            <div class="service-block text-center mb-4 mb-lg-0">
                                <div class="border-block">
                                    <div class="h-250 position-relative mb-4 team">
                                        <div class="background background-h-100">
                                            <img src="img/banner2.png" alt="">
                                        </div>
                                    </div>
                                    <h4 class="text-default">Pizza Special</h4>
                                    <p>Hand Tosted | <span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span></p>
                                    <h3 class="text-success my-0">$ 25<sup>.00</sup></h3>
                                    <br>
                                    <button type="button" class="btn-44 btn btn-outline-secondary">S</button>
                                    <button type="button" class="btn-44 btn btn-outline-secondary active">M</button>
                                    <button type="button" class="btn-44 btn btn-outline-secondary">L</button>
                                    <hr>
                                    <div class="row select-quantity">
                                        <div class="col-auto"><button type="button" class="btn btn-outline-light text-dark quantity-remove">-</button></div>
                                        <div class="col"><button type="button" class="btn btn-outline-default addtocartselect"><span class="icon icon_cart_alt vm mr-2"></span> <span class="quantity-number font-weight-bold ">0</span> Add</button></div>
                                        <div class="col-auto"><button type="button" class="btn btn-outline-light text-dark quantity-add">+</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide w-400 px-3 pt-4 pb-5">
                            <div class="service-block text-center mb-4 mb-lg-0">
                                <div class="border-block">
                                    <div class="h-250 position-relative mb-4 team">
                                        <div class="background background-h-100">
                                            <img src="img/banner1.png" alt="">
                                        </div>
                                    </div>
                                    <h4 class="text-default">Kings Meal</h4>
                                    <p>Amzaing Spices | <span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span></p>
                                    <h3 class="text-success my-0">$ 30<sup>.00</sup></h3>
                                    <br>
                                    <button type="button" class="btn-44 btn btn-outline-secondary">S</button>
                                    <button type="button" class="btn-44 btn btn-outline-secondary active">M</button>
                                    <button type="button" class="btn-44 btn btn-outline-secondary">L</button>
                                    <hr>
                                    <div class="row select-quantity">
                                        <div class="col-auto"><button type="button" class="btn btn-outline-light text-dark quantity-remove">-</button></div>
                                        <div class="col"><button type="button" class="btn btn-outline-default addtocartselect"><span class="icon icon_cart_alt vm mr-2"></span> <span class="quantity-number font-weight-bold ">0</span> Add</button></div>
                                        <div class="col-auto"><button type="button" class="btn btn-outline-light text-dark quantity-add">+</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide w-400 px-3 pt-4 pb-5">
                            <div class="service-block text-center mb-4 mb-lg-0">
                                <div class="border-block">
                                    <div class="h-250 position-relative mb-4 team">
                                        <div class="background background-h-100">
                                            <img src="img/banner.png" alt="">
                                        </div>
                                    </div>
                                    <h4 class="text-default">Kings Burger</h4>
                                    <p>Delicious Taste | <span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span></p>
                                    <h3 class="text-success my-0">$ 28<sup>.00</sup></h3>
                                    <br>
                                    <button type="button" class="btn-44 btn btn-outline-secondary">S</button>
                                    <button type="button" class="btn-44 btn btn-outline-secondary active">M</button>
                                    <button type="button" class="btn-44 btn btn-outline-secondary">L</button>
                                    <hr>
                                    <div class="row select-quantity">
                                        <div class="col-auto"><button type="button" class="btn btn-outline-light text-dark quantity-remove">-</button></div>
                                        <div class="col"><button type="button" class="btn btn-outline-default addtocartselect"><span class="icon icon_cart_alt vm mr-2"></span> <span class="quantity-number font-weight-bold ">0</span> Add</button></div>
                                        <div class="col-auto"><button type="button" class="btn btn-outline-light text-dark quantity-add">+</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide w-400 px-3 pt-4 pb-5">
                            <div class="service-block text-center mb-4 mb-lg-0">
                                <div class="border-block">
                                    <div class="h-250 position-relative mb-4 team">
                                        <div class="background background-h-100">
                                            <img src="img/banner2.png" alt="">
                                        </div>
                                    </div>
                                    <h4 class="text-default">Pizza Special</h4>
                                    <p>Hand Tosted | <span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span></p>
                                    <h3 class="text-success my-0">$ 25<sup>.00</sup></h3>
                                    <br>
                                    <button type="button" class="btn-44 btn btn-outline-secondary">S</button>
                                    <button type="button" class="btn-44 btn btn-outline-secondary active">M</button>
                                    <button type="button" class="btn-44 btn btn-outline-secondary">L</button>
                                    <hr>
                                    <div class="row select-quantity">
                                        <div class="col-auto"><button type="button" class="btn btn-outline-light text-dark quantity-remove">-</button></div>
                                        <div class="col"><button type="button" class="btn btn-outline-default addtocartselect"><span class="icon icon_cart_alt vm mr-2"></span> <span class="quantity-number font-weight-bold ">0</span> Add</button></div>
                                        <div class="col-auto"><button type="button" class="btn btn-outline-light text-dark quantity-add">+</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide w-400 px-3 pt-4 pb-5">
                            <div class="service-block text-center mb-4 mb-lg-0">
                                <div class="border-block">
                                    <div class="h-250 position-relative mb-4 team">
                                        <div class="background background-h-100">
                                            <img src="img/banner1.png" alt="">
                                        </div>
                                    </div>
                                    <h4 class="text-default">Kings Meal</h4>
                                    <p>Amzaing Spices | <span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span><span class="text-warning icon_star"></span></p>
                                    <h3 class="text-success my-0">$ 30<sup>.00</sup></h3>
                                    <br>
                                    <button type="button" class="btn-44 btn btn-outline-secondary">S</button>
                                    <button type="button" class="btn-44 btn btn-outline-secondary active">M</button>
                                    <button type="button" class="btn-44 btn btn-outline-secondary">L</button>
                                    <hr>
                                    <div class="row select-quantity">
                                        <div class="col-auto"><button type="button" class="btn btn-outline-light text-dark quantity-remove">-</button></div>
                                        <div class="col"><button type="button" class="btn btn-outline-default addtocartselect"><span class="icon icon_cart_alt vm mr-2"></span> <span class="quantity-number font-weight-bold ">0</span> Add</button></div>
                                        <div class="col-auto"><button type="button" class="btn btn-outline-light text-dark quantity-add">+</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-3">
                        <p class="text-mute">Try with increase item count and click on add button its as simplae as that in less space with beautiful animation. Do it now!</p>
                        <a href="" class="text-uppercase small">Read more <span class="ml-2 icon arrow_right"></span></a>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <p class="text-mute">Try with increase item count and click on add button its as simplae as that in less space with beautiful animation. Do it now!</p>
                        <a href="" class="text-uppercase small">Read more <span class="ml-2 icon arrow_right"></span></a>
                    </div>
                    <div class="col-12 col-md-6 col-lg-5 offset-lg-1 border-left">
                        <div class="row">
                            <div class="col text-center py-2">
                                <h1 class="countertext f-80">500</h1>
                                <p class="text-mute">Items</p>
                            </div>
                            <div class="col text-center py-2">
                                <h1 class="countertext f-80">300</h1>
                                <p class="text-mute">Stores</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-150">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-9 col-lg-9">
                        <h2 class="f-80">Best of our services</h2>
                        <div class="my-3 my-md-4 my-lg-5 h1">Our main focus always be customer satifaction by providing flexibility and elasticity with cross browser competibility.</div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="service-block text-center mb-4 mb-lg-0">
                            <div class="border-block">
                                <div class="mb-4 mt-4 text-default f-80 icon_building"></div>
                                <br>
                                <div class="h2">Gobal physical presence </div>
                                <p class="text-mute mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <a href="" class="text-uppercase small">Read more <span class="ml-2 icon arrow_right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="service-block text-center mb-4 mb-lg-0">
                            <div class="border-block">
                                <div class="mb-4 mt-4 text-default f-80 icon_currency"></div>
                                <br>
                                <div class="h2">Multicurrency support</div>
                                <p class="text-mute mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <a href="" class="text-uppercase small">Read more <span class="ml-2 icon arrow_right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="service-block text-center mb-4 mb-lg-0">
                            <div class="border-block">
                                <div class="mb-4 mt-4 text-default f-80 icon_globe"></div>
                                <br>
                                <div class="h2">Around the globe service</div>
                                <p class="text-mute mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <a href="" class="text-uppercase small">Read more <span class="ml-2 icon arrow_right"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-150 bg-default position-relative overflow-hidden">
            <div class="background opac-20">
                <img src="img/store.jpg" alt="">
            </div>
            <div class="container text-white text-center">
                <div class="row">
                    <div class="col-12 col-md text-left text-md-right">
                        <div class="row mb-4">
                            <div class="col">
                                <h3>Fresh Vegitables</h3>
                                <p class="text-mute mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div class="col-auto align-self-center"><span class="icons icon-60 text-default bg-white icon_like my-4"></span></div>
                        </div>
                        <div class="row mb-4">
                            <div class="col">
                                <h3>Clean Surrounding</h3>
                                <p class="text-mute mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div class="col-auto  mr-md-5  align-self-center"><span class="icons icon-60 text-default bg-white icon_heart_alt my-4"></span></div>
                        </div>
                    </div>
                    <div class="col-12 col-md-auto"><img src="/public/assets/img/demo/cook.png" alt="" class="mw-100"></div>
                    <div class="col-12 col-md text-left ">
                        <div class="row mb-4">
                            <div class="col-auto align-self-center"><span class="icons icon-60 text-default bg-white icon_heart_alt my-4"></span></div>
                            <div class="col">
                                <h3>Specialist Cook</h3>
                                <p class="text-mute mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-auto ml-md-5 align-self-center"><span class="icons icon-60 text-default bg-white icon_like my-4"></span></div>
                            <div class="col">
                                <h3>Feedback Covering</h3>
                                <p class="text-mute mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <h2 class="f-80 my-4">Our Specialities</h2>
                <div class="h1 mt-3 mt-md-4 mt-lg-5 h1">We make fresh food<br>We are always care about food quality.</div>
            </div>
        </div>
        <div class="section-100 bg-white position-relative overflow-hidden">
            <span class="slider-backgound-cicrle-small z-0"></span>
            <div class="background bottom-right background-h-100 z-0 d-none d-lg-block">
                <img src="img/banner.png" alt="">
            </div>
            <div class="container z-1">
                <div class="row justify-content-center ">
                    <div class="col-12 col-md-11 col-lg-10 col-xl-7 align-self-center text-center">
                        <h2 class="f-50">Grab your 50% off discount Coupon direct to your E-mail now</h2>
                    </div>
                    <div class="w-100 my-3"></div>
                    <div class="col-12 col-md-auto align-self-center my-2">
                        <input class="form-control form-control-lg" type="email" placeholder="Your email address">
                    </div>
                    <div class="col-12 col-md-auto align-self-center my-2">
                        <button type="button" class="btn btn-lg btn-block btn-default">Get Discount<span class="ml-2 icon arrow_right"></span></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="toast bottom-center position-fixed" role="alert" aria-live="assertive" aria-atomic="true" data-delay="3000">
            <div class="toast-header">
                <div class="avatar avatar-20 mr-2">
                    <div class="background">
                        <img src="/public/assets/img/team3.jpg" class="rounded mr-2" alt="...">
                    </div>
                </div>
                <strong class="mr-auto">Maxartkiller</strong>
                <small>Just now</small>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="toast-body">
                Hello, Welcome to our website.
            </div>
        </div>
    </main>
</template>

<script>
import TopHeader from './Header.vue';

export default {
  name: 'HomePage',
  components: {
    TopHeader,
  },

  mounted() {
    try {
      const user = localStorage.getItem("userInfo");
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
    } catch (error) {
      console.error("An error occurred during the mounted hook:", error);
    }
  },
};
</script>
