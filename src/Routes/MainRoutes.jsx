import React from 'react'
import { Route, Routes} from "react-router-dom"
import Employees from '../Pages/Employees'
import EmployeesDetails from '../Pages/EmployeesDetails'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Employees/>} />
        <Route path="/empd/:id" element={<EmployeesDetails/>} />
    </Routes>
  )
}

export default MainRoutes