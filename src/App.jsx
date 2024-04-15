
import './index.css'
import Home from './pages/Home'
import Messages from './pages/Messages'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
 return (
<>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/messages" element={<Messages/>} />
      </Routes>
      <Footer />
</>
 )
}

export default App
