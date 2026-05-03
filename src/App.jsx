import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component1/Header'
import Footer from './component1/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
