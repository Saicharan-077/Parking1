import React, { useState } from 'react';
import { Car, User, Mail, Phone, Building, CheckCircle } from 'lucide-react';
import { Vehicle } from '../App';

interface RegisterPageProps {
  onAddVehicle: (vehicle: Omit<Vehicle, 'id' | 'registeredAt'>) => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onAddVehicle }) => {
  const [formData, setFormData] = useState({
    vehicleType: 'Car' as 'Car' | 'Bike' | 'EV',
    vehicleNumber: '',
    model: '',
    color: '',
    evStatus: false,
    ownerName: '',
    email: '',
    employeeStudentId: '',
    department: '',
    category: 'Student' as 'Faculty' | 'Student',
    phoneNumber: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const departments = ['CSE', 'ECE', 'MECH', 'CIVIL', 'EEE', 'IT', 'AERO', 'CHEM', 'MBA', 'MCA'];
  const vehicleColors = ['White', 'Black', 'Silver', 'Red', 'Blue', 'Gray', 'Green', 'Yellow', 'Brown', 'Other'];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.vehicleNumber.trim()) newErrors.vehicleNumber = 'Vehicle number is required';
    if (!formData.model.trim()) newErrors.model = 'Model is required';
    if (!formData.color.trim()) newErrors.color = 'Color is required';
    if (!formData.ownerName.trim()) newErrors.ownerName = 'Owner name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.employeeStudentId.trim()) newErrors.employeeStudentId = 'ID is required';
    if (!formData.department.trim()) newErrors.department = 'Department is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phoneNumber.replace(/\s/g, ''))) newErrors.phoneNumber = 'Invalid phone number';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onAddVehicle({
        ...formData,
        vehicleNumber: formData.vehicleNumber.toUpperCase(),
        evStatus: formData.vehicleType === 'EV' || formData.evStatus
      });
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        vehicleType: 'Car',
        vehicleNumber: '',
        model: '',
        color: '',
        evStatus: false,
        ownerName: '',
        email: '',
        employeeStudentId: '',
        department: '',
        category: 'Student',
        phoneNumber: ''
      });

      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Register Your Vehicle</h1>
          <p className="text-xl text-gray-600">
            Complete the form below to register your vehicle with VNR VJIET Parking Management System
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-600 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-green-800">Vehicle registered successfully!</h3>
                <p className="text-green-600">Your vehicle has been added to the parking management system.</p>
              </div>
            </div>
          </div>
        )}

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Car className="mr-3 h-7 w-7" />
              Vehicle Registration Form
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Vehicle Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Vehicle Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Vehicle Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type *</label>
                  <select
                    value={formData.vehicleType}
                    onChange={(e) => handleInputChange('vehicleType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                    <option value="EV">Electric Vehicle</option>
                  </select>
                </div>

                {/* Vehicle Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Number *</label>
                  <input
                    type="text"
                    value={formData.vehicleNumber}
                    onChange={(e) => handleInputChange('vehicleNumber', e.target.value)}
                    placeholder="e.g., TS09EA1234"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.vehicleNumber ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.vehicleNumber && <p className="text-red-500 text-sm mt-1">{errors.vehicleNumber}</p>}
                </div>

                {/* Model */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Model *</label>
                  <input
                    type="text"
                    value={formData.model}
                    onChange={(e) => handleInputChange('model', e.target.value)}
                    placeholder="e.g., Honda City, Royal Enfield"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.model ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.model && <p className="text-red-500 text-sm mt-1">{errors.model}</p>}
                </div>

                {/* Color */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color *</label>
                  <select
                    value={formData.color}
                    onChange={(e) => handleInputChange('color', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.color ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Color</option>
                    {vehicleColors.map(color => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                  {errors.color && <p className="text-red-500 text-sm mt-1">{errors.color}</p>}
                </div>
              </div>

              {/* EV Status */}
              {formData.vehicleType !== 'EV' && (
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="evStatus"
                    checked={formData.evStatus}
                    onChange={(e) => handleInputChange('evStatus', e.target.checked)}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="evStatus" className="text-sm font-medium text-gray-700">
                    This is an Electric/Hybrid Vehicle
                  </label>
                </div>
              )}
            </div>

            {/* Owner Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Owner Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Owner Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Owner Name *</label>
                  <input
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => handleInputChange('ownerName', e.target.value)}
                    placeholder="Full Name"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.ownerName ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.ownerName && <p className="text-red-500 text-sm mt-1">{errors.ownerName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="email@vnrvjiet.ac.in"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    placeholder="+91 9876543210"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.phoneNumber ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                </div>

                {/* Employee/Student ID */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Employee/Student ID *</label>
                  <input
                    type="text"
                    value={formData.employeeStudentId}
                    onChange={(e) => handleInputChange('employeeStudentId', e.target.value)}
                    placeholder="e.g., F001, 21B91A0501"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.employeeStudentId ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.employeeStudentId && <p className="text-red-500 text-sm mt-1">{errors.employeeStudentId}</p>}
                </div>

                {/* Department */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department *</label>
                  <select
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.department ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Department</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                  {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="Student">Student</option>
                    <option value="Faculty">Faculty</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-200 shadow-lg"
              >
                Register Vehicle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;