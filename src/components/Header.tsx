import React, { useState } from 'react';
import { Car, Search, UserPlus, HelpCircle, Shield, Menu, X, GraduationCap } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isAdmin: boolean;
  setIsAdmin: (admin: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, isAdmin, setIsAdmin }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');

  const navItems = [
    { id: 'home', label: 'Home', icon: Car },
    { id: 'find', label: 'Find Vehicle', icon: Search },
    { id: 'register', label: 'Register', icon: UserPlus },
    { id: 'help', label: 'Help', icon: HelpCircle },
  ];

  const handleAdminLogin = () => {
    if (adminPassword === 'vnr2024') {
      setIsAdmin(true);
      setCurrentPage('admin');
      setShowAdminLogin(false);
      setAdminPassword('');
    } else {
      alert('Invalid password');
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    setCurrentPage('home');
  };

  return (
    <header className="bg-white shadow-lg border-b-4 border-blue-600 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 bg-blue-600 text-white p-2 rounded-lg">
              <GraduationCap className="h-8 w-8" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gray-900">VNR VJIET</h1>
              <p className="text-sm text-blue-600 font-medium">Parking Finder</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
            
            {/* Admin Button */}
            {isAdmin ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage('admin')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    currentPage === 'admin'
                      ? 'bg-red-600 text-white shadow-md'
                      : 'text-red-600 hover:bg-red-50'
                  }`}
                >
                  <Shield className="h-4 w-4" />
                  <span className="font-medium">Admin</span>
                </button>
                <button
                  onClick={handleAdminLogout}
                  className="text-gray-500 hover:text-red-600 px-2 py-1 text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAdminLogin(true)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <Shield className="h-4 w-4" />
                <span className="font-medium">Admin</span>
              </button>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
              
              {isAdmin ? (
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setCurrentPage('admin');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg transition-all duration-200 ${
                      currentPage === 'admin'
                        ? 'bg-red-600 text-white'
                        : 'text-red-600 hover:bg-red-50'
                    }`}
                  >
                    <Shield className="h-5 w-5" />
                    <span className="font-medium">Admin Panel</span>
                  </button>
                  <button
                    onClick={() => {
                      handleAdminLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
                  >
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setShowAdminLogin(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  <Shield className="h-5 w-5" />
                  <span className="font-medium">Admin Login</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Admin Login</h3>
            <input
              type="password"
              placeholder="Enter admin password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
              onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
            />
            <div className="flex space-x-3">
              <button
                onClick={handleAdminLogin}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setShowAdminLogin(false);
                  setAdminPassword('');
                }}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Hint: Password is "vnr2024"</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;