import React,{useState, useEffect} from "react";
import Employee from "./Employee.jsx";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([])

  useEffect(()=> {
    fetch(`https://vet-api-1.onrender.com/api/employees`)
    .then((res)=> res.json())
    .then((apiData)=>{
      setEmployees(apiData)
    })
  }, [])
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee)=>{
          return <Employee key={employee.id} employee={employee} />
        })}
   
      </section>
    </main>
  );
};

export default EmployeeList;
