import { useEffect, useState } from 'react';
import { storage } from '../lib/storage';
import type { Program } from '../types';

export default function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    setPrograms(storage.getPrograms());
  }, []);

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Programs</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Build India Group conducts various programs throughout the year to engage young minds with
            the principles of fundamental duties as enshrined in Article 51A of the Constitution of India.
            These programs include debates, discussions, essays, and cultural activities centered on themes
            such as duties toward fellow humans, animals, trees, and the environment.
          </p>
        </div>

        {programs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                {program.imageUrl && (
                  <img
                    src={program.imageUrl}
                    alt={program.title}
                    className="w-full h-56 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">{program.title}</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">{program.description}</p>
                  {program.link && (
                    <a
                      href={program.link}
                      className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Program information will be updated soon.</p>
          </div>
        )}

        <div className="mt-12 bg-green-50 border-l-4 border-green-600 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Join Our Programs</h3>
          <p className="text-gray-800">
            If your educational institution is interested in participating in our programs or hosting a
            pledge festival, please reach out to us through our contact page. Together, let's cultivate
            good citizenry for a healthy nation.
          </p>
        </div>
      </div>
    </div>
  );
}
