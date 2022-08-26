<template>

  <div class="footer">
    <div class="footer-logo">
      <img src="@/assets/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>

    <div class="footer-link">
      <a href="">是啥是 是是</a><span>|</span>
      <a href="">是啥是 是是</a><span>|</span>
      <a href="">是啥是 是是</a><span>|</span>
      <a href="">是啥是 是是</a><span>|</span>
      <a href="">是啥是 是是</a>
    </div>


    <div class="copyright">点点滴滴的的<span>的那个就是</span>那个角色歌</div>


  </div>
</template>

<script>
export default {
  name: "NavFooter"
}
</script>

<style lang="scss" scoped>
.footer{
  text-align: center;
  height: 234px;
  border-top: 4px solid #FF6600;
  color: #999999;
  background-color: #333333;
  font-size: 16px;

  .footer-logo{
    margin-top: 46px;
    margin-bottom: 31px;
    img{
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }

  }


  .footer-link{

    a{
      display: inline-block;
      color: #999999;

    }
    span{
      margin: 0 10px;
    }
  }

  .copyright{
    color: #999999;
    span{
      display: inline-block;
      margin: 0 5px;
      color: #FF6600;
    }
  }
}

</style>