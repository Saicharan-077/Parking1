import React from 'react';
import { Phone, Mail, Shield, User, Wrench } from 'lucide-react';

const HelpPage: React.FC = () => {
  const contacts = [
    {
      id: 1,
      name: 'Mr. Rajesh Reddy',
      role: 'Head of Security',
      phone: '+91 9876543210',
      email: 'security.head@vnrvjiet.ac.in',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      icon: Shield,
      description: 'Overall campus security and vehicle management oversight'
    },
    {
      id: 2,
      name: 'Ms. Priya Sharma',
      role: 'Application Supporter',
      phone: '+91 8765432109',
      email: 'app.support@vnrvjiet.ac.in',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      icon: Wrench,
      description: 'Technical support for parking management system'
    },
    {
      id: 3,
      name: 'Dr. Anand Kumar',
      role: 'Administrative Officer',
      phone: '+91 7654321098',
      email: 'admin.office@vnrvjiet.ac.in',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      icon: User,
      description: 'Administrative queries and policy-related matters'
    }
  ];

  const faqs = [
    {
      question: 'How do I register my vehicle?',
      answer: 'Navigate to the Register page and fill out all the required information including vehicle details and owner information. Once submitted, your vehicle will be added to the system.'
    },
    {
      question: 'Can I update my vehicle information?',
      answer: 'Yes, contact the Administrative Officer or use the admin panel (if you have access) to update your vehicle information.'
    },
    {
      question: 'What if I forget my vehicle registration details?',
      answer: 'You can search for your vehicle using the Find Vehicle page with your name or partial vehicle number.'
    },
    {
      question: 'Is there a parking fee?',
      answer: 'Parking policies and fees are determined by the administration. Please contact the Administrative Officer for current fee structure.'
    },
    {
      question: 'What documents are required for registration?',
      answer: 'You need your vehicle registration certificate, valid ID (employee ID or student ID), and contact information.'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Need assistance with the VNR VJIET Parking Management System? 
            Our dedicated support team is here to help you with any questions or issues.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contacts.map((contact) => {
            const IconComponent = contact.icon;
            return (
              <div key={contact.id} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={contact.image}
                      alt={contact.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>
                  <div className="flex items-center justify-center space-x-2 text-blue-100">
                    <IconComponent className="h-5 w-5" />
                    <span className="font-medium">{contact.role}</span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <p className="text-gray-600 text-center">{contact.description}</p>
                  
                  <div className="space-y-3">
                    <a
                      href={`tel:${contact.phone}`}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors group"
                    >
                      <Phone className="h-5 w-5 text-gray-500 group-hover:text-blue-600" />
                      <span className="font-medium text-gray-900 group-hover:text-blue-600">{contact.phone}</span>
                    </a>
                    
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors group"
                    >
                      <Mail className="h-5 w-5 text-gray-500 group-hover:text-blue-600" />
                      <span className="font-medium text-gray-900 group-hover:text-blue-600 break-all">{contact.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="p-8">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Help Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            For urgent parking-related issues or security concerns, please contact our security team directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-red-700 transition-colors font-semibold shadow-lg"
            >
              Emergency Contact
            </a>
            <a
              href="mailto:security.head@vnrvjiet.ac.in"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors font-semibold"
            >
              Email Support
            </a>
          </div>
        </div>

        {/* Office Hours */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Support Hours</h3>
            <div className="text-gray-600 space-y-1">
              <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
              <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
              <p><strong>Sunday:</strong> Emergency Only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;