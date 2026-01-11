import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService"
import { User } from "../users/User"
import "./Employees.css"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((users) => {
            console.log(users)
            setEmployees(users)
        })
    },[])

    return (
        <div className="employees">
            {employees.map((employee) => {
                return (
                    <User user={employee} key={employee.id} />
                )
            })}
        </div>
    )
}
