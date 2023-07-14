import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LogInPage from './pages/LogInPage/LogInPage';

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/log-in" element={<LogInPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
