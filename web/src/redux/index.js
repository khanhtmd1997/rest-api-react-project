import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
// import { rootSaga } from "./sagas";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
// import createSagaMiddleware from "redux-saga";
// const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [""],
};

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const bindMiddleware = (middleware) => {
  return compose(applyMiddleware(...middleware), devTools);
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, bindMiddleware([]));
export const persistor = persistStore(store);
// sagaMiddleware.run(rootSaga);
