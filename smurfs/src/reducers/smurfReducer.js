import { FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_ERROR} from "";

export const initialState = {
    smurfArray: [
        {
            name: "",
            age: null,
            height: "",
            id: null
        }
    ],
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SMURFS:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfArray: action.payload,
                isLoading: false
            };
        case FETCH_SMURFS_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
    }
}

// [{"name":"Brainey","age":200,"height":"5cm","id":0}]