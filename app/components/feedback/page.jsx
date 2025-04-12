 "use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { useState } from 'react';


export default function FormPage() {
  const router= useRouter()
  const [formData, setFormData] = useState({
  
    fullName: "",
    email: "",
    contactNumber: "",
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
    },
    systemSize: "",
    batteryBackup: "",
    panelType: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        panelType: checked
          ? [...prevState.panelType, value]
          : prevState.panelType.filter((item) => item !== value),
      }));
    } else if (name.includes("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prevState) => ({
        ...prevState,
        address: {
          ...prevState.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data Submitted:", formData);
  //   alert("Form submitted successfully!");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/feedback/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Form submitted successfully!");
        router.push(`/api/feedback/`)
        setFormData({
          fullName: "",
          email: "",
          contactNumber: "",
          address: { street: "", city: "", state: "", postalCode: "" },
          systemSize: "",
          batteryBackup: "",
          panelType: [],
        });
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };
  

  return (
    <section>
      <div className='pt-24 h-20'></div>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-6 space-y-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-lg rounded-lg border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700">Product Required Form</h2>

        {/* Name Section */}
        <div className="space-y-6 ">
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder='full name'
              required
              className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>


        <div className="space-y-6">
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@example.com"
              required
              className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Contact Number:</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="####-####-##"
              required
              className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <fieldset className="space-y-4">
            <legend className="font-semibold text-gray-700">Address:</legend>
            <div className="flex flex-col">
              <label>Street Address:</label>
              <input
                type="text"
                name="address.street"
                value={formData.address.street}
                onChange={handleChange}
                required
                className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="flex flex-col flex-1">
                <label>City:</label>
                <input
                  type="text"
                  name="address.city"
                  value={formData.address.city}
                  onChange={handleChange}
                  required
                  className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label>State/Province:</label>
                <input
                  type="text"
                  name="address.state"
                  value={formData.address.state}
                  onChange={handleChange}
                  required
                  className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Postal/Zip Code:</label>
              <input
                type="text"
                name="address.postalCode"
                value={formData.address.postalCode}
                onChange={handleChange}
                required
                className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </fieldset>

          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Desired System Size (KW):</label>
            <input
              type="text"
              name="systemSize"
              value={formData.systemSize}
              onChange={handleChange}
              required
              className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <fieldset className="space-y-2">
            <legend className="font-semibold text-gray-700">Battery Type:</legend>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="batteryType"
                  value="On-grid"
                  checked={formData.batteryType === "On-grid"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span>On-grid</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="batteryType"
                  value="Off-grid"
                  checked={formData.batteryType === "Off-grid"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span>Off-grid</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="batteryType"
                  value="Hybrid"
                  checked={formData.batteryType === "Hybrid"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span>Hybrid</span>
              </label>
            </div>
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="font-semibold text-gray-700">Preferred Panel Type:</legend>
            <div className="flex flex-wrap space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="panelType"
                  value="Monocrystalline"
                  checked={formData.panelType.includes("Monocrystalline")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span>Monocrystalline</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="panelType"
                  value="Polycrystalline"
                  checked={formData.panelType.includes("Polycrystalline")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span>Polycrystalline</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="panelType"
                  value="Thin Film"
                  checked={formData.panelType.includes("Thin Film")}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span>Thin Film</span>
              </label>
            </div>
          </fieldset>
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>

    </section>
  )
}



