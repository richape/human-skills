import Logo from './stateless-components/Logo'
import Footer from './stateless-components/Footer'
import Home from './stateless-components/Home'
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
