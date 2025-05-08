# ShareLog

A simple React-based web app that allows users to create and view posts. ShareLog is a small project made for learning purposes and demonstrates core React concepts like state management (`useReducer`, `useContext`), DOM referencing (`useRef`), and form handling — styled using Bootstrap and custom CSS.

---

## Features

- Create and submit a new post with:
  - User ID
  - Title
  - Content (Body)
  - Note
  - Tags
- Delete posts
- Global state management via Context API and `useReducer`
- Form interaction handled using `useRef`
- Styling powered by Bootstrap and custom CSS
- Modular React components

---

## Technologies Used

- React
- JavaScript (ES6+)
- Bootstrap 5
- CSS
- React Hooks: `useState`, `useReducer`, `useContext`, `useRef`
- React Icons (optional)

---

## Project Structure

src/
├── components/
│ ├── CreatePost.js # Post creation form using useRef
│ ├── PostList.js # Displays list of posts
│ ├── Sidebar.js # Tab navigation
│ ├── Header.js # Page header
│ └── Footer.js # Page footer
├── store/
│ └── post-list-store.js # Post context & reducer logic
├── App.js # Main application component
└── App.css # Custom styles

---

## Key Concepts in ShareLog

### useRef

Used to read and reset input fields directly in the form:

```js
const postTitleElement = useRef();
const postBodyElement = useRef();
useContext
Accesses the shared post state (addPost, deletePost) globally without prop drilling.

const { addPost } = useContext(PostList);
useReducer
Controls post list actions like ADD_POST and DELETE_POST using reducer logic.

const postListReducer = (currPostList, action) => {
  // reducer logic
};
Learning Objectives
ShareLog was built to help understand:

React architecture and component structure

Context API and useReducer

Using useRef for efficient form control

Bootstrap-based styling

Hands-on JavaScript with React

Notes
Post data is not persisted (no database).

This is a learning-only project.

All actions (add/delete) work in-memory only.