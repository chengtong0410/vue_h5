<template>
  <div class="mark">
    <div class="header">
      <div class="left">市场数据</div>
      <div class="right">查看更多</div>
    </div>
    <div class="work">
      <div class="place">{{ moneyData.city }}</div>
      <div class="name">{{ moneyData.position }}</div>
    </div>
    <template v-for="(item, ind) in showList">
      <div class="money-item" :key="ind">
        <div class="year">{{ item.year }}</div>
        <div class="step">
          <div
            class="step-content"
            :style="{
              width:
                Math.round((item.salary / moneyData.topSalary) * 100) + '%',
            }"
          >
            <div class="num">￥{{ item.salary }}</div>
          </div>
        </div>
        <div class="right">
          {{ item.percent > 0 ? '上升' : '下降' }}
          <span>{{ item.percent >= 0 ? item.percent : 0 }}%</span>
        </div>
      </div>
    </template>
    <div class="tomore" @click="toMoreHander">
      {{ isOpen ? '收起内容' : '展开更多' }}
    </div>
  </div>
</template>

<script>
import { pullMonenyList } from '../../api/face';
export default {
  mounted() {
    this.getMoneyList();
  },
  data() {
    return {
      moneyData: {},
      moneyDataList: [],
      isOpen: false,
      showList: [],
    };
  },
  computed: {},
  methods: {
    getMoneyList() {
      pullMonenyList().then((res) => {
        this.moneyData = res.data;
        this.moneyDataList = res.data.yearSalary;
        this.showList = res.data.yearSalary.slice(0, 4);
      });
    },
    toMoreHander() {
      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        this.showList = this.moneyDataList;
      } else {
        this.showList = this.moneyDataList.slice(0, 4);
      }
    },
  },
};
</script>

<style scoped lang="less">
.mark {
  background: #fff;
  margin-bottom: 10px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  .left {
    font-size: 0.48rem;
    font-weight: 600;
    color: #000;
  }
  .right {
    font-size: 0.37333rem;
    color: #c5c5c5;
  }
}
.work {
  display: flex;
  padding: 25px 15px 20px 15px;
  .place,
  .name {
    font-size: 0.37333rem;
    background: #eceaea;
    padding: 0.10667rem 0.21333rem;
  }
  .place {
    margin-right: 0.26667rem;
  }
}
.money-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  .year {
    font-size: 14px;
  }
  .step {
    overflow: hidden;
    width: 200px;
    height: 12px;
    border-radius: 6px;
    margin: 0 10px;
    background-color: #ebdfdf;
    .step-content {
      position: relative;
      width: 100px;
      height: 12px;
      border-radius: 6px;
      background-color: red;
      .num {
        position: absolute;
        right: 5px;
        top: 0;
        font-size: 12px;
        height: 12px;
        line-height: 12px;
        color: #fff;
      }
    }
  }
  .right {
    font-size: 12px;
  }
}
.tomore {
  height: 46px;
  text-align: center;
  line-height: 46px;
  font-size: 14px;
}
</style>
