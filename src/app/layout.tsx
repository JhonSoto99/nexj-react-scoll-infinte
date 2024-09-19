// src/app/layout.tsx

import React from 'react';
import './globals.css'; // Importa CSS global si tienes

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
