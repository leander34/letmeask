import './services/firebase'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContextProvide  } from './contexts/AuthContext'
import GlobalStyles from './styles/global'
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { Room } from './pages/Room'
import { AdminRoom } from './pages/AdminRoom'

function App() {
    
  return (
    <BrowserRouter>
      <AuthContextProvide>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms/new' element={<NewRoom />} />
          <Route path='/rooms/:id' element={<Room />} />
          <Route path='/admin/rooms/:id' element={<AdminRoom />} />
        </Routes>
      </AuthContextProvide>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
