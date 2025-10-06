import { useEffect, useState } from 'react';
import { storage } from '../lib/storage';
import type { SiteSettings, Section, Program } from '../types';

export default function Home() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    setSettings(storage.getSiteSettings());
    setSections(storage.getSections().sort((a, b) => a.order - b.order));
    setPrograms(storage.getPrograms());
  }, []);

  if (!settings) return null;

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">{settings.heroTitle}</h1>
          <p className="text-xl">{settings.heroSubtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Us</h2>
          <p className="text-lg text-gray-700">{settings.aboutText}</p>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.id} className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
            <p className="text-lg text-gray-700">{section.content}</p>
          </div>
        </section>
      ))}

      {programs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program) => (
                <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {program.imageUrl && (
                    <img
                      src={program.imageUrl}
                      alt={program.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    {program.link && (
                      <a
                        href={program.link}
                        className="text-orange-600 hover:text-orange-700 font-medium"
                      >
                        Learn More →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
