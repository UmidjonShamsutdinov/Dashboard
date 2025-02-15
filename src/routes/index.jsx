import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Dashboard from './dashboard/Dashboard'
import Accounts from './accounts/Accounts'
import Informations from './informations/Informations'
import Support from './support/Support'

const RouteController = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}>
              <Route index element={<Navigate to="accounts" replace />} />
              <Route path='/dashboard/accounts' element={<Accounts/>}/>
              <Route path='/dashboard/user-info' element={<Informations/>}/>
              <Route path='/dashboard/support' element={<Support/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default RouteController