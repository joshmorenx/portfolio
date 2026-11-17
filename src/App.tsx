import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.tsx'

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/portfolio" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/portfolio" replace />} />
    </Routes>
  )
}
