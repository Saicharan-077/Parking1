import React, { useState, useEffect } from 'react';
import { Car, Search, UserPlus, HelpCircle, Shield, Menu, X } from 'lucide-react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import FindVehiclePage from './components/FindVehiclePage';
import HelpPage from './components/HelpPage';
import AdminPanel from './components/AdminPanel';

export interface Vehicle {
  id: string;
  vehicleType: 'Car' | 'Bike' | 'EV';
  vehicleNumber: string;
  model: string;
  color: string;
  evStatus: boolean;
  ownerName: string;
  email: string;
  employeeStudentId: string;
  department: string;
  category: 'Faculty' | 'Student';
  phoneNumber: string;
  registeredAt: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const savedVehicles = localStorage.getItem('vnr-parking-vehicles');
    if (savedVehicles) {
      setVehicles(JSON.parse(savedVehicles));
    } else {
      // Initialize with some sample data
      const sampleData: Vehicle[] = [
        {
          id: '1',
          vehicleType: 'Car',
          vehicleNumber: 'TS09EA1234',
          model: 'Honda City',
          color: 'White',
          evStatus: false,
          ownerName: 'Dr. Rajesh Kumar',
          email: 'rajesh.kumar@vnrvjiet.ac.in',
          employeeStudentId: 'F001',
          department: 'CSE',
          category: 'Faculty',
          phoneNumber: '+91 9876543210',
          registeredAt: '2024-01-15'
        },
        {
          id: '2',
          vehicleType: 'Bike',
          vehicleNumber: 'TS09FA5678',
          model: 'Royal Enfield Classic',
          color: 'Black',
          evStatus: false,
          ownerName: 'Arjun Reddy',
          email: 'arjun.reddy@vnrvjiet.ac.in',
          employeeStudentId: '21B91A0501',
          department: 'ECE',
          category: 'Student',
          phoneNumber: '+91 8765432109',
          registeredAt: '2024-01-20'
        },
        {
          id: '3',
          vehicleType: 'EV',
          vehicleNumber: 'TS09GA9999',
          model: 'Tata Nexon EV',
          color: 'Blue',
          evStatus: true,
          ownerName: 'Prof. Priya Sharma',
          email: 'priya.sharma@vnrvjiet.ac.in',
          employeeStudentId: 'F045',
          department: 'MECH',
          category: 'Faculty',
          phoneNumber: '+91 7654321098',
          registeredAt: '2024-02-01'
        }
      ];
      setVehicles(sampleData);
      localStorage.setItem('vnr-parking-vehicles', JSON.stringify(sampleData));
    }
  }, []);

  const addVehicle = (vehicle: Omit<Vehicle, 'id' | 'registeredAt'>) => {
    const newVehicle: Vehicle = {
      ...vehicle,
      id: Date.now().toString(),
      registeredAt: new Date().toISOString().split('T')[0]
    };
    const updatedVehicles = [...vehicles, newVehicle];
    setVehicles(updatedVehicles);
    localStorage.setItem('vnr-parking-vehicles', JSON.stringify(updatedVehicles));
  };

  const updateVehicle = (id: string, updatedVehicle: Omit<Vehicle, 'id' | 'registeredAt'>) => {
    const updatedVehicles = vehicles.map(vehicle => 
      vehicle.id === id ? { ...updatedVehicle, id, registeredAt: vehicle.registeredAt } : vehicle
    );
    setVehicles(updatedVehicles);
    localStorage.setItem('vnr-parking-vehicles', JSON.stringify(updatedVehicles));
  };

  const deleteVehicle = (id: string) => {
    const updatedVehicles = vehicles.filter(vehicle => vehicle.id !== id);
    setVehicles(updatedVehicles);
    localStorage.setItem('vnr-parking-vehicles', JSON.stringify(updatedVehicles));
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'register':
        return <RegisterPage onAddVehicle={addVehicle} />;
      case 'find':
        return <FindVehiclePage vehicles={vehicles} />;
      case 'help':
        return <HelpPage />;
      case 'admin':
        return <AdminPanel 
          vehicles={vehicles} 
          onUpdateVehicle={updateVehicle} 
          onDeleteVehicle={deleteVehicle}
          onAddVehicle={addVehicle}
        />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />
      <main className="pt-20">
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;