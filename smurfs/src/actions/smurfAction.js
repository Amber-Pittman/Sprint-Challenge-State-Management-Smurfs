import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF"

export function getSmurfs() {
    return dispatch => {
        dispatch({type: FETCH_SMURFS})

        axios.get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({type: FETCH_SMURFS_ERROR, payload: err });
        });
    };
}

export function makeSmurf(name, height, age) {
    return dispatch => {
        axios.post("http://localhost:3333/smurfs", {
            name: name,
            height: height,
            age: age
        })
        .then(res => {
            dispatch({
                type: ADD_SMURF,
                payload: res.data
            })
        })
        .catch(err => {
            throw err;
        });
    };
}

export function killSmurf(id) {
    return dispatch => {
        axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_SMURF,
                payload: res.data
            });
        })
        .catch(err => {
            throw err;
        });
    };
}