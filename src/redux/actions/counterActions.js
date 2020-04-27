import * as actionTypes from "./actionTypes"

export const increaseCounter = () => ({
    type: actionTypes.INCREASE_COUNTER, //componentlarda bunlar kullanılacak
    payload:1 // gönderilen değer
})

export const degreaseCounter=()=> ({
    type: actionTypes.DECREASE_COUNTER,
    payload:1
})

export const increaseByTwoCounter=()=>({
    type:actionTypes.DECREASE_BY_TWO_COUNTER,
    payload:2
})