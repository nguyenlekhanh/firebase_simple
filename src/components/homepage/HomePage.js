import React, { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
        const link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = './homepage/style.59d662eb470e16ad1184.css';
        link.media = 'all';
        document.body.appendChild(link);

        const script = document.createElement('script');
    
        script.src = "./homepage/main.5a22ed60cbb4eb428321.js";
        script.async = true;

        const script1 = document.createElement('script');
    
        script1.src = "./homepage/runtime.c2c68959f06db3388f70.js";
        script1.async = true;
    
        document.body.appendChild(script1);
        document.body.appendChild(script);
        
    
        return () => {
          document.body.removeChild(script);
        }
      }, []);
  return (
    <>
      <header>
        <div class="header-hotline d-flex justify-content-center">
          <div class="d-flex justify-content-between align-items-center page-size w-100">
            <div>Hotline: (999) 999 9999</div>
            <div>
              <a href="/">Login </a>
              <span class="px-1"> | </span>
              <a href="/">Register </a>
            </div>
          </div>
        </div>
        <section class="header px-3 py-2 d-flex justify-content-center">
          <div class="header__group d-flex justify-content-between align-items-center page-size">
            <div class="header__group__menu header__group__icon d-flex d-lg-none">
              <div class="bx bx-menu icon"></div>
              <div class="bx bx-search icon"></div>
            </div>
            <div class="header__group__logo">
              <img src="./static/logo.png" alt="logo" />
            </div>
            <div class="header__group__menu d-none d-lg-block">
              <div class="d-flex header__group__menu__items">
                <div class="header__group__menu__item position-relative">
                  <div class="header__group__menu__item__title">About Us</div>
                  <div class="header__group__menu__item__menu shadow pt-1 bg-body rounded position-absolute">
                    <ul class="list-group">
                      <li class="list-group-item">Activities</li>
                      <li class="list-group-item">Development</li>
                      <li class="list-group-item">Story</li>
                      <li class="list-group-item">Contact Us</li>
                    </ul>
                  </div>
                </div>
                <div class="header__group__menu__item position-relative">
                  <div class="header__group__menu__item__title">Men</div>
                  <div class="header__group__menu__item__menu shadow pt-1 bg-body rounded position-absolute">
                    <ul class="list-group">
                      <li class="list-group-item">Sneaker Men</li>
                      <li class="list-group-item">Men's Running</li>
                      <li class="list-group-item">Men's Sandal</li>
                    </ul>
                  </div>
                </div>
                <div class="header__group__menu__item position-relative">
                  <div class="header__group__menu__item__title">Women</div>
                  <div class="header__group__menu__item__menu shadow pt-1 bg-body rounded position-absolute">
                    <ul class="list-group">
                      <li class="list-group-item">Sneaker Women</li>
                      <li class="list-group-item">Women's Running</li>
                      <li class="list-group-item">Women's Sandal</li>
                    </ul>
                  </div>
                </div>
                <div class="header__group__menu__item position-relative">
                  <div class="header__group__menu__item__title">Girl</div>
                </div>
                <div class="header__group__menu__item position-relative">
                  <div class="header__group__menu__item__title">Sales</div>
                </div>
              </div>
            </div>{" "}
            <div class="header__group__icon d-flex position-relative">
              <div class="d-flex justify-content-end w-100">
                <div class="bx bx-user icon khanh_popover"></div>
                <div class="position-absolute login-menu text-center khanh_popover_menu shadow bg-body">
                  <div>
                    <a href="/" class="btn login-menu-btn">
                      Login
                    </a>
                  </div>
                  <div class="d-flex justify-content-center mt-2 register-box">
                    <span>New User?</span>
                    <a href="/" class="text-decoration-underline">
                      Register Now
                    </a>
                  </div>
                </div>
                <div class="bx bx-cart icon"></div>
              </div>
            </div>
          </div>
        </section>
      </header>


      <section class="banner">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./static/banner.png" class="d-block w-100" alt="ads" />
        </div>
        <div class="carousel-item">
          <img src="./static/banner1.png" class="d-block w-100" alt="ads" />
        </div>
        <div class="carousel-item">
          <img src="./static/banner.png" class="d-block w-100" alt="ads"/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>  
    </section>

    <div class="information text-center my-5">
    <div class="information__title">
        <h1 class="fw-bold">We are Computer Scientists</h1>
    </div>
    <div class="information__body mt-3 fw-bolder">
        In publishing and graphic design, Lorem ipsum  <br />is a placeholdertext commonly used to demonstrate the visual form
        of a document or a typeface without.
    </div>
    </div>

    <div class="product-group my-5">
    <div class="text-center  mb-4 fw-bolder fs-4 text-uppercase">Men Collection</div>
    
    <div class="d-flex justify-content-center">
      <section class="splide mx-3 page-size" aria-label="Splide Basic HTML Example">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <a href="/">
                    <img src="./static/product_men1.png" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images" />
                  </a>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <div class="card__title mt-3 mb-1">
                    <a href="/" class="link-underline link-underline-opacity-0">
                      Biti's Hunter Core
                    </a>
                  </div>
                  <div class="card__price">
                    $29.99
                  </div>
                  <div class="mt-3 d-flex card__icon-group">
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Add to Wishlist">
                      <i class="bx bx-heart"></i>
                    </div>
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Select Options">
                      <i class="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <a href="/">
                    <img src="./static/product_men2.png" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images"/>
                  </a>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <div class="card__title mt-3 mb-1">
                    <a href="/" class="link-underline link-underline-opacity-0">
                      Biti's Hunter Core
                    </a>
                  </div>
                  <div class="card__price">
                    $29.99
                  </div>
                  <div class="mt-3 d-flex card__icon-group">
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Add to Wishlist">
                      <i class="bx bx-heart"></i>
                    </div>
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Select Options">
                      <i class="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <a href="/">
                    <img src="./static/product_men3.png" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images"/>
                  </a>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <div class="card__title mt-3 mb-1">
                    <a href="/" class="link-underline link-underline-opacity-0">
                      Biti's Hunter Core
                    </a>
                  </div>
                  <div class="card__price">
                    $29.99
                  </div>
                  <div class="mt-3 d-flex card__icon-group">
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Add to Wishlist">
                      <i class="bx bx-heart"></i>
                    </div>
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Select Options">
                      <i class="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <a href="/">
                    <img src="./static/product_men4.png" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images"/>
                  </a>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <div class="card__title mt-3 mb-1">
                    <a href="/" class="link-underline link-underline-opacity-0">
                      Biti's Hunter Core
                    </a>
                  </div>
                  <div class="card__price">
                    $29.99
                  </div>
                  <div class="mt-3 d-flex card__icon-group">
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Add to Wishlist">
                      <i class="bx bx-heart"></i>
                    </div>
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Select Options">
                      <i class="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <a href="/">
                    <img src="./static/product_men5.png" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images"/>
                  </a>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <div class="card__title mt-3 mb-1">
                    <a href="/" class="link-underline link-underline-opacity-0">
                      Biti's Hunter Core
                    </a>
                  </div>
                  <div class="card__price">
                    $29.99
                  </div>
                  <div class="mt-3 d-flex card__icon-group">
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Add to Wishlist">
                      <i class="bx bx-heart"></i>
                    </div>
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Select Options">
                      <i class="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <a href="/">
                    <img src="./static/product_men6.png" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images"/>
                  </a>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <div class="card__title mt-3 mb-1">
                    <a href="/" class="link-underline link-underline-opacity-0">
                      Biti's Hunter Core
                    </a>
                  </div>
                  <div class="card__price">
                    $29.99
                  </div>
                  <div class="mt-3 d-flex card__icon-group">
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Add to Wishlist">
                      <i class="bx bx-heart"></i>
                    </div>
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Select Options">
                      <i class="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>    <div class="text-center my-4">
        <a href="/" class="btn btn-danger rounded-0 text-uppercase px-4 letter-spacing-1">View More Product</a>
    </div>
</div>

<div class="product-group my-5">
    <div class="text-center  mb-4 fw-bolder fs-4 text-uppercase">Women Collection</div>
    
    <div class="d-flex justify-content-center">
      <section class="splide mx-3 page-size" aria-label="Splide Basic HTML Example">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <a href="/">
                    <img src="./static/product1.jpg" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images"/>
                  </a>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <div class="card__title mt-3 mb-1">
                    <a href="/" class="link-underline link-underline-opacity-0">
                      Biti's Hunter Core
                    </a>
                  </div>
                  <div class="card__price">
                    $29.99
                  </div>
                  <div class="mt-3 d-flex card__icon-group">
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Add to Wishlist">
                      <i class="bx bx-heart"></i>
                    </div>
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Select Options">
                      <i class="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <a href="/">
                    <img src="./static/product2.png" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images"/>
                  </a>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <div class="card__title mt-3 mb-1">
                    <a href="/" class="link-underline link-underline-opacity-0">
                      Biti's Hunter Core
                    </a>
                  </div>
                  <div class="card__price">
                    $29.99
                  </div>
                  <div class="mt-3 d-flex card__icon-group">
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Add to Wishlist">
                      <i class="bx bx-heart"></i>
                    </div>
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Select Options">
                      <i class="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <a href="/">
                    <img src="./static/product3.png" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images"/>
                  </a>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <div class="card__title mt-3 mb-1">
                    <a href="/" class="link-underline link-underline-opacity-0">
                      Biti's Hunter Core
                    </a>
                  </div>
                  <div class="card__price">
                    $29.99
                  </div>
                  <div class="mt-3 d-flex card__icon-group">
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Add to Wishlist">
                      <i class="bx bx-heart"></i>
                    </div>
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Select Options">
                      <i class="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <a href="/">
                    <img src="./static/product4.png" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images"/>
                  </a>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <div class="card__title mt-3 mb-1">
                    <a href="/" class="link-underline link-underline-opacity-0">
                      Biti's Hunter Core
                    </a>
                  </div>
                  <div class="card__price">
                    $29.99
                  </div>
                  <div class="mt-3 d-flex card__icon-group">
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Add to Wishlist">
                      <i class="bx bx-heart"></i>
                    </div>
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Select Options">
                      <i class="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <a href="/">
                    <img src="./static/product5.png" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images"/>
                  </a>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <div class="card__title mt-3 mb-1">
                    <a href="/" class="link-underline link-underline-opacity-0">
                      Biti's Hunter Core
                    </a>
                  </div>
                  <div class="card__price">
                    $29.99
                  </div>
                  <div class="mt-3 d-flex card__icon-group">
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Add to Wishlist">
                      <i class="bx bx-heart"></i>
                    </div>
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Select Options">
                      <i class="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <a href="/">
                    <img src="./static/product6.png" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images"/>
                  </a>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <div class="card__title mt-3 mb-1">
                    <a href="/" class="link-underline link-underline-opacity-0">
                      Biti's Hunter Core
                    </a>
                  </div>
                  <div class="card__price">
                    $29.99
                  </div>
                  <div class="mt-3 d-flex card__icon-group">
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Add to Wishlist">
                      <i class="bx bx-heart"></i>
                    </div>
                    <div class="card__icon-group__icon d-flex align-items-center justify-content-center" title="Select Options">
                      <i class="bx bx-cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>    <div class="text-center my-4">
        <a href="/" class="btn btn-danger rounded-0 text-uppercase px-4 letter-spacing-1">View More Product</a>
    </div>
</div>

<div class="image-highlight">
    <div class="image-highlight__title letter-spacing-1">
        HASHTAG FOR OUR PRODUCT
    </div>
    
    <div class="d-flex justify-content-center image-highlight-box">
      <section class="splide mx-3 page-size" aria-label="Splide Basic HTML Example">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <img src="./static/highlight7.png" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images"/>
                </div>            
              </div>
            </li>
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <img src="./static/highlight8.png" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images"/>
                </div>            
              </div>
            </li>
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <img src="./static/highlight9.png" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images"/>
                </div>            
              </div>
            </li>
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <img src="./static/highlight10.png" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images"/>
                </div>            
              </div>
            </li>
            <li class="splide__slide">
              <div class="card">
                <div class="card-image">
                  <img src="./static/highlight11.png" loading="lazy" class="img-fluid img-thumbnail responsive" alt="Images"/>
                </div>            
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div></div>
    <section class="footer-sign-up text-center mt-5">
        <div class="py-4">
            <h3 class="text-uppercase">Sign Up For Our Newsletter</h3>
        </div>
        <div class="pb-5">
            <div class="sign-up-box">
                <input class="sign-up-box__input" type="text" placeholder="Email address" />
                <button class="sign-up-box__button" type="button">Subscribe</button>
            </div>
        </div>
    </section>    <section class="footer-menu border border-1">
      <div class="container-fluid footer-menu-group  pt-5">
        <div class="row">
          <div class="col-sm-6 col-lg-3 footer-menu-group_item">
            <button class="accordion footer-menu-group_item_title fw-bold text-uppercase mb-3">Support</button>
            <div class="panel footer-menu-group_item_content">
              <ul class="list-unstyled">
                <li><a href="/" class="link-underline link-underline-opacity-0">Checking Order</a></li>
                <li><a href="/" class="link-underline link-underline-opacity-0">Delivery Method</a></li>
                <li><a href="/" class="link-underline link-underline-opacity-0">Checkout Method</a></li>
                <li><a href="/" class="link-underline link-underline-opacity-0">Return Policy</a></li>
              </ul>
            </div>
          </div>
    
          <div class="col-sm-6 col-lg-3 footer-menu-group_item">
            <button class="accordion footer-menu-group_item_title fw-bold text-uppercase mb-3">Information</button>
            <div class="panel footer-menu-group_item_content">
              <ul class="list-unstyled">
                <li><a href="/" class="link-underline link-underline-opacity-0">Store Finder</a></li>
                <li><a href="/" class="link-underline link-underline-opacity-0">Cooperation With Biti's</a></li>
                <li><a href="/" class="link-underline link-underline-opacity-0">Q&A</a></li>
              </ul>
            </div>
          </div>
    
          <div class="col-sm-6 col-lg-3 footer-menu-group_item">
            <button class="accordion footer-menu-group_item_title fw-bold text-uppercase mb-3">About Us</button>
            <div class="panel footer-menu-group_item_content">
              <ul class="list-unstyled">
                <li><a href="/" class="link-underline link-underline-opacity-0">Activities</a></li>
                <li><a href="/" class="link-underline link-underline-opacity-0">Delivery Method</a></li>
                <li><a href="/" class="link-underline link-underline-opacity-0">Development</a></li>
                <li><a href="/" class="link-underline link-underline-opacity-0">Stories</a></li>
                <li><a href="/" class="link-underline link-underline-opacity-0">Contact Us</a></li>
              </ul>
            </div>
          </div>
    
          <div class="col-sm-6 col-lg-3 footer-menu-group_item footer-menu-group_item--logo">
            <div class="panel footer-menu-group_item_content">
              <ul class="list-unstyled">
                <li>
                  <div class="header__group__logo">
                    <img src="./static/logo10.png" alt="logo" />
                  </div>
                </li>
                <li>
                  GROUP COMPANY CORP., PTE., LTD
                </li>
                <li>
                  <b>Phone:</b> (999) 999 9999
                </li>
                <li>
                  <b>Email:</b> support@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default HomePage;
