import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { storage } from '../lib/storage';

export default function Header() {
  const [logoUrl, setLogoUrl] = useState('');
  const [title, setTitle] = useState('Build India Group');

  useEffect(() => {
    const settings = storage.getSiteSettings();
    setLogoUrl(settings.logoUrl);
    setTitle(settings.title);
  }, []);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            {logoUrl && (
              <img src={logoUrl} alt={title} className="h-10 w-auto" />
            )}
            <span className="text-xl font-bold text-gray-900">{title}</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600">
              Home
            </Link>
            <Link to="/initiatives" className="text-gray-700 hover:text-orange-600">
              Initiatives
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-orange-600">
              Events
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-orange-600">
              News
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
