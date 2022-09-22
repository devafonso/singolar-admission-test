import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Comments from './pages/Comments/Comments';
import CreatePost from './pages/CreatePost/CreatePost';
import EditPost from './pages/EditPost/EditPost';
import Feed from './pages/Feed/Feed';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Feed/>} />
        <Route path="/post" element={<CreatePost/>} />
        <Route path="/edit" element={<EditPost/>} />
        <Route path="/comments" element={<Comments/>} />
      </Routes>
    </Router>
  )
}

export default App;
