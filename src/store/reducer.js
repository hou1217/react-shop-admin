import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'
const defaultState = {
  inputValue: '做什么',
  list:[
    '8点起床',
    '9点出门'
  ]
}
export default (state=defaultState,action)=>{
  console.log(state,action);
  // reducer不能改变state
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    
    case "CHANGE_INPUT":
      newState.inputValue = action.value
      return newState
      break;
    case "ADD_ITEM":
      
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
      break;
    case "DELETE_ITEM":
      
      newState.list.splice(action.index,1)
      return newState
      break;
    default:
      return state;
      break;
  }
  // if(action.type === CHANGE_INPUT){
  //   console.log(action.value);
  //   let newState = JSON.parse(JSON.stringify(state))
  //   newState.inputValue = action.value
  //   return newState
  // }
  // if(action.type === ADD_ITEM){
  //   let newState = JSON.parse(JSON.stringify(state))
  //   newState.list.push(newState.inputValue)
  //   newState.inputValue = ''
  //   return newState
  // }
  // if(action.type === DELETE_ITEM){
  //   // let newState = Object.assign({},state) //Object.assign只能深拷贝第一层，故不推荐
  //   let newState = JSON.parse(JSON.stringify(state))
  //   newState.list.splice(action.index,1)
  //   return newState
  // }
  // return state
}