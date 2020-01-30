import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import configureStore from './store/store';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import database,{firebase} from './firebase/firebaseConfig';
import {history} from './routes';
import {login, logout} from './actions/User';


const store = configureStore();
const jsx = (
  <Provider store={store}>
    <Router>
     <App />
    </Router>
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user)=>{ 
  if(user){
    store.dispatch(login({user: user.displayName, name:user.displayName, email:user.email, id:user.uid }));
    //ReactDOM.render(jsx, document.getElementById('root'));
    if(history.location.pathname === '/'){
      history.push('/videoPlayer');
    }
    
  }else{
    store.dispatch(logout());
    //ReactDOM.render(jsx, document.getElementById('root'));
    history.push('/');
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
