import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService"
import { User } from "../users/User"
import "./Employees.css"
import {Link} from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((users) => {
            setEmployees(users)
        })
    },[])

    return (
        <div className="employees">
            {employees.map((employee) => {
                return (
                    <Link to={`/employees/${employee.id}`}>
                        <User user={employee} key={employee.id} />
                    </Link>
                )
            })}
        </div>
    )
}
