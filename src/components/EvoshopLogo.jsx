import React from 'react';

const EvoshopLogo = ({ profileImageUrl }) => {
  return (
    <div className="relative w-64 h-64 bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 rounded-lg shadow-lg overflow-hidden">
      {/* African pattern background */}
      <div className="absolute inset-0 opacity-20 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      {/* Logo text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-2">Evoshop</h1>
        <p className="text-sm italic">valorisons la culture africaine</p>
      </div>
      
      {/* Profile picture space */}
      <div className="absolute bottom-2 right-2 w-16 h-16 bg-white rounded-full border-2 border-white overflow-hidden">
        {profileImageUrl ? (
          <img src={profileImageUrl} alt="Profile" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            <span className="text-xs">Add Photo</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EvoshopLogo;