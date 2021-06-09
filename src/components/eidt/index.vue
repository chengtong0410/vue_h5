<template>
  <div class="user-info">
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="goBack">
      <template #title>
        <div class="text">我的资料</div>
      </template>
    </van-nav-bar>
    <div class="user">
      <van-cell title="头像" is-link class="user-img">
        <template #default>
          <img
            :src="'http://47.106.228.28:1337' + userInfo.avatar"
            alt=""
            class="avator"
          />
        </template>
      </van-cell>
      <div class="item">
        <van-cell
          title="昵称"
          is-link
          :value="userInfo.nickname"
          :to="'/editWarp/nickname?name=' + userInfo.nickname"
        >
        </van-cell>
        <van-cell
          title="性别"
          is-link
          :value="userInfo.gender === 1 ? '男' : '女'"
        >
        </van-cell>
        <van-cell title="地区" is-link :value="userInfo.area"> </van-cell>
        <van-cell title="个人简介" is-link :value="userInfo.intro"> </van-cell>
      </div>
    </div>
  </div>
</template>

<script>
import { editUserInfo, hadUserInfo } from '../../api/editInfo.js';
export default {
  created() {
    this.getUserInfo();
  },
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    getUserInfo() {
      hadUserInfo().then((res) => {
        const { data } = res;
        console.log(data);
        this.userInfo = data;
      });
    },
  },
};
</script>

<style scoped lang="less">
.user-info {
  height: 100vh;
  background-color: #f7f4f5;
}
.text {
  color: #323233;
  font-weight: 700;
}
.user {
  padding: 18px 15px 0;
}
.avator {
  float: right;
  width: 38px;
  height: 38px;
  border-radius: 19px;
}
.user-img {
  border-radius: 8px;
  display: flex;
  align-items: center;
}
/deep/ .item {
  margin-top: 10px;
  border-radius: 8px;
  overflow: hidden;
}
</style>
