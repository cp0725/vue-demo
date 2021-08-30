<!--
 * @Author: 常培
 * @Date: 2021-06-13 18:32:42
 * @LastEditors: 常培
 * @LastEditTime: 2021-08-27 18:38:40
-->
<template>
  <div class="wrap">
    <!-- <p v-for="item in msg2" :key="item.a">{{ item.a }}</p> -->
    <!-- <button @click="aaa">11</button> -->
    <!-- <GoView /> -->
    <SurveyTest />
  </div>
</template>

<script>
import SurveyTest from './components/SurveyTest'
import CodeDiff from "./CodeDiff";
import GoView from "./components/GoView/index.vue";
import aaa from '../babel-plugin/index.js'

export default {
  components: {
    CodeDiff,
    GoView,
    SurveyTest,
  },
  data() {
    return {
      // msg2: GConst.msg2,
    };
  },
  methods: {
    aaa() {
      // console.log(aaa);
    },
  },
};
</script>
