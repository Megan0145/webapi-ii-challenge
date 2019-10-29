import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import Home from './Home';

export function Navbar(props){
    return(
        <div>
           <nav>
               <Link to='/'>Home</Link>
           </nav>
           <main>
               <Route exact path='/' component={Home} />
           </main>
        </div>
    );
}
export default connect(state => state, {})(Navbar)