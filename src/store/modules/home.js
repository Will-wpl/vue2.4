export const state = {
    datas: {
        homeData:{}
    }
}

export const mutations = {
    changeData (state, data) {  
        state.datas.homeData = data
    }
}


export const actions = {
    saveHomeData(context,data){
        context.commit('changeData', data)
    }
}
