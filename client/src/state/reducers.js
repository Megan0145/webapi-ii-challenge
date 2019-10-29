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
    default:
      return state;
  }
}
