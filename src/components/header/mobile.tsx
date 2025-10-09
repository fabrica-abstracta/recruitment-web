'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [phone, setPhone] = useState('');

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  useEffect(() => {
    if (isOffcanvasOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOffcanvasOpen]);

  return (
    <>
      <button
        onClick={toggleOffcanvas}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        aria-label="Abrir menú móvil"
      >
        🟰
      </button>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black z-[999] md:hidden transition-opacity duration-300 ${isOffcanvasOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh'
        }}
        onClick={closeOffcanvas}
        aria-label="Cerrar menú móvil"
      />

      <div
        className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-xl z-[1000] md:hidden transform transition-transform duration-300 ease-in-out ${isOffcanvasOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-gray-800">Fábrica Abstracta</h1>
            </div>
            <button
              onClick={closeOffcanvas}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Cerrar menú"
            >

              ❌
            </button>
          </div>

          <nav className="flex-1 px-4 py-6">
            <div className="space-y-4">
              <Link
                href="/services"
                onClick={closeOffcanvas}
                className="block p-1 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition font-medium"
              >
                Servicios
              </Link>
              <Link
                href="/projects"
                onClick={closeOffcanvas}
                className="block p-1 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition font-medium"
              >
                Proyectos (SaaS)
              </Link>
            </div>
          </nav>

          <div className="p-4 border-t space-y-3">
            <label htmlFor="mobile-phone" className="sr-only">Teléfono</label>
            <input
              id="mobile-phone"
              type="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9+()\- ]/g, ''))}
              placeholder="Ej: +51 912 345 678"
              className="w-full px-4 py-3 border rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Link
              href="/contact-us"
              onClick={closeOffcanvas}
              className="w-full block text-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition font-medium"
            >
              Contactar a un asesor
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}