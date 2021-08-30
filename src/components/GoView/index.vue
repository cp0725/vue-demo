<!--
 * @Author: 常培
 * @Date: 2021-08-20 14:29:22
 * @LastEditors: 常培
 * @LastEditTime: 2021-08-21 16:55:32
-->
<template>
  <div>
    <button @click="demo">demo</button>
    <button @click="initGo">INIT</button>
    <button @click="select">select</button>
    <button @click="toJson">toJson</button>
    <button @click="RenderJson">RenderJson</button>

    <div id="wrap"></div>
    <div id="wrap2"></div>
  </div>
</template>

<script>
import go from "gojs";
let myDiagram = null;
let toJson = "";

export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    demo() {
      let $ = go.GraphObject.make;
      myDiagram = $(go.Diagram, "wrap", {
        // 开启 Ctrl-Z、Ctrl-Y 键盘控制
        "undoManager.isEnabled": true,
        // 允许在后台双击以创建一个新节点
        "clickCreatingTool.archetypeNodeData": { key: "Node", color: "white" },
        // 布局模板
        layout: $(go.TreeLayout, { angle: 90, layerSpacing: 35 }), // angle: 90 让布局旋转90度 否则会从右像左
      });

      myDiagram.nodeTemplate = $(
        go.Node, // 定义一个 Node 模板
        "Auto", // 形状会自动适应文本块
        {
          contextMenu: contextMenuTemplate, // 在模板上定义右键菜单
        },
        $(
          go.Shape,
          { figure: "RoundedRectangle", fill: "white" }
        ),
        $(
          go.TextBlock,
          { margin: 6, font: "16px sans-serif" }, // 文字可直接编辑
          new go.Binding("text") // 从 text 属性读取文本内容
        )
      );

      // 允许用户在node之间连线
      myDiagram.linkTemplate = $(
        go.Link,
        {
          relinkableFrom: true,
          relinkableTo: true,
          toShortLength: 2,
        },
        $(go.Shape, { strokeWidth: 2 }),
        $(go.Shape, { toArrow: "Standard", stroke: null })
      );

      // 定义 node
      myDiagram.model = new go.GraphLinksModel(
        [
          { key: 1, text: "Alpha", color: "lightblue" },
          { key: 2, text: "Beta", color: "orange" },
          { key: 3, text: "Gamma", color: "lightgreen" },
          { key: 4, text: "Delta", color: "pink" },
          { key: 5, text: "Router", color: "blue" },
        ],
        [
          { from: 1, to: 2 },
          { from: 1, to: 3 },
          { from: 2, to: 4 },
          { from: 3, to: 5 },
        ]
      );

      // 模板菜单回调
      function contextMenuTemplate() {
        $(
          go.Adornment, //修饰器
          "Vertical", // 垂直方向
          $("ContextMenuButton", $(go.TextBlock, "Click me!"), {
            click: (e, obj) => alert(2),
          })
        );
      }

      // 画布右键菜单
      myDiagram.contextMenu = $(
        go.Adornment,
        "Vertical",
        $("ContextMenuButton", $(go.TextBlock, "节点统计"), {
          click: (e) => alert(e.diagram.nodes.count),
        }),
        $("ContextMenuButton", $(go.TextBlock, "添加节点"), {
          click: (e, obj) => {
            // 不需要设置"key"属性——addNodeData将自动分配它
            const data = { text: "Node", color: "pink" };
            e.diagram.model.addNodeData(data);
            const node = e.diagram.findPartForData(data);
            node.location = e.diagram.lastInput.documentPoint;
          },
        })
      );

      const node = myDiagram.findNodeForKey(1); // 查找节点
      myDiagram.select(node); // 选择节点
      console.log(node, node.data);

      // 插入一个椭圆
      myDiagram.add(
        $(
          go.Node,
          "Auto",
          $(go.Shape, "Ellipse", {
            fill: $(go.Brush, "Linear", { 0.0: "Violet", 1.0: "Lavender" }),
          }),
          $(go.TextBlock, "这里是内容", { margin: 5 })
        )
      );
    },
    toJson() {
      toJson = myDiagram.model.toJson();
      console.log(toJson);
    },
    RenderJson() {
      let $ = go.GraphObject.make;
      myDiagram = $(go.Diagram, "wrap2", {
        "undoManager.isEnabled": true,
        "clickCreatingTool.archetypeNodeData": { key: "Node", color: "white" },
        layout: $(go.TreeLayout, { angle: 90, layerSpacing: 35 }),
      });
      myDiagram.model = go.Model.fromJson(toJson);
      // myDiagram.model.fromJson(toJson)
    },
    initGo() {
      let $ = go.GraphObject.make;
      myDiagram = $(go.Diagram, "wrap", {
        // 开启 Ctrl-Z、Ctrl-Y 键盘控制
        "undoManager.isEnabled": true,
        // 允许在后台双击以创建一个新节点
        "clickCreatingTool.archetypeNodeData": { key: "Node", color: "white" },
        // 布局模板
        layout: $(go.TreeLayout, { angle: 90, layerSpacing: 35 }), // angle: 90 让布局旋转90度 否则会从右像左
      });

      myDiagram.nodeTemplate = $(
        go.Node, // 定义一个 Node 模板
        "Auto", // 形状会自动适应文本块
        {
          contextMenu: contextMenuTemplate, // 在模板上定义右键菜单
        },
        $(
          go.Shape,
          "Rectangle", // 矩形  RoundedRectangle 圆角矩形
          {
            stroke: null, // 无边框
            // name: "SHAPE",
            // 允许用户连线
            portId: "",
            cursor: "pointer",
            fromLinkable: true,
            fromLinkableSelfNode: true,
            fromLinkableDuplicates: true,
            toLinkable: true,
            toLinkableSelfNode: true,
            toLinkableDuplicates: true,
          },
          new go.Binding("fill", "color") // 通过 color 字段进行形状填充
        ),
        $(
          go.TextBlock,
          { margin: 6, font: "18px sans-serif", editable: true }, // 文字可直接编辑
          new go.Binding("text") // 从 text 属性读取文本内容
        )
      );

      // 允许用户在node之间连线
      myDiagram.linkTemplate = $(
        go.Link,
        {
          relinkableFrom: true,
          relinkableTo: true,
          toShortLength: 2,
        },
        $(go.Shape, { strokeWidth: 2 }),
        $(go.Shape, { toArrow: "Standard", stroke: null })
      );

      // 定义 node
      myDiagram.model = new go.GraphLinksModel(
        [
          { key: 1, text: "Alpha", color: "lightblue" },
          { key: 2, text: "Beta", color: "orange" },
          { key: 3, text: "Gamma", color: "lightgreen" },
          { key: 4, text: "Delta", color: "pink" },
          { key: 5, text: "Router", color: "blue" },
        ],
        [
          { from: 1, to: 2 },
          { from: 1, to: 3 },
          { from: 2, to: 4 },
          { from: 3, to: 5 },
        ]
      );

      // 模板菜单回调
      function contextMenuTemplate() {
        $(
          go.Adornment, //修饰器
          "Vertical", // 垂直方向
          $("ContextMenuButton", $(go.TextBlock, "Click me!"), {
            click: (e, obj) => alert(2),
          })
        );
      }

      // 画布右键菜单
      myDiagram.contextMenu = $(
        go.Adornment,
        "Vertical",
        $("ContextMenuButton", $(go.TextBlock, "节点统计"), {
          click: (e) => alert(e.diagram.nodes.count),
        }),
        $("ContextMenuButton", $(go.TextBlock, "添加节点"), {
          click: (e, obj) => {
            // 不需要设置"key"属性——addNodeData将自动分配它
            const data = { text: "Node", color: "pink" };
            e.diagram.model.addNodeData(data);
            const node = e.diagram.findPartForData(data);
            node.location = e.diagram.lastInput.documentPoint;
          },
        })
      );

      const node = myDiagram.findNodeForKey(1); // 查找节点
      myDiagram.select(node); // 选择节点
      console.log(node, node.data);

      // 插入一个椭圆
      myDiagram.add(
        $(
          go.Node,
          "Auto",
          $(go.Shape, "Ellipse", {
            fill: $(go.Brush, "Linear", { 0.0: "Violet", 1.0: "Lavender" }),
          }),
          $(go.TextBlock, "这里是内容", { margin: 5 })
        )
      );
    },
    select() {
      // var node = myDiagram.findNodeForKey(1);
      // var shape = node.findObject("SHAPE");
      // shape.fill = "red";
      // console.log(node.data.color); // 这种修改方式并没有真正改变shape的fill，只是一种视觉呈现。

      // Diagram.findTreeRoots() 返回所有没有父节点的顶级节点的迭代器。
      // console.log(myDiagram.selection)

      myDiagram.commit((d) => {
        d.selection.each((node) => {
          var shape = node.findObject("SHAPE");
          if (shape !== null) {
            shape.fill = "red";
          }
        });
      }, "change color");
    },
  },
};
</script>

<style scoped>
#wrap,
#wrap2 {
  width: 700px;
  height: 500px;
  border: 1px solid pink;
}
</style>
