import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import AddComment from './AddComment';

export function Navbar(props){
    return(
        <div>
           <nav>
               <Link to='/'>Home</Link>
               <Link to='/createpost'>Create New Post</Link>
           </nav>
           <main>
               <Route exact path='/' component={Home} />
               <Route exact path='/addcomment' component={AddComment} />
           </main>
        </div>
    );
}
export default connect(state => state, {})(Navbar)