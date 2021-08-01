import createContext from "./createContext";
import TrackerApi from '../Config/Api/TrackerApi';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {
                ...state, errMessage: action.payload
            }
        case 'signin':
            return {
                ...state, token: action.payload, errMessage: ''
            }
        case 'clear_err_msg':
            return {
                ...state, errMessage: ''
            }
        case 'signout':
            return {
                token: null, errMessage: ''
            }
        default:
            return state;
    }

};

const signUp = dispatch => async ({ email, password }) => {
    try {
        const response = await TrackerApi.post('/signup', { email, password })
        await AsyncStorage.setItem('@token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })
        navigate('TrackList');
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something Went Wrong with Sign Up' })
    }


}

const signIn = dispatch => async ({ email, password }) => {
    try {
        const response = await TrackerApi.post('/signin', { email, password })
        await AsyncStorage.setItem('@token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })
        navigate('TrackList')

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something Went Wrong with Sign In' })
    }
}


const signOut = dispatch => async ({ email, password }) => {

    await AsyncStorage.removeItem('@token')
    dispatch({ type: 'signout' })
    navigate('loginFlow');
}


const clearErrMessage = dispatch => () => {
    dispatch({ type: 'clear_err_msg' })
}

const tryLocalSignIn = dispatch => async () => {
    let token = await AsyncStorage.getItem('@token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');
    } else {
        navigate('loginFlow')
    }
}


export const { Context, Provider } = createContext(
    authReducer,
    { signUp, signIn, signOut, clearErrMessage, tryLocalSignIn },
    {
        token: null,
        errMessage: '',
    }
)