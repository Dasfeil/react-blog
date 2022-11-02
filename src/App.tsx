import React from 'react';
import './App.css';
import { Link, NavLink } from 'react-router-dom';

function App(): JSX.Element {

  return (
    <div className="App">
      <nav>
        <div className='w-[60%] flex m-auto justify-between'>
          <div>
            <Link to="/">conduit</Link>
          </div>
          <div className='flex justify-evenly'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/signin">Sign in</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
          </div>  
        </div>
      </nav>
    </div>
  );
}

export default App;
