import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getEmployeeByUserId } from "../../services/employeeService"
import "./Employees.css"

export const EmployeeDetails = () => {
    const [ employee, setEmployee ] = useState({})
    const { employeeId } = useParams()
    
    useEffect(() => {
        getEmployeeByUserId(employeeId).then((data) => {
            const employeeObj = data[0]
            setEmployee(employeeObj)
        })
    }, [employeeId])

    return (
        <section className="employee">
            <div className="employee-header">
                {employee.user?.fullName}
            </div>
            <div>
                <span className="employee-info">Email : </span>
                {employee.user?.email}
            </div>
            <div>
                <span className="employee-info">Speciality : </span>
                {employee.specialty}
            </div>
            <div>
                <span className="employee-info">Hourly Rate : </span>
                {employee.rate}
            </div>
            <footer className="employee-footer">
                Currently working on {employee.employeeTickets?.length} tickets
            </footer>
        </section>
    )
}
