import { unserialization } from "../../utils/serialization"
import { defaultStepsData } from "../../assets/mockdata/mockdata"
const state = {
    stepVisible: true,
    stepsData: defaultStepsData
  }
  
  const mutations = {
    CHANGE_STEPVISIBLE: (state, value) => {
      state.stepVisible = value
    },
    CHANGE_STEPSDATA: (state, data) => {
      state.stepsData = data
    },
    CHANGE_STEPSDATA_ITEM: (state, data) => {
        let stepData = unserialization(defaultStepsData);
        stepData.map((item)=>{
            if(item.id == data.step){
                item.status = data.status
            }else{
                if(item.id < data.step){
                    item.status = "process"
                }
            }
        })
        if(data.addstatus && data.addstatus.length > 0){
            for(let i = data.addstatus.length; i--;){
                stepData.splice(data.step,0,data.addstatus[i])
            }
        }
        state.stepsData = stepData
    }
  }
  
  const actions = {
    changeStepVisible({ commit }, value) {
      commit('CHANGE_STEPVISIBLE', value)
    },
    changeStepsData({ commit }, data) {
      commit('CHANGE_STEPSDATA', data)
    },
    changeStepItemData({ commit }, data){
      commit('CHANGE_STEPSDATA_ITEM', data)
    }
  }
  
  export {
    state,
    mutations,
    actions
  }