import { portfolioData } from './data'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <>
      <Hero person={portfolioData.person} />
    </>
  )
}

export default App