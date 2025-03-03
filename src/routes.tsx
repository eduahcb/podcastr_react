import { BrowserRouter, Routes, Route } from 'react-router';

import {  AuthLayout } from '@/pages/auth/layout'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

