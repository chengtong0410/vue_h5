<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="goBack">
      <template #title>
        <div class="text">{{ headerTitle }}</div>
      </template>
    </van-nav-bar>
    <div class="name-ipt"><van-field v-model="value" class="ipt" /></div>
  </div>
</template>

<script>
export default {
  created() {
    if (this.$route.params.id === 'nickname') {
      this.headerTitle = '我的昵称';
      this.value = this.$route.query.name;
    }
    const arr = [1, 2, 3, 1, 2, 3, 1, 2, 4];
    const newArr = this.subArr(arr);
    console.log(newArr);
    const arr2 = [21, 32, 12, 45, 67, 1, 32, 4, 87];
    const newArr2 = this.sortArr(arr2);
    console.log(newArr2);
  },
  data() {
    return {
      headerTitle: '',
      value: '',
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    subArr(arr) {
      const newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
          newArr.push(arr[i]);
        }
      }
      return newArr;
    },
    sortArr(arr) {
      // for (let i = 0; i < arr.length - 1; i++) {
      //   for (let j = 0; j < arr.length - 1; j++) {
      //     if (arr[j] > arr[j + 1]) {
      //       let item = arr[j + 1];
      //       arr[j + 1] = arr[j];
      //       arr[j] = item;
      //     }
      //   }
      //   console.log(arr);
      // }
      // return arr;

      for (let i = 0; i < array.length - 1; i++) {
        let minI = i;
        for (let j = 0; j < array.length; j++) {
          if (arr[j] < arr[minI]) {
            mini = j;
          }
          let item = arr[minI];
          arr[minI] = arr[i];
          arr[i] = item;
        }
      }
    },
  },
};
</script>

<style scoped>
.name-ipt {
  padding: 15px;
}
.ipt {
  background-color: #f7f4f5;
  border-radius: 0.10667rem;
}
</style>
