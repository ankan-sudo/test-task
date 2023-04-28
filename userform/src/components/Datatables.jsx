import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import "datatables.net";
import "./Datatables.css";

const Datatables = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const table = $("#users-table").DataTable({
      data: users,
      columns: [
        { title: "Name", data: "name" },
        { title: "Age", data: "age" },
        { title: "Sex", data: "sex" },
        { title: "Mobile", data: "mobile" },
        { title: "IDType", data: "idType" },
        { title: "Govt_ID", data: "id" },
        { title: "Email", data: "email" },
        { title: "EmergencyCN", data: "emergencyContactNumber" },
        { title: "GuardianTitle", data: "guardianTitle" },
        { title: "Guardian", data: "guardianName" },
        { title: "Address", data: "address" },
        { title: "Country", data: "country" },
        { title: "State", data: "state" },
        { title: "Pincode", data: "pincode" },
        { title: "City", data: "city" },
        { title: "Occupation", data: "occupation" },
        { title: "Religion", data: "religion" },
        { title: "Marital_status", data: "marital" },
        { title: "Blood_Group", data: "blood" },
        { title: "Nationality", data: "nationality" },
      ],
    });
    return () => {
      table.destroy();
    };
  }, [users]);

  return (
    <div className="container">
      <div>
        <h1>Users List</h1>
      </div>

      <table id="users-table" style={{ width: "50%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB/Age</th>
            <th>Sex</th>
            <th>Mobile</th>
            <th>IDType</th>
            <th>Govt_ID</th>
            <th>Email</th>
            <th>EmergencyCN</th>
            <th>GuardianTitle</th>
            <th>Guardian</th>
            <th>Address</th>
            <th>Country</th>
            <th>State</th>
            <th>Pincode</th>
            <th>City</th>
            <th>Occupation</th>
            <th>Religion</th>
            <th>Marital_status</th>
            <th>Blood_Group</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.sex}</td>
              <td>{user.idType}</td>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.emergencyContactNumber}</td>
              <td>{user.guardianTitle}</td>
              <td>{user.guardianName}</td>
              <td>{user.address}</td>
              <td>{user.country}</td>
              <td>{user.state}</td>
              <td>{user.pincode}</td>
              <td>{user.city}</td>
              <td>{user.occupation}</td>
              <td>{user.religion}</td>
              <td>{user.marital}</td>
              <td>{user.blood}</td>
              <td>{user.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatables;
