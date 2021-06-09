<template>
  <div class="quertions">
    <div class="tabar">
      <div class="tab-content">
        <div class="tab-item">点击1</div>
        <div class="tab-item">点击1</div>
        <div class="tab-item">点击1</div>
        <div class="tab-item">点击1</div>
        <div class="tab-item">点击1</div>
        <div class="tab-item">点击1</div>
        <div class="tab-item">点击1</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
};
</script>

<style scoped lang="less">
.quertions {
  height: 100px;
}
.tabar {
  height: 50px;

  overflow: hidden;
  .tab-content {
    display: flex;
  }
  .tab-item {
    font-size: 12px;
    flex-shrink: 0;
    width: 80px;
    height: 50px;
    line-height: 50px;
    margin: 0 5px;
    text-align: center;
    background-color: burlywood;
  }
}
</style>
