import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import videosReducer from '../reducers/videos';
import videoIdReducer from '../reducers/videoId';

const configureStore = () => {
    const store = createStore(
        combineReducers({
            videos: videosReducer,
            videoId: videoIdReducer
        }),
        applyMiddleware(thunk, promise)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
};

export default configureStore;