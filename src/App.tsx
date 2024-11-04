import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}