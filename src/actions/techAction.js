import {GET_TECHS,ADD_TECH,DELETE_TECH,SET_LOADING,TECHS_ERROR} from './types'


//--------------get-----------------
export const getTechs = () => async dispatch => {

    try {
        setLoading();

        const response = await fetch('http://localhost:3001/techs');
        const data = await response.json()
        dispatch({
            type: GET_TECHS,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })

    }
}



//---------------setLoding----------------
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}