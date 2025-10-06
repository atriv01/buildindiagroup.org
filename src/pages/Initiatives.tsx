import { useEffect, useState } from 'react';
import { storage } from '../lib/storage';
import type { Initiative } from '../types';

export default function Initiatives() {
  const [initiatives, setInitiatives] = useState<Initiative[]>([]);

  useEffect(() => {
    setInitiatives(storage.getInitiatives());
  }, []);

  const haribolInitiatives = initiatives.filter((i) => i.category === 'haribol');
  const aikyatanInitiatives = initiatives.filter((i) => i.category === 'aikyatan');
  const otherInitiatives = initiatives.filter((i) => i.category === 'other');

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Initiatives</h1>

        {haribolInitiatives.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-orange-600 mb-6">Haribol</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {haribolInitiatives.map((initiative) => (
                <div key={initiative.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {initiative.imageUrl && (
                    <img
                      src={initiative.imageUrl}
                      alt={initiative.name}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{initiative.name}</h3>
                    <p className="text-gray-600">{initiative.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {aikyatanInitiatives.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Aikyatan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aikyatanInitiatives.map((initiative) => (
                <div key={initiative.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {initiative.imageUrl && (
                    <img
                      src={initiative.imageUrl}
                      alt={initiative.name}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{initiative.name}</h3>
                    <p className="text-gray-600">{initiative.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {otherInitiatives.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-700 mb-6">Other Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherInitiatives.map((initiative) => (
                <div key={initiative.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {initiative.imageUrl && (
                    <img
                      src={initiative.imageUrl}
                      alt={initiative.name}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{initiative.name}</h3>
                    <p className="text-gray-600">{initiative.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {initiatives.length === 0 && (
          <p className="text-gray-600 text-center">No initiatives available at the moment.</p>
        )}
      </div>
    </div>
  );
}
