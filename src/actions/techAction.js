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
            payload: err.response
        })

    }
}



//---------------setLoding----------------
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

//----------------addtech-----------------
export const addTech = (tech) => async dispatch => {

    try {
        setLoading();

        const response = await fetch('http://localhost:3001/techs',{
            method: 'POST',
            body: JSON.stringify(tech),
            headers:{
                'Content-type' : 'application/json'
            }
        });
        const data = await response.json()
        dispatch({
            type: ADD_TECH,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })

    }
}


///------------------deletetch

export const deleteTechs = (id) => async dispatch => {

    try {
        setLoading();

        await fetch(`http://localhost:3001/techs/${id}`,{
            method:'DELETE'
        });

        dispatch({
            type: DELETE_TECH,
            payload: id
        })

    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response
        })

    }
}