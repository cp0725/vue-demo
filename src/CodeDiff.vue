<!--
 * @Author: 常培
 * @Date: 2021-08-11 19:18:44
 * @LastEditors: 常培
 * @LastEditTime: 2021-08-16 16:30:55
-->
<template>
  <div>
    <div>
      <textarea v-model="oldStr" cols="50" rows="10"></textarea>
      <textarea v-model="newStr" cols="50" rows="10"></textarea>
    </div>
    <button @click="aa">aaa</button>
    <div class="1111">
      <CodeDiff
        :jsonSourceLeft="oldStr"
        :jsonSourceRight="newStr"
        output-format="side-by-side"
      />
    </div>
  </div>
</template>

<script>
import CodeDiff from "vue-json-diff";
import JsonFormat from "json-format";

var a1 =
  '{"metaAttrs":[{"metaAttributeId":17706,"valueType":"array","name":"facility","cnname":"店铺设施","items":{"type":"integer"},"options":[{"label":"母婴室","value":1,"hint":"","selectable":true},{"label":"免预约","value":2,"hint":"","selectable":true},{"label":"休息区","value":3,"hint":"","selectable":true},{"label":"免费停车","value":4,"hint":"","selectable":true},{"label":"停车场","value":5,"hint":"","selectable":true},{"label":"场内厕所","value":6,"hint":"","selectable":true},{"label":"免费wifi","value":7,"hint":"","selectable":true},{"label":"免费小食","value":8,"hint":"","selectable":true},{"label":"寄存区","value":9,"hint":"","selectable":true},{"label":"换鞋区","value":10,"hint":"","selectable":true}]},{"metaAttributeId":17707,"valueType":"string","name":"healthAndSafety","cnname":"卫生安全","maxLength":70},{"metaAttributeId":17712,"valueType":"string","name":"otherNotice","cnname":"温馨提示-其他","maxLength":70},{"metaAttributeId":17713,"valueType":"string","name":"parkingName","cnname":"停车场名称","maxLength":10},{"metaAttributeId":17714,"valueType":"string","name":"parkingPrice","cnname":"停车场价格","maxLength":70},{"metaAttributeId":17715,"valueType":"string","name":"parkingAddress","cnname":"停车场地址","maxLength":70},{"metaAttributeId":17716,"valueType":"object","name":"ageRange","cnname":"年龄范围","children":[{"metaAttributeId":17708,"valueType":"integer","name":"minAge","cnname":"最小年龄","maximum":100,"cascadeCondition":{"comparison":["minAge<maxAge"]}},{"metaAttributeId":17709,"valueType":"integer","name":"maxAge","cnname":"最大年龄"}]},{"metaAttributeId":17717,"valueType":"object","name":"heightRange","cnname":"身高范围","children":[{"metaAttributeId":17710,"valueType":"integer","name":"minHeight","cnname":"最低身高","cascadeCondition":{"comparison":["minHeight<maxHeight"]}},{"metaAttributeId":17711,"valueType":"integer","name":"maxHeight","cnname":"最高身高"}]}]}';
var a2 =
  '{"metaAttrs":[{"metaAttributeId":177061,"valueType":"array","name":"facility","cnname":"店铺设施2","items":{"type":"integer"},"options":[{"label":"母婴室","value":1,"hint":"","selectable":true},{"label":"免预约","value":2,"hint":"","selectable":true},{"label":"休息区","value":3,"hint":"","selectable":true},{"label":"免费停车","value":4,"hint":"","selectable":true},{"label":"停车场","value":5,"hint":"","selectable":true},{"label":"场内厕所","value":6,"hint":"","selectable":true},{"label":"免费wifi","value":7,"hint":"","selectable":true},{"label":"免费小食","value":8,"hint":"","selectable":true},{"label":"寄存区","value":9,"hint":"","selectable":true},{"label":"换鞋区","value":10,"hint":"","selectable":true}]},{"metaAttributeId":17707,"valueType":"string","name":"healthAndSafety","cnname":"卫生安全","maxLength":70},{"metaAttributeId":17712,"valueType":"string","name":"otherNotice","cnname":"温馨提示-其他","maxLength":70},{"metaAttributeId":17713,"valueType":"string","name":"parkingName","cnname":"停车场名称","maxLength":10},{"metaAttributeId":17714,"valueType":"string","name":"parkingPrice","cnname":"停车场价格","maxLength":70},{"metaAttributeId":17715,"valueType":"string","name":"parkingAddress","cnname":"停车场地址","maxLength":70},{"metaAttributeId":17716,"valueType":"object","name":"ageRange","cnname":"年龄范围","children":[{"metaAttributeId":17708,"valueType":"integer","name":"minAge","cnname":"最小年龄","maximum":100,"cascadeCondition":{"comparison":["minAge<maxAge"]}},{"metaAttributeId":17709,"valueType":"integer","name":"maxAge","cnname":"最大年龄"}]},{"metaAttributeId":17717,"valueType":"object","name":"heightRange","cnname":"身高范围","children":[{"metaAttributeId":17710,"valueType":"integer","name":"minHeight","cnname":"最低身高","cascadeCondition":{"comparison":["minHeight<maxHeight"]}},{"metaAttributeId":17711,"valueType":"integer","name":"maxHeight","cnname":"最高身高"}]}]}';

var res1 = JSON.parse(a1)
var res2 = JSON.parse(a2)


export default {
  components: {
    CodeDiff,
  },
  props: {},
  data() {
    return {
      oldStr: res1,
      newStr: res2,
    };
  },
  created() {},
  mounted() {},
  methods: {
    aa() {
    },
    diffHandler(e) {
      console.log(e);
    },
  },
};
</script>
