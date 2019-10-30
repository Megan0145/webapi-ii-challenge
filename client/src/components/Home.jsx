import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import styled from "styled-components";
import Post from './Post';
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

export function Home({ getPosts, posts, deletePost, getPostComments }) {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (!posts) {
    return <p>Loading...</p>;
  }

  return (
    <StyledContainer>
      <h1>All Posts</h1>
      {posts.map(post => {
        return (
          <StyledBlogPost key={post.id}>
           <Post post={post}/>
          </StyledBlogPost>
        );
      })}
    </StyledContainer>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(Home);
