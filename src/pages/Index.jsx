import React from 'react';
import EvoshopLogo from '../components/EvoshopLogo';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Evoshop Logo</h1>
      <EvoshopLogo />
      <p className="mt-8 text-gray-600">
        This logo incorporates African patterns, the Evoshop name, and a space for a profile picture.
        The slogan "valorisons la culture africaine" is included to emphasize the brand's mission.
      </p>
    </div>
  );
};

export default Index;