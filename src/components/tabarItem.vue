<template>
  <div class="tabar-item" :name="title" @click="toActiveClick">
    <i
      :name="title"
      class="icons iconfont"
      :class="[icon ? icon : '', active === title ? 'isActive' : '']"
    ></i>
    <div
      :name="title"
      class="title"
      :class="[active === title ? 'isActive' : '']"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    active: String,
    path: String,
  },
  data() {
    return {};
  },
  methods: {
    toActiveClick() {
      if (this.path) {
        this.$router.push(this.path).catch((err) => {
          console.log(err);
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.tabar-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icons {
    display: block;
    width: 22px;
    height: 22px;
    font-size: 22px;
  }
  .title {
    font-size: 12px;
  }
  .isActive {
    color: red;
  }
}
</style>
