import { Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import ScrollToTop from './components/ScrollToTop';
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Call from './pages/call'
import Speakers from './pages/speakers'
import Contact from './pages/contact'
import Committees from './pages/committees'
import Plagiarism from './pages/plagiarism';
import Explore from './pages/explore';
import Guidelines from './pages/guidelines';
import Accommodation from './pages/accommodation'
import Venue from './pages/venue'
import Register from './pages/register'

function App() {
  return (
    <>
    <ScrollToTop />  {/* component Used for Scroll to top of a page */}
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About-Us' element={<About />} />
        <Route path='/Call-for-Papers' element={<Call />} />
        <Route path='/Speakers' element={<Speakers />} />
        <Route path='/Committees' element={<Committees />} />
        <Route path='/Plagiarism-Policy' element={<Plagiarism />} />
        <Route path='/Guidelines' element={<Guidelines />} />
        <Route path='/Contact-Us' element={<Contact />} />
        <Route path='/Explore' element={<Explore />} />
        <Route path='/Accommodation' element={<Accommodation />} />
        <Route path='/Venue' element={<Venue />} />
        <Route path='/Register' element={<Register />} />
      </Routes >
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App;