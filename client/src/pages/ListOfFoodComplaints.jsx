import axios from "axios";
import { useEffect, useState } from "react";

const ListOfFoodComplaints = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/get-complaint")
            .then((res) => {
                setDetails(res.data.complaintsList);
                //console.log(res.data.complaintsList);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="flex justify-center items-center h-full min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 max-w-screen-lg">
                {
                    details.map((res, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                                <h3 className="text-indigo-500 text-xs font-medium tracking-widest uppercase mb-1">{new Date(res.date).toLocaleString()}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium mb-2">{res.issueDescription}</h2>
                                <p className="leading-relaxed text-base">{res.locality}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ListOfFoodComplaints;
