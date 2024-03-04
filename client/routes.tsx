import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import Home from './components/nl-components/Home'
import Register from './components/Register'
import Phase from './components/Phase'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route index element={<Register />} />
    <Route index element={<Phase />} />
  </Route>,
)
