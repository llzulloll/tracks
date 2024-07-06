import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const locationReducer = (state, action) => {

    switch (action.type) {
        case 'add_location':
            return { ...state, currentLocation: action.payload }
        default:
            return state;
    }

};

const startRecording = dispatch => () => { }
const stopRecording = dispatch => () => { }
const addLocation = dispatch => (location) => {

    dispatch({ type: 'add_location', payload: location })

}

export const { Provider, Context } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation },
    { recording: false, locations: [], currentLocation: null }
);