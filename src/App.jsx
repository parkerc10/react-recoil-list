import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Counter from './Counter';
import List from './List';
import Login from './Login';
import { loginState } from './atoms';
import {useRecoilValue} from 'recoil';
import {Routes, Route, Navigate} from 'react-router-dom';

function App() {
  const loginStatus = useRecoilValue(loginState);

  const ProtectedRoute = ({ children }) => {
    if (!loginStatus) {
      return <Navigate to="/landing" replace/>;
    }
  
    return children;
  };

  return (
    <div className="p-10 bg-cyan-600 h-screen">
      <Routes>
        <Route index element={<ProtectedRoute><Counter />
        <List /></ProtectedRoute>}/>
        <Route path='landing' element={<Login />}/>
        <Route path="*" element={<Navigate to='/' replace />}/>
      </Routes>
    </div>
  )
}

export default App
