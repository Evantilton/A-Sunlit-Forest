import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';


function* deleteEverything(action) {
    try {
        yield axios.delete('/gameplay');
        yield put({ type: 'GET_EVERYTHING'});
        console.log('getEverythingSaga was hit with an action', action.payload);
    } catch (error) {
        console.log('error fetching getEverythingSaga', error);
    }
} //End Put Data



function* deleteEverythingSaga() {
    yield takeLatest('DELETE_EVERYTHING', deleteEverything);
  }


export default deleteEverythingSaga;