import { call, put, takeLatest, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { fetchUserError, fetchUserSuccess, setCurrInputValue } from '../redux/formSlice';

async function getList(param: any) {
  try {
    const response = await fetch(`http://localhost:7070/api/search?q=${param}`);
    if (response.status > 499) {
      return [{name: 'responseFailed('}];
    }
    const data = await response.json();
    if (data.length === 0) {
      return [{name: 'no matches('}];
    }
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

function* fetchUser(action: any): Generator<any, void, any> {
  try {
    const user = yield call(getList, action.payload.inputValue); 
    yield put(fetchUserSuccess({user}));
  } catch (err) {
    yield put(fetchUserError(err.message))
  }
}


function* rootSaga(): Generator {
  yield takeEvery('formSlice/setCurrInputValue', fetchUser);
}

export default rootSaga;
