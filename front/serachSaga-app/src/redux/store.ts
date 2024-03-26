import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import formSlice from "./formSlice";
import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
  reducer: {
    form: formSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
export default store;