import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const store = configureStore();
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
    <Router>
    <App /> 
    </Router> 
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
