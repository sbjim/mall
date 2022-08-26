<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规格</a>
        </div>

        <div class="topbar-user">
          <a href="javascript:;" @click="login">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" @click="goToCart" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>



      </div>

    </div>


    <div class="nav-header">
      <div class="container">
        <div class="head-logo"><a href=""></a></div>
        <div class="head-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
                <ul>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://gw.alicdn.com/bao/uploaded/i3/2563622387/O1CN01ARrbjc1TVIAPsE6Le_!!2563622387.jpg_300x300q90.jpg_.webp">
                      </div>
                      <div class="pro-name">
                        Nike耐克</div>
                      <div class="pro-price">118元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://gw.alicdn.com/bao/uploaded/i3/2563622387/O1CN01ARrbjc1TVIAPsE6Le_!!2563622387.jpg_300x300q90.jpg_.webp">
                      </div>
                      <div class="pro-name">
                        Nike耐克</div>
                      <div class="pro-price">118元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://gw.alicdn.com/bao/uploaded/i3/2563622387/O1CN01ARrbjc1TVIAPsE6Le_!!2563622387.jpg_300x300q90.jpg_.webp">
                      </div>
                      <div class="pro-name">
                        Nike耐克</div>
                      <div class="pro-price">118元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://gw.alicdn.com/bao/uploaded/i3/2563622387/O1CN01ARrbjc1TVIAPsE6Le_!!2563622387.jpg_300x300q90.jpg_.webp">
                      </div>
                      <div class="pro-name">
                        Nike耐克</div>
                      <div class="pro-price">118元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://gw.alicdn.com/bao/uploaded/i3/2563622387/O1CN01ARrbjc1TVIAPsE6Le_!!2563622387.jpg_300x300q90.jpg_.webp">
                      </div>
                      <div class="pro-name">
                        Nike耐克</div>
                      <div class="pro-price">118元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://gw.alicdn.com/bao/uploaded/i3/2563622387/O1CN01ARrbjc1TVIAPsE6Le_!!2563622387.jpg_300x300q90.jpg_.webp">
                      </div>
                      <div class="pro-name">
                        Nike耐克</div>
                      <div class="pro-price">118元</div>
                    </a>
                  </li>
                </ul>



            </div>
          </div>

          <div class="item-menu">
            <span>RedMi手机</span>
            <div class="children"></div>
          </div>

          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>

        </div>
        <div class="head-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>



          </div>

        </div>

      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "NavHeader",
  methods:{
    login(){
      this.$router.push('/login')

    },
    goToCart(){
      this.$router.push('/cart')


    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/scss/base.scss";
  @import "@/assets/scss/mixin.scss";
  .header{

    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color:#b0b0b0;

      .container{
        @include flex();
        a{
          display: inline-block;
          color: #b0b0b0;
          margin-right: 17px;
        }

        .my-cart{
          background-color: #FF6600;
          width: 100px;
          text-align: center;
          color:#ffffff;

          .icon-cart{
            background:url("@/assets/imgs/icon-cart-checked.png") no-repeat center;
            background-size: contain;
            display: inline-block;
            width: 16px;
            height: 12px;
            margin-right: 4px;
          }

        }

      }
    }

    .nav-header{


      .container{
        position: relative;

        height: 112px;
        @include flex();

        .head-logo{
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #FF6600;
          overflow: hidden;
          a{
            display: inline-block;
            width: 110px;
            height: 55px;
            &:before{
              content: '';
              @include bgImg(55px,55px,"@/assets/imgs/mi-logo.png",55px);

            }

            &:after{
              content: '';
              @include bgImg(55px,55px,"@/assets/imgs/mi-home.png",55px);

            }

            &:hover:before{
              margin-left: -55px;
              transition: margin .2s;


            }
          }


        }

        .head-menu{
          display: inline-block;
          width: 643px;
          padding-left: 209px;

          .item-menu {
            display: inline-block;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;

            span{
              cursor: pointer;
            }


            &:hover{
              color: #FF6600;
              .children{
                height: 220px;
                //display: inline-block;

                opacity: 1;
              }
            }
            .children{
              width: 1226px;
              position: absolute;
              top: 112px;
              left: 0;
              height: 0;
              background-color: #fff;
              border-top: 1px solid #e5e5e5;
              box-shadow: 0 7px 6px 0 rgba(0,0,0,0.11);
              z-index: 10;
              opacity: 0;
              //display: none;
              overflow: hidden;
              transition: all .3s;

              .product{
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                position: relative;



                &:after{
                  content: '';
                  position: absolute;
                  display: inline-block;
                  border-right: 1px solid #d7d7d7;
                  top: 28px;
                  width: 1px;
                  height: 100px;
                  right: 0;

                }


                &:last-child:after{
                  display: none;
                }


                a{
                  display: inline-block;

                }
                img{
                  width: auto;
                  height: 111px;
                  margin-top: 26px;
                }
                .pro-img{
                  height: 137px;
                }
                .pro-name{
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: #333333;
                }

                .pro-price{
                  color: #FF6600;
                }


              }
            }

          }



        }


        .head-search{
          width: 319px;
          .wrapper{
            height: 50px;
            border: 1px solid #e0e0e0;
            display: flex;
            align-items: center;


            input{
              box-sizing: border-box;
              border: none;
              border-right: 1px solid #e0e0e0;
              width: 264px;
              height: 50px;
              padding-left: 14px;
            }

            a{
              display: inline-block;
              @include bgImg(18px,18px,"@/assets/imgs/icon-search.png");
              margin-left: 17px;
            }

          }

        }

      }

    }


  }


</style>