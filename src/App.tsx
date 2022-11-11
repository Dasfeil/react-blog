import React from 'react';
import './App.css';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { userAction} from './redux/user/slice';
import { useAppDispatch, useAppSelector } from './redux/hooks';


function App(): JSX.Element {
  const getToken = (): void => {
    const token = localStorage.getItem('token')
    const dispatch = useAppDispatch()
    if (token !== null) {
      dispatch(userAction.getUser(token))
    }
  }

  getToken()
  const user = useAppSelector(state => state.user.token)
  console.log(user)
  return (
    <div className="App">
      <nav>
        <div className="w-[70%] py-2 flex m-auto justify-between">
          <div>
            <Link to="/">conduit</Link>
          </div>
          <div className="flex justify-evenly columns-3 gap-3">
            <NavLink to="/">Home</NavLink>
            {user != null?
              <>
                <NavLink to="/signin">Sign in</NavLink>
                <NavLink to="/signup">Sign up</NavLink>
              </> : 
              <>
                <NavLink to="/funny">Funny</NavLink>
              </>}
            
          </div>
        </div>
      </nav>
      <div className="h-[100px] bg-[#98c293]"></div>
      <div className="my-[30px]"></div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
