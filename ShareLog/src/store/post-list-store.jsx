import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }else if (action.type === 'ADD_POST'){
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, postBody, postTitle, note, tags) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload:{
        id: Date.now,
        title: postBody,
        body: postTitle,
        note: note,
        userId:userId,
        tags: tags,
      }
    })
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost }}
      className="provider"
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Gaza",
    body: "Hi Friend, I am going to gaza for helping my brothers.",
    note: "I'm muslim Alhamdulillah.",
    userId: "user-9",
    tags: ["Gaza", "Brothers"],
  },
  {
    id: "2",
    title: "Going to Gaza",
    body: "Hi Friend, I am going to gaza for helping my brothers.",
    note: "I'm muslim Alhamdulillah.",
    userId: "user-12",
    tags: ["Gaza", "Brothers"],
  },
];
export default PostListProvider;
