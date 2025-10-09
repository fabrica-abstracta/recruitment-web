'use client';
import { useState } from 'react';
import SignInModal from '../modals/sign-in';
import SignUpModal from '../modals/sign-up';
import ResetModal from '../modals/reset';
import RecoverModal from '../modals/recover';

export default function AuthButtons() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [showRecover, setShowRecover] = useState(false);

  const openSignIn = () => {
    closeAllModals();
    setShowSignIn(true);
  };

  const openSignUp = () => {
    closeAllModals();
    setShowSignUp(true);
  };

  const openReset = () => {
    closeAllModals();
    setShowReset(true);
  };

  const openRecover = () => {
    closeAllModals();
    setShowRecover(true);
  };

  const closeAllModals = () => {
    setShowSignIn(false);
    setShowSignUp(false);
    setShowReset(false);
    setShowRecover(false);
  };

  return (
    <>
      <div className="hidden md:flex items-center space-x-4">
        <button
          onClick={openSignIn}
          className="text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg transition font-medium"
        >
          Iniciar Sesión
        </button>
        <button
          onClick={openSignUp}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition font-medium"
        >
          Registrarse
        </button>
      </div>

      {showSignIn && (
        <SignInModal
          onClose={closeAllModals}
          onSwitchToSignUp={openSignUp}
          onSwitchToRecover={openRecover}
        />
      )}
      {showSignUp && (
        <SignUpModal
          onClose={closeAllModals}
          onSwitchToSignIn={openSignIn}
        />
      )}
      {showReset && (
        <ResetModal
          onClose={closeAllModals}
          onSwitchToSignIn={openSignIn}
        />
      )}
      {showRecover && (
        <RecoverModal
          onClose={closeAllModals}
          onSwitchToSignIn={openSignIn}
          onSwitchToReset={openReset}
        />
      )}
    </>
  );
}