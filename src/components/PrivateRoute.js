import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';


export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  state,
  ...rest
  
}) => (
    <Route {...rest} component={(props)=>(
      isAuthenticated ?(
        <Component {...props}/>
      ):(
      <Redirect to='/'/>
        
      )
    )}/>
);
 
const mapStateToProps = (state)=>({
  isAuthenticated: !!state.users.id,
  state: state
})

export default connect(mapStateToProps)(PrivateRoute);
