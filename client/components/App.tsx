import Logo from './nl-components/Logo'
import Footer from './nl-components/Footer'
import Home from './nl-components/Home'
import Login from './Login'
import Register from './Register'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#40276E' }}>
      <Home />
      <Logo className="pt-7" />
      <div className="flex justify-center items-center mt-4">
        <Login className="mr-5" />
        <Register />
      </div>
      <Footer />
    </div>
  )
}

export default App
