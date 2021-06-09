<template>
  <div class="my-header">
    <div class="info">
      <div class="left">
        <div class="name">{{ userData.nickname }}</div>
        <div class="title">{{ userData.intro }}</div>
      </div>
      <div class="right">
        <img
          :src="'http://47.106.228.28:1337' + userData.avatar"
          alt="头像"
          @click="toEdit"
        />
      </div>
    </div>
    <div class="questions">
      <div class="question-item">
        <div class="tags">{{ userData.submitNum }}</div>
        <div class="tag-name">累计答题</div>
      </div>
      <div class="question-item">
        <div class="tags">{{ userData.collectQuestions.length }}</div>
        <div class="tag-name">收藏题目</div>
      </div>
      <div class="question-item">
        <div class="tags">{{ userData.errorQuestions.length }}</div>
        <div class="tag-name">我的错题</div>
      </div>
      <div class="question-item">
        <div class="tags">{{ precentNum + '%' }}</div>
        <div class="tag-name">正确率</div>
      </div>
    </div>
    <div class="jobs">
      <van-cell
        class="job-card"
        title="我的岗位"
        icon="shop-o"
        is-link
        :value="userData.position"
        to="/my"
      >
      </van-cell>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  created() {
    this.userData = this.userInfo.user;
  },

  data() {
    return {
      userData: {},
    };
  },
  computed: {
    ...mapState('loginModule', ['userInfo']),
    precentNum() {
      return parseInt(
        (1 - this.userData.errorNum / this.userData.submitNum) * 100
      );
    },
  },
  methods: {
    toEdit() {
      this.$router.push('/edit');
    },
  },
};
</script>

<style scoped lang="less">
.my-header {
  position: relative;
  height: 206px;
  background: linear-gradient(45deg, #ce0031, #b8002c);
  .info {
    display: flex;
    margin-bottom: 28px;
    padding: 0 15px;
    padding-top: 30px;
    justify-content: space-between;
    .left {
      font-size: 21px;
      color: #fff;
      .title {
        font-size: 12px;
        margin-top: 10px;
        opacity: 0.7;
      }
    }
    .right {
      width: 54px;
      height: 54px;
      border-radius: 30px;
      overflow: hidden;
      border: 0.08rem solid rgba(255, 255, 255, 0.38);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .questions {
    display: flex;
    padding: 0 15px;
    justify-content: space-between;

    .question-item {
      flex: 1 1;
      color: #fff;
      .tags {
        font-size: 20px;
        margin-bottom: 8px;
        text-align: center;
      }
      .tag-name {
        font-size: 12px;
        text-align: center;
        opacity: 0.7;
      }
    }
  }
  .jobs {
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 100%;
    padding: 0 15px;
    .job-card {
      border-radius: 10px;
    }
  }
}
</style>
