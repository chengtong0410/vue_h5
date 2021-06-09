<template>
  <div class="m-tabar" @click="itemChange">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  props: {
    tabarchange: Function,
  },
  data() {
    return {};
  },
  methods: {
    itemChange(e) {
      const activeName = e.target.getAttribute('name');
      this.tabarchange(activeName);
    },
  },
};
</script>

<style scoped lang="less">
.m-tabar {
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  height: 50px;
}
</style>
