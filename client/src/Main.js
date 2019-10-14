import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router';


import Context from './utils/context';
import AuthCheck from './utils/authcheck';

import Home from './hooks/home';
import HooksContainer1 from './hooks/hook1';
import Callback from './hooks/callback';
import HooksForm from './hooks/hooks_form1';
import PrivateComponent from './hooks/privatecomponent';
import SignUp from './hooks/signup';


import Profile from './Profile/profile';
import ShowUser from './Profile/showuser';
import SendMessage from './Profile/sendmessage';
import ShowMessages from './Profile/showmessages';
import ReplytoMessage from './Profile/replytomessage';

import Posts from './Blog/posts';
import AddPost from './Blog/addpost';
import ShowPost from './Blog/showpost';
import EditPost from './Blog/editpost';

const PrivateRoute = ({ component: Component, auth }) => (
  <Route render={props => auth === true
    ? <Component auth={auth} {...props} />
    : <Redirect to={{ pathname: '/signup' }} />
  }
  />
)

const Main = () => {
  const context = useContext(Context)

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/hooksform' component={HooksForm} />

      <Route path='/hookscontainer' component={HooksContainer1} />
      <Route path='/authcheck' component={AuthCheck} />
      <Route path='/signup' component={SignUp} />

      <Route path='/posts' component={Posts} />
      <Route path='/post/:pid' component={ShowPost} />
      <Route path='/editpost/:pid' component={EditPost} />
      <Route path='/addpost' component={AddPost} />

      <Route path="/user/:name" component={ShowUser} />

      <PrivateRoute path='/profile'
        auth={context.authState}
        component={Profile} />

      <PrivateRoute path="/sendmessage"
        auth={context.authState}
        component={SendMessage} />

      <PrivateRoute path="/showmessages/:id"
        auth={context.authState}
        component={ShowMessages} />
      <PrivateRoute path="/replytomessage"
        auth={context.authState}
        component={ReplytoMessage} />

      <PrivateRoute path='/privateroute'
        auth={context.authState}
        component={PrivateComponent} />
      <PrivateRoute path="/profile"
        auth={context.authState}
        component={Profile} />
      <Route path='/callback'
        render={(props) => {
          context.handleAuth(props);
          return <Callback />
        }} />
    </Switch>
  )
}



export default Main;
