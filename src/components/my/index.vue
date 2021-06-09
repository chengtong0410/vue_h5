<template>
  <div class="my-warp">
    <myHeader></myHeader>
    <readCard></readCard>
  </div>
</template>

<script>
import myHeader from '../../components/my/myHeader';
import readCard from '../../components/my/face';
export default {
  data() {
    return {};
  },
  components: {
    myHeader,
    readCard,
  },
};
</script>

<style scoped lang="less">
.my-warp {
  min-height: 100vh;
  padding: 0 0 50px;
  background-color: #f7f4f5;
}
</style>
