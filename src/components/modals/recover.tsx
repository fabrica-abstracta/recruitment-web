'use client';
import React from 'react';

interface RecoverModalProps {
  onClose: () => void;
  onSwitchToSignIn: () => void;
  onSwitchToReset: () => void;
}

export default function RecoverModal({ onClose, onSwitchToSignIn, onSwitchToReset }: RecoverModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Recuperar Contraseña</h2>
        
        <p className="text-gray-600 text-center mb-6">
          Ingresa tu email y te enviaremos un enlace para restablecer tu contraseña.
        </p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="tu@email.com"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
          >
            Enviar Enlace de Recuperación
          </button>
        </form>
        
        <div className="mt-4 text-center space-y-2">
          <p className="text-gray-600 text-sm">
            ¿Ya tienes el código de recuperación?{' '}
            <button
              onClick={onSwitchToReset}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Restablecer aquí
            </button>
          </p>
          
          <p className="text-gray-600 text-sm">
            ¿Recordaste tu contraseña?{' '}
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