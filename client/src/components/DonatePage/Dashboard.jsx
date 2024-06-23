import { useState,useEffect } from "react";
import axios from "axios";
const Dashboard = () => {
    const [paymentDetails, setpaymentDetails] = useState();

    const fetchComplaint = async () => {
        try {
        const res = await axios.get(
            "http://localhost:8000/api/users/get-payment-details"
        );
        setpaymentDetails(res.data.paymentList);
        } catch (error) {
        console.log(error);
        }
    };

    useEffect(() => {
        fetchComplaint();
    }, []);
  return (
    <div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200">ID</th>
            <th className="py-2 px-4 bg-gray-200">Name</th>
            <th className="py-2 px-4 bg-gray-200">Email</th>
            <th className="py-2 px-4 bg-gray-200">Amount</th>
          </tr>
        </thead>
        <tbody>
            {paymentDetails && paymentDetails.map((details, index)=>(
                <tr key={index}>
                    <td className="py-2 px-4 border-b border-gray-200 text-center">{index+1}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-center">{details.name}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-center">{details.email}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-center">{details.amount}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
