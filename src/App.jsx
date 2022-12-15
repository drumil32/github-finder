import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <BrowserRouter>
    {/* <div className="flex flex-col justify-between h-screen">
      <main>Content</main>
    </div> */}
    <Routes>
      <Route path="/" element={<Navbar />}>
        {/* <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
