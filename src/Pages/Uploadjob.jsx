import React, { useState } from "react";

const Step1 = ({ formData, setFormData }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Step 1: Job Details</h2>
      <input
        className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        type="text"
        placeholder="Job Title"
        value={formData.jobTitle}
        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
      />
      <textarea
        className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        placeholder="Job Description"
        value={formData.jobDescription}
        onChange={(e) =>
          setFormData({ ...formData, jobDescription: e.target.value })
        }
      />
    </div>
  );
};

const Step2 = ({ formData, setFormData }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Step 2: Company Details</h2>
      <input
        className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        type="text"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={(e) =>
          setFormData({ ...formData, companyName: e.target.value })
        }
      />
      <input
        className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        type="text"
        placeholder="Company Location"
        value={formData.companyLocation}
        onChange={(e) =>
          setFormData({ ...formData, companyLocation: e.target.value })
        }
      />
    </div>
  );
};

const Step3 = ({ formData, setFormData }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">
        Step 3: Contact Information
      </h2>
      <input
        className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        type="text"
        placeholder="Contact Email"
        value={formData.contactEmail}
        onChange={(e) =>
          setFormData({ ...formData, contactEmail: e.target.value })
        }
      />
      <input
        className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        type="text"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={(e) =>
          setFormData({ ...formData, phoneNumber: e.target.value })
        }
      />
    </div>
  );
};

const Uploadjob = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    companyName: "",
    companyLocation: "",
    contactEmail: "",
    phoneNumber: "",
  });

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Job uploaded successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-6">
      <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl w-full max-w-lg text-center">
        <h1 className="text-3xl font-extrabold text-white mb-8">Upload Job</h1>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <Step1 formData={formData} setFormData={setFormData} />
          )}
          {step === 2 && (
            <Step2 formData={formData} setFormData={setFormData} />
          )}
          {step === 3 && (
            <Step3 formData={formData} setFormData={setFormData} />
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                onClick={prevStep}>
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                onClick={nextStep}>
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Uploadjob;
