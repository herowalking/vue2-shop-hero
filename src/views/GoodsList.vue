<template>
    <div class="goods-list">
      <div class="nav-breadcrumb-wrap">
        <div class="container">
          <nav class="nav-breadcrumb">
            <a href="/">主页</a>
            <span>商品列表</span>
          </nav>
        </div>
      </div>
      <div class="accessory-result-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">排序:</span>
            <a href="javascript:void(0)" class="default cur">默认</a>
            <a href="javascript:void(0)" class="price">价格 <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby">筛选</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter" id="filter">
              <dl class="filter-price">
                <dt>价格区间:</dt>
                <dd><a href="javascript:void(0)">选择价格</a></dd>
                <dd>
                  <a href="javascript:void(0)">￥ 0 - 100 元</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li>
                    <div class="pic">
                      <a href="#"><img src="./../assets/img/1.jpg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">小米电视4 55英寸</div>
                      <div class="price">3999</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="footer__wrap">
          <div class="footer__secondary">
            <div class="footer__inner">
              <div class="footer__secondary__nav">
                <span>Copyright©2013-2017 dongnaoedu.com All Rights Reserved.</span>
                <a href="https://dongnaoedu.com/">
                  关于我们
                </a>
                <a href="http://dongnao.ke.qq.com/#tab=1&category=-1">
                  腾讯课堂&&动脑学院
                </a>
                <a href="https://dongnaoedu.com/index.html">
                  版权所有 2008-2017 湘ICP备16006411号-1
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
</template>

<script>
    import './../assets/css/base.css'
    import './../assets/css/nav-header.css'
    import './../assets/css/nav-bread.css'
    import './../assets/css/nav-footer.css'
    import './../assets/css/goods-list.css'
    import NavHeader from './../components/NavHeader.vue'

    export default {
      name: 'GoodsList',
      data: {

      },

    }
</script>

<style>
    .goods-list {

    }
</style>
