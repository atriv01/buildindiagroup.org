import { useState, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../lib/storage';
import type {
  SiteSettings,
  Section,
  Program,
  Initiative,
  Event,
  NewsItem,
  Contact,
  Publication,
} from '../types';

type Tab = 'settings' | 'sections' | 'programs' | 'initiatives' | 'events' | 'news' | 'contacts' | 'publications';

export default function Admin() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<Tab>('settings');

  const [siteSettings, setSiteSettings] = useState<SiteSettings>(storage.getSiteSettings());
  const [sections, setSections] = useState<Section[]>(storage.getSections());
  const [programs, setPrograms] = useState<Program[]>(storage.getPrograms());
  const [initiatives, setInitiatives] = useState<Initiative[]>(storage.getInitiatives());
  const [events, setEvents] = useState<Event[]>(storage.getEvents());
  const [news, setNews] = useState<NewsItem[]>(storage.getNews());
  const [contacts, setContacts] = useState<Contact[]>(storage.getContacts());
  const [publications, setPublications] = useState<Publication[]>(storage.getPublications());

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (storage.checkAuth(email, password)) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
    navigate('/');
  };

  const saveSiteSettings = () => {
    storage.setSiteSettings(siteSettings);
    alert('Settings saved successfully!');
  };

  const saveSections = () => {
    storage.setSections(sections);
    alert('Sections saved successfully!');
  };

  const addSection = () => {
    const newSection: Section = {
      id: Date.now().toString(),
      title: 'New Section',
      content: 'Section content',
      order: sections.length + 1,
    };
    setSections([...sections, newSection]);
  };

  const deleteSection = (id: string) => {
    setSections(sections.filter((s) => s.id !== id));
  };

  const savePrograms = () => {
    storage.setPrograms(programs);
    alert('Programs saved successfully!');
  };

  const addProgram = () => {
    const newProgram: Program = {
      id: Date.now().toString(),
      title: 'New Program',
      description: 'Program description',
      imageUrl: '',
      link: '',
    };
    setPrograms([...programs, newProgram]);
  };

  const deleteProgram = (id: string) => {
    setPrograms(programs.filter((p) => p.id !== id));
  };

  const saveInitiatives = () => {
    storage.setInitiatives(initiatives);
    alert('Initiatives saved successfully!');
  };

  const addInitiative = () => {
    const newInitiative: Initiative = {
      id: Date.now().toString(),
      name: 'New Initiative',
      description: 'Initiative description',
      imageUrl: '',
      category: 'other',
    };
    setInitiatives([...initiatives, newInitiative]);
  };

  const deleteInitiative = (id: string) => {
    setInitiatives(initiatives.filter((i) => i.id !== id));
  };

  const saveEvents = () => {
    storage.setEvents(events);
    alert('Events saved successfully!');
  };

  const addEvent = () => {
    const newEvent: Event = {
      id: Date.now().toString(),
      title: 'New Event',
      date: new Date().toISOString().split('T')[0],
      location: 'Location',
      description: 'Event description',
      imageUrl: '',
    };
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (id: string) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  const saveNews = () => {
    storage.setNews(news);
    alert('News saved successfully!');
  };

  const addNews = () => {
    const newNews: NewsItem = {
      id: Date.now().toString(),
      title: 'New Article',
      excerpt: 'Brief excerpt',
      content: 'Full article content',
      date: new Date().toISOString(),
      imageUrl: '',
      type: 'news' as const,
    };
    setNews([...news, newNews]);
  };

  const deleteNews = (id: string) => {
    setNews(news.filter((n) => n.id !== id));
  };

  const deleteContact = (id: string) => {
    const updated = contacts.filter((c) => c.id !== id);
    setContacts(updated);
    storage.setContacts(updated);
  };

  const savePublications = () => {
    storage.setPublications(publications);
    alert('Publications saved successfully!');
  };

  const addPublication = () => {
    const newPub: Publication = {
      id: Date.now().toString(),
      title: 'New Publication',
      description: 'Description',
      fileUrl: '',
      date: new Date().toISOString(),
    };
    setPublications([...publications, newPub]);
  };

  const deletePublication = (id: string) => {
    setPublications(publications.filter((p) => p.id !== id));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="border-b">
            <nav className="flex overflow-x-auto">
              {(['settings', 'sections', 'programs', 'initiatives', 'events', 'news', 'contacts', 'publications'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-medium capitalize whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-b-2 border-orange-600 text-orange-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'settings' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Site Settings</h2>
                <div>
                  <label className="block text-sm font-medium mb-1">Site Title</label>
                  <input
                    type="text"
                    value={siteSettings.title}
                    onChange={(e) => setSiteSettings({ ...siteSettings, title: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Tagline</label>
                  <input
                    type="text"
                    value={siteSettings.tagline}
                    onChange={(e) => setSiteSettings({ ...siteSettings, tagline: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Logo URL</label>
                  <input
                    type="text"
                    value={siteSettings.logoUrl}
                    onChange={(e) => setSiteSettings({ ...siteSettings, logoUrl: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Hero Title</label>
                  <input
                    type="text"
                    value={siteSettings.heroTitle}
                    onChange={(e) => setSiteSettings({ ...siteSettings, heroTitle: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Hero Subtitle</label>
                  <input
                    type="text"
                    value={siteSettings.heroSubtitle}
                    onChange={(e) => setSiteSettings({ ...siteSettings, heroSubtitle: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">About Text</label>
                  <textarea
                    value={siteSettings.aboutSummary}
                    onChange={(e) => setSiteSettings({ ...siteSettings, aboutSummary: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                    rows={4}
                  />
                </div>
                <button
                  onClick={saveSiteSettings}
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
                >
                  Save Settings
                </button>
              </div>
            )}

            {activeTab === 'sections' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Content Sections</h2>
                  <button
                    onClick={addSection}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                  >
                    Add Section
                  </button>
                </div>
                {sections.map((section, index) => (
                  <div key={section.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Section {index + 1}</h3>
                      <button
                        onClick={() => deleteSection(section.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Title"
                      value={section.title}
                      onChange={(e) => {
                        const updated = [...sections];
                        updated[index].title = e.target.value;
                        setSections(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <textarea
                      placeholder="Content"
                      value={section.content}
                      onChange={(e) => {
                        const updated = [...sections];
                        updated[index].content = e.target.value;
                        setSections(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows={3}
                    />
                    <input
                      type="number"
                      placeholder="Order"
                      value={section.order}
                      onChange={(e) => {
                        const updated = [...sections];
                        updated[index].order = parseInt(e.target.value);
                        setSections(updated);
                      }}
                      className="w-32 px-4 py-2 border rounded-lg"
                    />
                  </div>
                ))}
                <button
                  onClick={saveSections}
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
                >
                  Save Sections
                </button>
              </div>
            )}

            {activeTab === 'programs' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Programs</h2>
                  <button
                    onClick={addProgram}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                  >
                    Add Program
                  </button>
                </div>
                {programs.map((program, index) => (
                  <div key={program.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Program {index + 1}</h3>
                      <button
                        onClick={() => deleteProgram(program.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Title"
                      value={program.title}
                      onChange={(e) => {
                        const updated = [...programs];
                        updated[index].title = e.target.value;
                        setPrograms(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <textarea
                      placeholder="Description"
                      value={program.description}
                      onChange={(e) => {
                        const updated = [...programs];
                        updated[index].description = e.target.value;
                        setPrograms(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows={2}
                    />
                    <input
                      type="text"
                      placeholder="Image URL"
                      value={program.imageUrl}
                      onChange={(e) => {
                        const updated = [...programs];
                        updated[index].imageUrl = e.target.value;
                        setPrograms(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="Link"
                      value={program.link}
                      onChange={(e) => {
                        const updated = [...programs];
                        updated[index].link = e.target.value;
                        setPrograms(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                ))}
                <button
                  onClick={savePrograms}
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
                >
                  Save Programs
                </button>
              </div>
            )}

            {activeTab === 'initiatives' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Initiatives</h2>
                  <button
                    onClick={addInitiative}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                  >
                    Add Initiative
                  </button>
                </div>
                {initiatives.map((initiative, index) => (
                  <div key={initiative.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Initiative {index + 1}</h3>
                      <button
                        onClick={() => deleteInitiative(initiative.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Name"
                      value={initiative.name}
                      onChange={(e) => {
                        const updated = [...initiatives];
                        updated[index].name = e.target.value;
                        setInitiatives(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <textarea
                      placeholder="Description"
                      value={initiative.description}
                      onChange={(e) => {
                        const updated = [...initiatives];
                        updated[index].description = e.target.value;
                        setInitiatives(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows={2}
                    />
                    <input
                      type="text"
                      placeholder="Image URL"
                      value={initiative.imageUrl}
                      onChange={(e) => {
                        const updated = [...initiatives];
                        updated[index].imageUrl = e.target.value;
                        setInitiatives(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <select
                      value={initiative.category}
                      onChange={(e) => {
                        const updated = [...initiatives];
                        updated[index].category = e.target.value as Initiative['category'];
                        setInitiatives(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                    >
                      <option value="haribol">Haribol</option>
                      <option value="aikyatan">Aikyatan</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                ))}
                <button
                  onClick={saveInitiatives}
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
                >
                  Save Initiatives
                </button>
              </div>
            )}

            {activeTab === 'events' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Events</h2>
                  <button
                    onClick={addEvent}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                  >
                    Add Event
                  </button>
                </div>
                {events.map((event, index) => (
                  <div key={event.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Event {index + 1}</h3>
                      <button
                        onClick={() => deleteEvent(event.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Title"
                      value={event.title}
                      onChange={(e) => {
                        const updated = [...events];
                        updated[index].title = e.target.value;
                        setEvents(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <input
                      type="date"
                      value={event.date}
                      onChange={(e) => {
                        const updated = [...events];
                        updated[index].date = e.target.value;
                        setEvents(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      value={event.location}
                      onChange={(e) => {
                        const updated = [...events];
                        updated[index].location = e.target.value;
                        setEvents(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <textarea
                      placeholder="Description"
                      value={event.description}
                      onChange={(e) => {
                        const updated = [...events];
                        updated[index].description = e.target.value;
                        setEvents(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows={2}
                    />
                    <input
                      type="text"
                      placeholder="Image URL"
                      value={event.imageUrl}
                      onChange={(e) => {
                        const updated = [...events];
                        updated[index].imageUrl = e.target.value;
                        setEvents(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                ))}
                <button
                  onClick={saveEvents}
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
                >
                  Save Events
                </button>
              </div>
            )}

            {activeTab === 'news' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">News</h2>
                  <button
                    onClick={addNews}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                  >
                    Add Article
                  </button>
                </div>
                {news.map((item, index) => (
                  <div key={item.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Article {index + 1}</h3>
                      <button
                        onClick={() => deleteNews(item.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Title"
                      value={item.title}
                      onChange={(e) => {
                        const updated = [...news];
                        updated[index].title = e.target.value;
                        setNews(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <textarea
                      placeholder="Excerpt"
                      value={item.excerpt}
                      onChange={(e) => {
                        const updated = [...news];
                        updated[index].excerpt = e.target.value;
                        setNews(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows={2}
                    />
                    <textarea
                      placeholder="Full Content"
                      value={item.content}
                      onChange={(e) => {
                        const updated = [...news];
                        updated[index].content = e.target.value;
                        setNews(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows={4}
                    />
                    <input
                      type="text"
                      placeholder="Image URL"
                      value={item.imageUrl}
                      onChange={(e) => {
                        const updated = [...news];
                        updated[index].imageUrl = e.target.value;
                        setNews(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                ))}
                <button
                  onClick={saveNews}
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
                >
                  Save News
                </button>
              </div>
            )}

            {activeTab === 'contacts' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Contact Submissions</h2>
                {contacts.length > 0 ? (
                  <div className="space-y-4">
                    {contacts.map((contact) => (
                      <div key={contact.id} className="border rounded-lg p-4">
                        <div className="flex justify-between mb-2">
                          <h3 className="font-semibold">{contact.name}</h3>
                          <button
                            onClick={() => deleteContact(contact.id)}
                            className="text-red-600 hover:text-red-700 text-sm"
                          >
                            Delete
                          </button>
                        </div>
                        <p className="text-sm text-gray-600">Email: {contact.email}</p>
                        <p className="text-sm text-gray-600">Phone: {contact.phone}</p>
                        <p className="text-sm text-gray-600">Date: {new Date(contact.date).toLocaleString()}</p>
                        <p className="mt-2">{contact.message}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No contact submissions yet.</p>
                )}
              </div>
            )}

            {activeTab === 'publications' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Publications</h2>
                  <button
                    onClick={addPublication}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                  >
                    Add Publication
                  </button>
                </div>
                {publications.map((pub, index) => (
                  <div key={pub.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Publication {index + 1}</h3>
                      <button
                        onClick={() => deletePublication(pub.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Title"
                      value={pub.title}
                      onChange={(e) => {
                        const updated = [...publications];
                        updated[index].title = e.target.value;
                        setPublications(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <textarea
                      placeholder="Description"
                      value={pub.description}
                      onChange={(e) => {
                        const updated = [...publications];
                        updated[index].description = e.target.value;
                        setPublications(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows={2}
                    />
                    <input
                      type="text"
                      placeholder="File URL"
                      value={pub.fileUrl}
                      onChange={(e) => {
                        const updated = [...publications];
                        updated[index].fileUrl = e.target.value;
                        setPublications(updated);
                      }}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                ))}
                <button
                  onClick={savePublications}
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
                >
                  Save Publications
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
