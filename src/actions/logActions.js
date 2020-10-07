import { GET_LOGS, SET_LOADING, LOGS_ERROR,ADD_LOG, DELETE_LOG } from './types';


//use redux thunk for async return a func
// export const getLogs = () => {
//     return async (dispatch)=>{
//         setLoading();

//         const response = await fetch('http://localhost:3001/logs');
//         const data = await response.json()
//         dispatch({
//             type:GET_LOGS,
//             payload : data
//         })
//     }
// }

//refacto : 

export const getLogs = () => async dispatch => {

    try {
        setLoading();

        const response = await fetch('http://localhost:3001/logs');
        const data = await response.json()
        dispatch({
            type: GET_LOGS,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })

    }
}


export const deleteLogs = (id) => async dispatch => {

    try {
        setLoading();

        await fetch(`http://localhost:3001/logs/${id}`,{
            method :'DELETE'
        });

        dispatch({
            type: DELETE_LOG,
            payload: id

        })

    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })

    }
}


export const addLog = (log) => async dispatch =>{
    try{
        setLoading();

        const response = await fetch('http://localhost:3001/logs',{
            method:'POST',
            body:JSON.stringify(log),
            headers:{
                'Content-type':'application/json'
            }
        })

        const data = await response.json();
        dispatch({type:ADD_LOG,
                payload:data
        })

    }catch(err){
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}


export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}