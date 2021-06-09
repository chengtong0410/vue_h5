<template>
  <div class="home">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabar :tabarchange="getActiveName">
      <tabar-item
        icon="icon-shouye"
        :active="isActive"
        title="首页1"
      ></tabar-item>
      <tabar-item
        icon="icon-shouye"
        :active="isActive"
        title="刷题"
        path="/question"
      ></tabar-item>
      <tabar-item
        icon="icon-shouye"
        :active="isActive"
        title="发现"
        path="/find"
      ></tabar-item>
      <tabar-item
        icon="icon-shouye"
        :active="isActive"
        title="我的"
        path="/my"
      ></tabar-item>
    </tabar>
  </div>
</template>

<script>
import tabar from '../components/tabar.vue';
import tabarItem from '../components/tabarItem';
export default {
  components: { tabar, tabarItem },
  name: 'Home',
  data() {
    return {
      isActive: '',
    };
  },
  computed: {},
  methods: {
    getActiveName(name) {
      this.isActive = name;
      console.log(name);
    },
  },
};
</script>

<style scoped lang="less">
.home {
  height: 100vh;
  margin-bottom: 50px;
}
</style>
