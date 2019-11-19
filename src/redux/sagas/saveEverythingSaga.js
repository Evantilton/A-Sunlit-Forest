import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';


function* saveEverything(action) {
    try {
        yield axios.put('/gameplay', action.payload );
        yield put({ type: 'GET_EVERYTHING'});
        console.log('getEverythingSaga was hit with an action', action.payload);
    } catch (error) {
        console.log('error fetching getEverythingSaga', error);
    }
} //End Put Data



function* saveEverythingSaga() {
    yield takeLatest('SAVE_EVERYTHING', saveEverything);
  }


export default saveEverythingSaga;