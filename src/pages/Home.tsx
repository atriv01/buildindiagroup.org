import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Newspaper, BookOpen, Users } from 'lucide-react';
import { storage } from '../lib/storage';
import type { SiteSettings, Initiative, NewsItem, Publication } from '../types';

export default function Home() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [initiatives, setInitiatives] = useState<Initiative[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    setSettings(storage.getSiteSettings());
    setInitiatives(storage.getInitiatives());
    setNews(storage.getNews().slice(0, 3));
    setPublications(storage.getPublications().slice(0, 3));
  }, []);

  if (!settings) return null;

  const haribolInitiatives = initiatives.filter((i) => i.category === 'haribol');
  const aikyatanInitiatives = initiatives.filter((i) => i.category === 'aikyatan');

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{settings.heroTitle}</h1>
          <p className="text-2xl md:text-3xl mb-8">{settings.heroSubtitle}</p>
          <div className="flex justify-center gap-4">
            <Link
              to="/about"
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
            <Link
              to="/pledges"
              className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors border-2 border-white"
            >
              View Pledges
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {settings.aboutSummary || 'Build India Group is an NGO building good citizenry consciousness amongst the young across the country. Our objective is to foster good citizenry for a healthy nation with Article 51A of the Constitution dealing with fundamental duties as the foundation.'}
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Pledge</h3>
              <p className="text-gray-800 italic leading-relaxed">
                "We the people of India today do solemnly pledge ourselves to the service of our nation;
                with honesty, sincerity and commitment always keeping our nation's interest paramount in
                all that we think do or say for the greater glory of this land."
              </p>
              <Link to="/pledges" className="inline-block mt-4 text-green-700 font-semibold hover:text-green-900">
                View in all 22 languages →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {haribolInitiatives.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-green-700 mb-8">Haribol Initiative</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {haribolInitiatives.map((initiative) => (
                <div key={initiative.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {initiative.imageUrl && (
                    <img
                      src={initiative.imageUrl}
                      alt={initiative.name}
                      className="w-full h-64 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3">{initiative.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{initiative.description}</p>
                    {initiative.details && (
                      <p className="text-gray-600 mt-4">{initiative.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {aikyatanInitiatives.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-blue-700 mb-8">Aikyatan Initiative</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aikyatanInitiatives.map((initiative) => (
                <div key={initiative.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {initiative.imageUrl && (
                    <img
                      src={initiative.imageUrl}
                      alt={initiative.name}
                      className="w-full h-64 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3">{initiative.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{initiative.description}</p>
                    {initiative.details && (
                      <p className="text-gray-600 mt-4">{initiative.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {news.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900">Latest News & Updates</h2>
              <Link to="/news" className="text-green-700 font-semibold hover:text-green-900">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((item) => (
                <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  {item.imageUrl && (
                    <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Newspaper className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Events</h3>
              <p className="text-gray-700 mb-4">
                Join us for Constitution Day celebrations on November 26 and other events throughout the year.
              </p>
              <Link to="/events" className="text-green-700 font-semibold hover:text-green-900">
                View Events →
              </Link>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Publications</h3>
              <p className="text-gray-700 mb-4">
                Access our publications, including "My Call: For the greater glory of this country".
              </p>
              {publications.length > 0 && (
                <div className="mt-4 space-y-2">
                  {publications.map((pub) => (
                    <div key={pub.id} className="text-left">
                      <a
                        href={pub.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-700 hover:text-green-900 text-sm"
                      >
                        {pub.title}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <p className="text-gray-700 mb-4">
                Reach out to learn how you can participate in our initiatives and programs.
              </p>
              <Link to="/contact" className="text-green-700 font-semibold hover:text-green-900">
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <p className="text-xl mb-8">
            Let us together cultivate good citizenry for a healthy nation
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
