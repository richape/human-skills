import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import Home from './components/nl-components/Home'
import Register from './components/Register'
import Phase from './components/Phase'
import AppIntro from './components/nl-components/AppIntro'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/app-intro" element={<AppIntro />} />
    <Route path="/phase" element={<Phase />} />
  </Route>,
)
