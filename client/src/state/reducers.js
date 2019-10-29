import * as types from "./actionTypes";

const initState = {
  posts: []
};

export function postsReducer(state = initState, action) {
  switch (action.type) {
    case types.GET_ALL_POSTS:
      return {
        posts: action.payload
      };
      case types.DELETE_POST:
          return {...state.posts, posts: state.posts.filter(post => {
              return post.id !== JSON.parse(action.payload)
          })}
    default:
      return state;
  }
}
