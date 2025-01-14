"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const customDatePickerStyles = `
  .react-datepicker-wrapper {
    width: 100%;
    margin-bottom: 1rem;
  }
  .react-datepicker__input-container {
    width: 100%;
  }
`



export default function BookAppointment() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false); // Success state

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required.';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required.';
      } else if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,7}$/.test(formData.email)) {
        newErrors.email = 'Enter a valid email.';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required.';
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Enter a valid 10-digit phone number.';
      }
    }

    if (step === 2) {
      if (!formData.date.trim()) newErrors.date = 'Date is required.';
      if (!formData.time.trim()) newErrors.time = 'Time is required.';
    }

    if (step === 3) {
      if (!formData.reason.trim()) newErrors.reason = 'Reason is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateStep()) {
      setIsLoading(true);  // Set loading to true when the submit is clicked

      // Formsubmit action URL
      const formActionURL = 'https://formsubmit.co/aryan.456.as@gmail.com'; // Replace with your email
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('time', formData.time);
      formDataToSend.append('reason', formData.reason);
      formDataToSend.append('_captcha', 'false');
  
      try {
        // Use await to send data to Formsubmit
        const response = await fetch(formActionURL, {
          method: 'POST',
          body: formDataToSend,
        });
  
        if (response.ok) {
          setIsSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            reason: ''
          });
        } else {
          alert('There was an error. Please try again.');
        }
      } catch (error) {
        alert('There was an error. Please try again.');
        console.error('Error in form submission:', error);
      }finally {
        setIsLoading(false);  // Set loading to false after the process is done
      }
    }
  };
  

  useEffect(() => {
    const styleElement = document.createElement('style')
    styleElement.textContent = customDatePickerStyles
    document.head.appendChild(styleElement)

    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-center max-w-xs mx-auto">
                {[1, 2, 3].map((num) => (
                  <motion.div
                    key={num}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= num ? 'bg-[#800000] text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                    initial={false}
                    animate={step >= num ? { scale: [1, 1.2, 1] } : {}}
                  >
                    {num}
                  </motion.div>
                ))}
              </div>
              <div className="h-1 bg-gray-200 mt-4 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#800000]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((step - 1) / 2) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} noValidate>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h2 className="text-3xl font-bold text-[#800000] mb-8">Personal Information</h2>
                      <div className="space-y-6">
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-[#800000] focus:ring-1 focus:ring-[#800000]"
                          />
                          {errors.name && <p className="text-red-500 text-sm mt-1 absolute left-0 bottom-[-20px]">{errors.name}</p>}
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-[#800000] focus:ring-1 focus:ring-[#800000]"
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-1 absolute left-0 bottom-[-20px]">{errors.email}</p>}
                        </div>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-[#800000] focus:ring-1 focus:ring-[#800000]"
                          />
                          {errors.phone && <p className="text-red-500 text-sm mt-1 absolute left-0 bottom-[-20px]">{errors.phone}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                    <h2 className="text-3xl font-bold text-[#800000] mb-8">Schedule Appointment</h2>
                      <div className="space-y-6">
                      <div className="relative">
  {/* Calendar Icon */}
  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none z-10" style={{ height: '50%' }}>
    <Calendar className="w-5 h-5" />
  </div>

  {/* Date Picker Input */}
  <ReactDatePicker
    selected={formData.date ? new Date(formData.date) : null}
    onChange={(date) => setFormData({ ...formData, date: date ? date.toLocaleDateString('en-CA') : '' })}
    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-[#800000] focus:ring-1 focus:ring-[#800000]"
    placeholderText="Select Date"
    dateFormat="MMMM d, yyyy"
    minDate={new Date()}
    showPopperArrow={true}
    autoComplete="off"
  />

  {/* Error Message */}
  {errors.date && (
    <p className="text-red-500 text-sm mt-1 absolute left-0 bottom-[-20px]">
      {errors.date}
    </p>
  )}
</div>



<div className="relative">
  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
  <select
    name="time"
    value={formData.time}
    onChange={handleChange}
    className="w-full pl-12 pr-10 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-[#800000] focus:ring-1 focus:ring-[#800000] appearance-none"
  >
    <option value="">Select Time</option>
    {availableTimes.map((time) => (
      <option key={time} value={time}>
        {time}
      </option>
    ))}
  </select>
  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
    <ChevronDown className="w-5 h-5" />
  </div>
  {errors.time && <p className="text-red-500 text-sm mt-1 absolute left-0 bottom-[-20px]">{errors.time}</p>}
</div>



                      </div>
                    </motion.div>
                  )}

{step === 3 && !isSuccess && (
  <motion.div
    key="step3"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    <h2 className="text-3xl font-bold text-[#800000] mb-8">Reason for Appointment</h2>
    <div className="space-y-6">
      <div className="relative">
        <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Describe the reason for your appointment"
          rows="4"
          className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-[#800000] focus:ring-1 focus:ring-[#800000]"
          style={{
            paddingTop: '5rem',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            boxSizing: 'border-box',
          }}
        />
        {errors.reason && <p className="text-red-500 text-sm mt-1 absolute left-0 bottom-[-20px]">{errors.reason}</p>}
      </div>
    </div>
  </motion.div>
)}

{/* Success message after form submission */}
{isSuccess && (
  <motion.div
    key="success"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-6 text-center"
  >
    <h2 className="text-3xl font-bold text-[#FFA500] mb-8">Appointment Submitted Successfully!</h2>
    <p className="text-lg">Thank you for scheduling an appointment. You will be contacted soon!</p>
  </motion.div>
)}

                </AnimatePresence>

                <div className="flex justify-center mt-8">
                  {step > 1 && !isSuccess && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 bg-gray-200 rounded-full text-gray-700 text-sm font-semibold hover:bg-gray-300 transition-all"
                    >
                      <ChevronLeft className="inline-block mr-2" />
                      Back
                    </button>
                  )}
                  {step < 3 && !isSuccess && (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-3 bg-[#800000] text-white rounded-full text-sm font-semibold hover:bg-[#b30000] transition-all"
                    >
                      Next
                      <ChevronRight className="inline-block ml-2" />
                    </button>
                  )}
                {step === 3 && !isSuccess && (
  <button
    type="submit"
    className="px-8 py-3 bg-[#800000] text-white rounded-full text-sm font-semibold hover:bg-[#b30000] transition-all"
    disabled={isLoading} // Disable button while loading
  >
    {isLoading ? (
      <div className="spinner-border animate-spin border-t-2 border-b-2 border-white w-6 h-6 border-solid rounded-full"></div> // You can replace this with a spinner of your choice
    ) : (
      'Submit'
    )}
  </button>
)}

                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
