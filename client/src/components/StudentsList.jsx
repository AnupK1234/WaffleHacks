import axios from "axios";
import { useEffect, useState } from "react";

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/users/getAllUser");
      const users = res.data.user;
      const studentData = users.filter((user) => user.role === "Student");
      setStudents(studentData);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  const handleAssignCoupons = (studentId, fullname) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student._id === studentId
          ? { ...student, coupons: parseInt(student.coupons) + 1 }
          : student
      )
    );
    alert(`1 Coupons Assigned to ${fullname}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Student List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100">Full Name</th>
              <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100">Email</th>
              <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100">Coupons Assigned</th>
              <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td className="px-4 py-2 border-b border-gray-200">{student.fullname}</td>
                <td className="px-4 py-2 border-b border-gray-200">{student.email}</td>
                <td className="px-4 py-2 border-b border-gray-200">{student.coupons}</td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <button
                    onClick={() => handleAssignCoupons(student._id, student.fullname)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Assign Coupons
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsList;
