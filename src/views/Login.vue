<template>
  <div class="login-warp">
    <van-nav-bar left-arrow @click-left="onClickLeft" />
    <div class="form">
      <div class="title">你好，请登录</div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="formdata.mobile"
          name="mobile"
          autocomplete="off"
          placeholder="请填写手机号码"
          :rules="[{ required: true, message: '请填写手机号码' }]"
        >
          <template #left-icon>
            <i class="iconfont icon-wode"></i>
          </template>
        </van-field>
        <van-field
          v-model="formdata.code"
          name="code"
          autocomplete="off"
          placeholder="请填写验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        >
          <template #left-icon>
            <i class="iconfont icon-pingjia"></i>
          </template>
          <template #button>
            <van-button
              size="small"
              native-type="button"
              @click="onSendCode"
              type="primary"
              :disabled="!codeState"
            >
              <template v-if="codeState">
                发送验证码
              </template>
              <template v-else> {{ codeNum }}s后重新发送 </template>
            </van-button>
          </template>
        </van-field>
        <div class="user-rules">
          登录即同意<span class="mycode">《用户使用协议》</span>和<span
            class="mycode"
            >《隐私协议》</span
          >
        </div>
        <van-button size="large" type="primary">立即登录</van-button>
      </van-form>
    </div>
  </div>
</template>

<script>
import { getCode } from '../api/loginrequest';
import { mapActions } from 'vuex';
export default {
  mounted() {},
  data() {
    return {
      formdata: {
        mobile: '18888881111',
        code: '',
      },
      codeState: true,
      codeNum: 10,
    };
  },
  computed: {
    codeMassage() {
      if (this.codeState) {
        return '发送验证码';
      }
      return '4秒后重新';
    },
  },

  methods: {
    ...mapActions('loginModule', ['getUserInfoCommit']),
    onClickLeft() {
      this.$router.push('/home');
    },
    onSubmit() {
      this.getUserInfoCommit({ ...this.formdata });
    },
    async onSendCode() {
      this.codeState = false;
      const timer = setInterval(() => {
        if (this.codeNum === 1) {
          this.codeState = true;
          this.codeNum = 10;
          clearInterval(timer);
        }
        this.codeNum = this.codeNum - 1;
      }, 1000);
      const { data } = await getCode({ mobile: this.formdata.mobile });
      this.formdata.code = data;
    },
  },
};
</script>

<style scoped lang="less">
.form {
  padding: 0 15px;
}
.title {
  height: 120px;
  font-size: 18px;
  font-weight: 600;
  line-height: 120px;
}
/deep/.van-field__left-icon {
  display: flex;
  align-items: center;
  margin-right: 0.9rem !important;
}
.user-rules {
  font-size: 12px;
  margin-top: 15px;
  margin-bottom: 50px;
}
.mycode {
  color: aqua;
}
/deep/.van-nav-bar .van-icon {
  color: #07c160;
}
</style>
