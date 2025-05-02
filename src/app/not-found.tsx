import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white-300 flex flex-col justify-center items-center text-center p-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg shadow-black/15 max-w-md w-full">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          Página não encontrada!
        </p>
        <p className="text-md text-gray-600 mb-6">
          Parece que você se perdeu nos corredores da escola...
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3443/3443338.png"
          alt="Desenho de quadro-negro"
          className="w-32 h-32 mx-auto mb-6"
        />
      </div>
    </div>
  );
}
