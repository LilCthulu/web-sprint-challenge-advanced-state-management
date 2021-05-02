import axios from 'axios';


export const START_FETCH_SMURF = 'START_FETCH_SMURF'
export const GOOD_FETCH_SMURF = 'GOOD_FETCH_SMURF'
export const BAD_FETCH_SMURF = 'BAD_FETCH_SMURF'
export const ADD_FETCH_SMURF = 'ADD_FETCH_SMURF'

export const fetchSmurfs = (dispatch) => {
        dispatch({ type: START_FETCH_SMURF });
        axios.get('http://localhost:3333/smurfs')
            .then((res) => {
                console.log(res.data)
                dispatch({ type: GOOD_FETCH_SMURF, payload: res.data })
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: BAD_FETCH_SMURF, payload: err })
            })
    }
    //Task List:
    //1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
    //2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
    //3. Add a standard action that allows us to set the value of the error message slice of state.