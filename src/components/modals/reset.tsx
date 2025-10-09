'use client';
import React from 'react';

interface ResetModalProps {
  onClose: () => void;
  onSwitchToSignIn: () => void;
}

export default function ResetModal({ onClose, onSwitchToSignIn }: ResetModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Restablecer Contraseña</h2>
        
        <p className="text-gray-600 text-center mb-6">
          Ingresa el código que recibiste en tu email y tu nueva contraseña.
        </p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Código de Verificación</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="123456"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Nueva Contraseña</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="********"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Confirmar Nueva Contraseña</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="********"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition"
          >
            Restablecer Contraseña
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            ¿Contraseña restablecida?{' '}
            <button
              onClick={onSwitchToSignIn}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Iniciar sesión
            </button>
          </p>
        </div>
        
        <button
          onClick={onClose}
          className="mt-6 w-full bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg transition"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}