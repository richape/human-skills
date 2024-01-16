import Logo from './Logo'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Register from './Register'

function App() {
  return (
    <div style={{ backgroundColor: '#40276E' }}>
      <Home />
      <Logo className="pt-8" />
      <div className="flex justify-center items-center mt-4">
        <Login className="mr-4" />
        <Register />
      </div>
      <Footer />
    </div>
  )
}

export default App
