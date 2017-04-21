<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item, index) in selections"
          @click="chooseSelection(index)"
          :title="item.label"
          :class="{active: index === nowIndex}"
      > {{ item.label }} </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      selections: {
        type: Array,
        default: [{
          label: 'test',
          value: 0
        }]
      }
    },
    data () {
      return {
        nowIndex: 0
      }
    },
    methods: {
      chooseSelection (index) {
        this.nowIndex = index
        this.$emit('on-change', this.selections[this.nowIndex])
      }
    }
  }
</script>

<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }
  .chooser-component ul li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }
  .chooser-component ul li.active,
  .chooser-component ul li:hover{
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }

</style>
