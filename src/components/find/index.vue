<template>
  <div class="find">
    <div class="header">发现</div>
    <div class="face">
      <div class="face-header">
        <div class="left">面试技巧</div>
        <div class="right">查看更多</div>
      </div>
      <template v-for="item in faceList">
        <div class="face-item" :key="item.id">
          <div class="word">
            <div class="top">
              {{ item.title }}
            </div>
            <div class="bottom">
              <div class="time">{{ faceTime(item.created_at) }}</div>
              <div class="watch">{{ item.read }}</div>
              <div class="num">{{ item.star }}</div>
            </div>
          </div>
          <img
            class="face-img"
            :src="'http://47.106.228.28:1337' + item.cover"
            alt=""
          />
        </div>
      </template>
    </div>
    <markData></markData>
  </div>
</template>

<script>
import { getFaceExe } from '../../api/face';
import markData from '../find/markData';
import { getDay } from '../../utils/dayChange.js';
export default {
  mounted() {
    this.haveFace();
    window.addEventListener('scroll', this.scrollHander);
  },
  data() {
    return {
      faceList: [],
      loading: false,
      scrollNum: 0,
    };
  },
  computed: {},
  methods: {
    async haveFace() {
      const { data } = await getFaceExe();
      this.faceList = data.list;
    },
    faceTime(val) {
      return getDay(val);
    },
    scrollHander() {
      const scrollHeight = document.documentElement.scrollTop;
      this.scrollNum = scrollHeight;
    },
  },
  activated() {
    if (this.scrollNum) {
      document.documentElement.scrollTop = this.scrollNum;
    }
  },
  deactivated() {
    window.removeEventListener('scroll', this.scrollHander);
  },
  components: {
    markData,
  },
};
</script>

<style scoped lang="less">
.find {
  min-height: 100vh;
  box-sizing: border-box;
  padding-bottom: 50px;
  background-color: #f7f4f59f;

  .header {
    height: 46px;
    font-size: 18px;
    font-weight: 600;
    line-height: 46px;
    text-align: center;
    background-color: #fff;
    color: #000;
    margin-bottom: 5px;
  }
}
.face {
  background-color: #fff;
  margin-bottom: 10px;
}
.face-header {
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    font-size: 18px;
    font-weight: 600;
    color: #000;
  }
  .right {
    font-size: 14px;
    color: #c5c5c5;
  }
}
.face-item {
  padding: 15px 20px;
  display: flex;

  justify-content: space-between;
  .word {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    line-height: 1.15;
    .top {
      word-break: break-all;
    }
    .bottom {
      display: flex;
      font-size: 12px;
      justify-content: space-between;
    }
  }
  .face-img {
    display: block;
    margin-left: 16px;
    width: 113px;
    height: 75px;
  }
}
</style>
