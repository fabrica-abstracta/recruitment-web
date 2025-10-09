import Link from 'next/link';
import Mobile from './mobile';
import AuthButtons from './auth';

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-4">
          <Mobile />
          <Link
            href="/"
            className="flex items-center space-x-2"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <span className="text-xl font-bold text-gray-800">Fábrica Abstracta</span>
          </Link>
        </div>

        <AuthButtons />

        <div className="md:hidden w-10"></div>
      </div>
    </header>
  );
}