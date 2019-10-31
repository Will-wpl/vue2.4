<template>
  <div class="steps-whole" v-if="steps.stepVisible">
    <div class="steps-view">
      <div v-for="(item,index) in steps.stepsData" :key="index" class="steps-view-label" :class="labelClass(item)"><span>{{ item.name }}</span></div>
    </div>
    <div class="steps-view marginl44">
      <div v-for="(item,index) in steps.stepsData" :key="index" class="steps-view-item" :class="itemClass(item)">
        <div class="steps-view-item-status" :class="pointClass(item)" ><span>{{item.id}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Step',
  props: {
  },
  computed: {
    ...mapGetters([
      'steps'
    ]),
    labelClass() {
      return function(item) {
        return {
          'mini-label': item.size === 'mini',
          'finish': item.status === 'finish',
          'process': item.status === 'process'
        }
      }
    },
    itemClass() {
      return function(item) {
        return {
          'mini': item.size === 'mini',
          'finish': item.status === 'finish',
          'process': item.status === 'process'
        }
      }
    },
    pointClass() {
      return function(item) {
        return {
          'mini-point': item.size === 'mini',
          'finish': item.status === 'finish',
          'process': item.status === 'process'
        }
      }
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.steps-whole { 
  float: right;
}
.steps-view {
  display: flex;
  flex-flow: row;
}
.marginl44 {
  margin-left: 30px;
}
.steps-view-item {
  width: 75px;
  height: 20px;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
}

.steps-view-item::before {
  content: '';
  position: absolute;
  z-index: -1;
  width: 75px;
  height: 2px;
  background-color: #bcbcbc;
}

.steps-view-item.finish::before {
  background-color: #1d77d2;
}

.steps-view-item.process::before {
  background-color: #1d77d2;
}

.steps-view-item.mini::before {
  background-color: #1d77d2;
}

.steps-view-item:last-of-type::before {
  content: '';
  position: absolute;
  z-index: -1;
  width: 2px;
  height: 2px;
  background-color: #bcbcbc;
}

.steps-view-item-status {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: #fff;
  font-size: 12px;
  text-align: center;
  border: 1px solid #bcbcbc
}

.steps-view-item-status.mini-point {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #EEF2F6;
  border: 1px solid #BBD6F1;
}

.steps-view-item-status.mini-point.finish {
  background-color: #1d77d2;
  color: #1d77d2;
}

.steps-view-item-status.finish {
  background-color: #BBD6F1;
  border: 1px solid #1d77d2;
  color: #1d77d2;
}

.steps-view-item-status.mini-point.process {
  background-color: #1d77d2;
  border:1px solid #fff;
}

.steps-view-item-status.mini-point.process span{
  display: none;
}

.steps-view-item-status.process {
  background-color: #ffffff;
  border: 1px solid #1d77d2;
  color: #1d77d2;
}


.steps-view-label {
  width: 75px;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  font-size: 14px;
  font-weight: 600;
  color: #bcbcbc;
  line-height: 28px;
}

.steps-view-label.mini-label {
  position: relative;
  font-size: 12px;
  line-height: 20px;
  color: #77ADE4;
}

.steps-view-label.mini-label.process span{
  position: absolute;
  top:42px; margin-left: -3px;
}

.steps-view-label.finish {
  color: #1d77d2;
}

.steps-view-label.process {
  color: #1d77d2;
}
/* .steps-view-item:last-child{
  width: 0px;
} */
</style>