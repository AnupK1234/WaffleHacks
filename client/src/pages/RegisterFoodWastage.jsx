import { useCallback, useState,useEffect } from "react";
import axios from 'axios'

const RegisterFoodWastage = () => {
    const [locality, setLocality] = useState("");
    const [foodType, setFoodType] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [foodDescription, setFoodDescription] = useState("");
    const [date, setDate] = useState("");
    const [mobileNo,setMobileNo] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);

    const fetchGeolocation = useCallback(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                // (error) => {
                //     console.error("Error fetching geolocation: ", error);
                // }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    useEffect(() => {
        fetchGeolocation();
    }, [fetchGeolocation]);


    const triggerAPI = useCallback(async () => {
        try {
            const res = await axios.post("http://localhost:8000/api/users/register-complaint", {
                locality,
                foodType,
                latitude,
                longitude,
                foodDescription,
                date,
                mapAPI: `https://www.google.com/maps?q=${latitude},${longitude}`,
                mobileNo,
                selectedImage
            });
            console.log("Response: ", res);
        } catch (err) {
            console.log("Error: ", err);
        }
    }, [locality, foodType, latitude, longitude, foodDescription, date, mobileNo, selectedImage]);
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        triggerAPI();
    }, [triggerAPI]);

    return (
        <div className="flex items-center justify-center p-12 mt-14">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <form onSubmit={handleSubmit}>
                    <div className="mb-5  m-5">
                        <label htmlFor="mobileNo" className="mb-3 block text-base font-medium text-[#07074D]">
                            Mobile Number
                        </label>
                        <input value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} type="number" name="mobileNo" id="mobileNo" placeholder="Mobile Number"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5  m-5">
                        <label htmlFor="locality" className="mb-3 block text-base font-medium text-[#07074D]">
                            Locality
                        </label>
                        <input value={locality} onChange={(e) => setLocality(e.target.value)} type="text" name="locality" id="locality" placeholder="Locality"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5  m-5">
                        <label htmlFor="foodType" className="mb-3 block text-base font-medium text-[#07074D]">
                            Food Type
                        </label>
                        <input value={foodType} onChange={(e) => setFoodType(e.target.value)} type="text" name="issueType" id="issueType" placeholder="Issue Type"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5  m-5">
                        <label htmlFor="image" className="mb-3 block text-base font-medium text-[#07074D]">
                            Food Image
                        </label>
                        <input type="file" name="image" id="image" placeholder="Image" onChange={(event) => {setSelectedImage(event.target.files[0])}}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    {selectedImage && (
                        <div>
                        <img
                            alt="not found"
                            width={"250px"}
                            src={URL.createObjectURL(selectedImage)}
                        />
                        <br /> <br />
                        <button onClick={() => setSelectedImage(null)}>Remove</button>
                        </div>
                    )}
                    <div className="mb-5  m-5">
                        <label htmlFor="latitude" className="mb-3 block text-base font-medium text-[#07074D]">
                            Latitude
                        </label>
                        <input value={latitude} onChange={(e) => setLatitude(e.target.value)} type="text" name="latitude" id="latitude" placeholder="Latitude"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5  m-5">
                        <label htmlFor="longitude" className="mb-3 block text-base font-medium text-[#07074D]">
                            Longitude
                        </label>
                        <input value={longitude} onChange={(e) => setLongitude(e.target.value)} type="text" name="longitude" id="longitude" placeholder="Longitude"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5  m-5">
                        <label htmlFor="issueDescription" className="mb-3 block text-base font-medium text-[#07074D]">
                            Food Description
                        </label>
                        <textarea value={foodDescription} onChange={(e) => setFoodDescription(e.target.value)} name="issueDescription" id="issueDescription" placeholder="Issue Description"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5  m-5">
                        <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                            Date
                        </label>
                        <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" id="date"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div>
                        <button type="submit" className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Register Complaint
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterFoodWastage;
