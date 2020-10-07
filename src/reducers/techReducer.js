import {GET_TECHS,ADD_TECH,DELETE_TECH,SET_LOADING,TECHS_ERROR} from '../actions/types'

const initialState = {
    techs: null,
    loading: false,
    err: null
}



export default (state = initialState, action)=>{
    switch(action.type){

        case GET_TECHS: 
        return{
            ...state,
            techs: action.payload
        }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        case  TECHS_ERROR :
            console.log(action.payload)
            return{
                ...state,
                err: action.payload
            }

        default:
            return{
                state
            }
    }
}