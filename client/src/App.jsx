import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost, Comments } from './pages';
import { preview } from './assets';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex 
      justify-between items-center bg-zinc-900 
      sm:px-8 px-4 py-4 border-b border-b-[#e1d9d1]"> {/* Creates the proportions (for each device) and color of the header*/}
      <Link to="/">
          <img src={logo} alt="logo"
          className="w-28 object-contain" />
      </Link> {/* Places the logo as a link to the Home page*/}           
      <Link to="/create-post" 
      className="font-inter font-medium 
      bg-[#6469ff] text-white px-4 py-2 
      rounded-md">Create</Link> {/* Adds a Create button that links to the CreatePost page*/}
      </header>
      <main className="sm:p-8 px-4 py-8
      w-full bg-[#18181b] min-h-[calc
      (100vh-73px)]"> {/* Sets the proportions (for each device) and color of the background*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post"
          element={<CreatePost />} />
         <Route path="/posts/:postId"element={<Comments />} />
        </Routes> {/* Puts these navigation routes on each page of the App*/}
      </main>
    </BrowserRouter>

  )
}

export default App