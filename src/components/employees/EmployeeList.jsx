import { useEffect, useSate } from "react"
import { getStaffUsers } from "../../services/userService"
import { User } from "../user/User"
import "./Employees.css"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((res) => {
            setEmployees(res.json())
        })
    },[])

    return (
        <div className="employees">
            employees.map((employee) => {
                return (
                    <User User={employee} key={employee.id} />
                )
            }
        </div>
    )
}
