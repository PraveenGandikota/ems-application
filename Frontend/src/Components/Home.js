import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css'; // Import the scoped CSS

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0);
  const [employeeTotal, setEmployeeTotal] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetchAdminRecords();
    fetchAdminCount();
    fetchEmployeeCount();
    fetchSalaryTotal();
  }, []);

  const fetchAdminRecords = async () => {
    try {
      const result = await axios.get('http://localhost:5000/auth/admin_records');
      if (result.data.Status) setAdmins(result.data.Result);
    } catch (error) {
      console.error("Error fetching admin records:", error);
    }
  };

  const fetchAdminCount = async () => {
    try {
      const result = await axios.get('http://localhost:5000/auth/admin_count');
      if (result.data.Status) setAdminTotal(result.data.Result[0].admin);
    } catch (error) {
      console.error("Error fetching admin count:", error);
    }
  };

  const fetchEmployeeCount = async () => {
    try {
      const result = await axios.get('http://localhost:5000/auth/employee_count');
      if (result.data.Status) setEmployeeTotal(result.data.Result[0].employee);
    } catch (error) {
      console.error("Error fetching employee count:", error);
    }
  };

  const fetchSalaryTotal = async () => {
    try {
      const result = await axios.get('http://localhost:5000/auth/salary_count');
      if (result.data.Status) setSalaryTotal(result.data.Result[0].salaryOFEmp);
    } catch (error) {
      console.error("Error fetching salary total:", error);
    }
  };

  return (
    <div className="home-dashboard-container">
      <h1 className="home-dashboard-title">Dashboard</h1>
      
      <div className="home-stats-container">
        <div className="home-stat-card">
          <h3>Total Admins</h3>
          <p>{adminTotal}</p>
        </div>
        <div className="home-stat-card">
          <h3>Total Employees</h3>
          <p>{employeeTotal}</p>
        </div>
        <div className="home-stat-card">
          <h3>Total Salary</h3>
          <p>${salaryTotal}</p>
        </div>
      </div>
      
      <div className="home-admin-list">
        <h2>Admin List</h2>
        <table className="home-admin-table">
          <thead>
            <tr>
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => (
              <tr key={index}>
                <td>{admin.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;








// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const Home = () => {
//   const [adminTotal, setAdminTotal] = useState(0)
//   const [employeeTotal, setemployeeTotal] = useState(0)
//   const [salaryTotal, setSalaryTotal] = useState(0)
//   const [admins, setAdmins] = useState([])

//   useEffect(() => {
//     adminCount();
//     employeeCount();
//     salaryCount();
//     AdminRecords();
//   }, [])

//   const AdminRecords = () => {
//     axios.get('http://localhost:5000/auth/admin_records')
//     .then(result => {
//       if(result.data.Status) {
//         setAdmins(result.data.Result)
//       } else {
//          alert(result.data.Error)
//       }
//     })
//   }
//   const adminCount = () => {
//     axios.get('http://localhost:5000/auth/admin_count')
//     .then(result => {
//       if(result.data.Status) {
//         setAdminTotal(result.data.Result[0].admin)
//       }
//     })
//   }
//   const employeeCount = () => {
//     axios.get('http://localhost:5000/auth/employee_count')
//     .then(result => {
//       if(result.data.Status) {
//         setemployeeTotal(result.data.Result[0].employee)
//       }
//     })
//   }
//   const salaryCount = () => {
//     axios.get('http://localhost:5000/auth/salary_count')
//     .then(result => {
//       if(result.data.Status) {
//         setSalaryTotal(result.data.Result[0].salaryOFEmp)
//       } else {
//         alert(result.data.Error)
//       }
//     })
//   }
//   return (
//     <div>
//       <div className='p-3 d-flex justify-content-around mt-3'>
//         <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
//           <div className='text-center pb-1'>
//             <h4>Admin</h4>
//           </div>
//           <hr />
//           <div className='d-flex justify-content-between'>
//             <h5>Total:</h5>
//             <h5>{adminTotal}</h5>
//           </div>
//         </div>
//         <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
//           <div className='text-center pb-1'>
//             <h4>Employee</h4>
//           </div>
//           <hr />
//           <div className='d-flex justify-content-between'>
//             <h5>Total:</h5>
//             <h5>{employeeTotal}</h5>
//           </div>
//         </div>
//         <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
//           <div className='text-center pb-1'>
//             <h4>Salary</h4>
//           </div>
//           <hr />
//           <div className='d-flex justify-content-between'>
//             <h5>Total:</h5>
//             <h5>${salaryTotal}</h5>
//           </div>
//         </div>
//       </div>
//       <div className='mt-4 px-5 pt-3'>
//         <h3>List of Admins</h3>
//         <table className='table'>
//           <thead>
//             <tr>
//               <th>Email</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               admins.map(a => (
//                 <tr>
//                   <td>{a.email}</td>
//                   <td>
//                   <button
//                     className="btn btn-info btn-sm me-2">
//                     Edit
//                   </button>
//                   <button
//                     className="btn btn-warning btn-sm" >
//                     Delete
//                   </button>
//                   </td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default Home