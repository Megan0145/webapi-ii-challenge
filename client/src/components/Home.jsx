import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import styled from 'styled-components';


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledBlogPost = styled.div`
    width: 50vw;
    margin: 2rem;
    background-color: pink;
    padding: 2rem;
`;

export function Home({getPosts, posts}){
    useEffect(() => {
        getPosts()
    }, [getPosts])

    if(!posts){
        return <p>Loading...</p>
    }

    return(
        <StyledContainer>
            <h1>All Blog Posts</h1>
            {posts.map(post => {
                return (
                    <StyledBlogPost key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.contents}</p>
                        <p>{post.created_at}</p>
                        <button>Delete Post</button>
                    </StyledBlogPost>
                )
            })}
        </StyledContainer>
    )
}

const mapStateToProps = state => {
    return {
      posts: state.posts.posts
    };
  };

export default connect(mapStateToProps, actionCreators)(Home)