'use client';
import React from 'react';

interface SignInModalProps {
  onClose: () => void;
  onSwitchToSignUp: () => void;
  onSwitchToRecover: () => void;
}

export default function SignInModal({ onClose, onSwitchToSignUp, onSwitchToRecover }: SignInModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Iniciar Sesión</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="tu@email.com"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Contraseña</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="********"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
          >
            Iniciar Sesión
          </button>
        </form>
        
        <div className="mt-4 text-center space-y-2">
          <p className="text-gray-600 text-sm">
            ¿Olvidaste tu contraseña?{' '}
            <button
              onClick={onSwitchToRecover}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Recuperar aquí
            </button>
          </p>
          
          <p className="text-gray-600 text-sm">
            ¿No tienes una cuenta?{' '}
            <button
              onClick={onSwitchToSignUp}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Regístrate aquí
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