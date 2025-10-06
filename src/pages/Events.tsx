import { useEffect, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { storage } from '../lib/storage';
import type { Event } from '../types';

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents(storage.getEvents());
  }, []);

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Upcoming Events</h1>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {event.imageUrl && (
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No upcoming events at the moment.</p>
        )}
      </div>
    </div>
  );
}
