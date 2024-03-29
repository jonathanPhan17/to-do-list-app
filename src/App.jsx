import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navbar from "./components/Navbar";
import Card from './components/Card';
import ContactForm from './components/ContactForm';






function App() {

  return (
    <BrowserRouter>
      <header className="flex text-white gap-16 justify-end fixed color py-6">
        <Navbar />
      </header>
      <main className="min-h-screen">
        <Routes path="/to-do-list-app/">
          <Route path="/to-do-list-app/" element={<Card />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
