import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Comments from './pages/Comments/Comments';
import CreatePost from './pages/CreatePost/CreatePost';
import EditPost from './pages/EditPost/EditPost';
import Feed from './pages/Feed/Feed';
import Profile from './pages/Profile/Profile';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Feed/>} />
        <Route path="/post" element={<CreatePost/>} />
        <Route path="/edit/:id" element={<EditPost/>} />
        <Route path="/comments/:id" element={<Comments/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  )
}

export default App;
