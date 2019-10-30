import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import AddComment from './AddComment';
import CreatePost from './CreatePost';

export function Navbar(props){
    return(
        <div>
           <nav>
               <Link to='/'>Home</Link>
               <Link to='/createpost'>Create New Post</Link>
           </nav>
           <main>
               <Route exact path='/' component={Home} />
               <Route exact path='/addcomment/:id' component={AddComment} />
               <Route exact path='/createpost' component={CreatePost}/>
           </main>
        </div>
    );
}
export default connect(state => state, {})(Navbar)