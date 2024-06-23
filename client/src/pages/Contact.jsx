import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Message sent by ${formData.name} (${formData.email}): ${formData.message}`
    );
    // Handle form submission logic, e.g., sending data to a server
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-12">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-green-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block mb-2 text-green-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block mb-2 text-green-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="hidden lg:block lg:ml-10">
        <img
          src="https://static1.bigstockphoto.com/9/0/4/large2/409951876.jpg"
          alt="Contact Us Illustration"
          className="w-96 h-96 object-contain"
        />
      </div>
    </div>
  );
};

export default Contact;
