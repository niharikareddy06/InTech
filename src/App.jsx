import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Layout from './assets/Components/Layout';
import Userpage from './assets/Pages/Userpage';
import UploadModal from './assets/Createvideo/Videoupload';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <Layout >
    </Layout>
  );
}

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home onCreateClick={() => setShowModal(true)} />} />
          <Route path="/user" element={<Userpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
