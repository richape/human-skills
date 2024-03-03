import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import Home from './components/nl-components/Home'
import Register from './components/Register'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route index element={<Register />} />
  </Route>,
)
