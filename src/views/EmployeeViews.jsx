import { Outlet, Route, Routes } from 'react-router-dom'
import { CustomerDetails } from '../components/customers/CustomerDetails'
import { Welcome } from '../components/welcome/Welcome'
import { TicketList } from '../components/tickets/TicketList'
import { EmployeeList } from '../components/employees/EmployeeList'
import { CustomerList } from '../components/customers/CustomersList'
import { EmployeeDetails } from '../components/employees/EmployeeDetails'
import { EmployeeForm } from '../components/forms/EmployeeForm'
import { EmployeeNav } from '../components/nav/EmployeeNav'

export const EmployeeViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <EmployeeNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route
          path="tickets"
          element={<TicketList currentUser={currentUser} />}
        />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route
          path="profile"
          element={<EmployeeForm currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  )
}
