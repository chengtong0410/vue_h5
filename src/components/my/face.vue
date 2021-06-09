<template>
  <div class="face-card">
    <div class="face-data">
      <div class="title">面试数据</div>
      <div class="content">
        <div class="read-item">
          <div class="read-top">
            昨日阅读<span class="num">+{{ shareData.comment.yesterday }}</span>
          </div>
          <div class="read-num">{{ shareData.comment.total }}</div>
          <div class="total">阅读总数</div>
        </div>
        <div class="read-item">
          <div class="read-top">
            昨日阅读<span class="num">+{{ shareData.read.yesterday }}</span>
          </div>
          <div class="read-num">{{ shareData.read.total }}</div>
          <div class="total">获赞总数</div>
        </div>
        <div class="read-item">
          <div class="read-top">
            昨日阅读<span class="num">+{{ shareData.star.yesterday }}</span>
          </div>
          <div class="read-num">{{ shareData.star.total }}</div>
          <div class="total">评论总数</div>
        </div>
      </div>
    </div>
    <div class="table-item">
      <van-cell
        title="我的面试分享"
        is-link
        value="21"
        icon="shop-o"
      ></van-cell>
      <van-cell title="我的消息" is-link value="21" to="/find" icon="shop-o">
      </van-cell>
      <van-cell title="收藏的题库" is-link value="21" icon="shop-o"> </van-cell>
      <van-cell title="收藏的企业" is-link value="21" icon="shop-o"> </van-cell>
      <van-cell title="我的错题" is-link value="21" icon="shop-o"> </van-cell>
      <van-cell title="收藏的项目经验" is-link value="21" icon="shop-o">
      </van-cell>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  created() {
    this.shareData = this.userInfo.user.shareData;
  },
  data() {
    return {
      shareData: {},
    };
  },
  computed: {
    ...mapState('loginModule', ['userInfo']),
  },
};
</script>

<style scoped lang="less">
.face-card {
  padding: 30px 15px 0;
  .face-data {
    height: 127px;
    border-radius: 8px;
    background: #fff;
  }
  .title {
    font-size: 13px;
    font-weight: 600;
    padding: 15px 14px;
  }
  .content {
    display: flex;
    padding: 0 15px;
  }
  .read-item {
    flex: 1;

    .read-top {
      font-size: 12px;
      text-align: center;
      color: #b4b4bd;
      .num {
        color: rgba(0, 153, 255, 0.719);
      }
    }
    .read-num {
      color: #000;
      text-align: center;
      font-size: 20px;
      padding: 10px 0 5px;
      font-weight: 600;
    }
    .total {
      text-align: center;
      color: #000;
      font-size: 12px;
    }
  }
  .table-item {
    overflow: hidden;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
</style>
