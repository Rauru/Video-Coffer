import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import configureStore from './store/store';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import database, {firebase} from './firebase/firebaseConfig';
import {history} from './routes';
import {login, logout} from './actions/User';
import { getVideoList,removeVideoList } from './actions/videoId';


const store = configureStore();
const jsx = (
  <Provider store={store}>
    <Router>
     <App />
     <App.test/>
    </Router>
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));

store.subscribe(
  ()=>{
    console.log(store.getState().list)
  }
);

firebase.auth().onAuthStateChanged((user)=>{ 
  if(user){
    if(history.location.pathname === '/'){
      store.dispatch(login({user: user.displayName, name:user.displayName, email:user.email, id:user.uid }));
      store.dispatch(getVideoList(user.email));
      history.push('/home');
    }
    
  }else{
    store.dispatch(logout());
    history.push('/');
    
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
