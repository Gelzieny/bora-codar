import { Route, Routes } from 'react-router-dom'
import { App } from '../pages/App'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  )
}
