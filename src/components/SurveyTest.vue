<!--
 * @Author: 常培
 * @Date: 2021-08-27 17:56:11
 * @LastEditors: 常培
 * @LastEditTime: 2021-08-28 09:28:37
-->
<template>
  <div>
    
    <div id="surveyContainer"><SurveyCom :survey="survey"></SurveyCom></div>

  </div>
</template>

<script>
const surveyJSON = {"pages":[{"name":"page1","elements":[{"type":"checkbox","name":"question1","title":"你用过美团app的频率是？","choices":[{"value":"item2","text":"每周少于1次"},{"value":"item3","text":"每周1-5次"},{"value":"item4","text":"每周5次以上"}]},{"type":"rating","name":"question2","title":"请为美团的服务打分"},{"type":"boolean","name":"question3","title":"愿意把美团介绍给你的朋友吗","labelTrue":"愿意","labelFalse":"不愿意"},{"type":"comment","name":"question5","title":"有什么话相对我们说"},{"type":"text","name":"question4","title":"请留下你的联系方式"}],"title":"测试问卷","description":"美团用户你好，针对你对美团app的使用情况，我们需要做一个简短的用户调研，大概占用你5分钟时间。"}]}

import {Survey, StylesManager, Model} from 'survey-vue'
StylesManager.applyTheme("modern");
const survey = new Model(surveyJSON);

survey.onComplete.add(function(survey) {
    console.log(survey, survey.data);
});

export default {
  components: {
    SurveyCom: Survey
  },
  props: {},
  data() {
    return {
      survey: survey
    }
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

