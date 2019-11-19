import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getEverything(action) {
    try {
        const getEverythingSagaResponse = yield axios.get('/gameplay');
        yield put({ type: 'STORE_GET_EVERYTHING', payload: getEverythingSagaResponse.data });
        console.log('getEverythingSaga was hit with an action', action);
    } catch (error) {
        console.log('error fetching getEverythingSaga', error);
    }
}


function* getEverythingSaga() {
    yield takeLatest('GET_EVERYTHING', getEverything);
  }

export default getEverythingSaga;