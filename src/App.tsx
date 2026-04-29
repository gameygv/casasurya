import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Podcast from './pages/Podcast';
import Contact from './pages/Contact';
import HouseWarmingParty from './pages/HouseWarmingParty';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/servicios/:slug" element={<ServiceDetail />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/eventos/:slug" element={<EventDetail />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/warminghouseparty" element={<HouseWarmingParty />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
