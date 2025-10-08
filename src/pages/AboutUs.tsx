import { useEffect, useState } from 'react';
import { storage } from '../lib/storage';
import type { SiteSettings } from '../types';

export default function AboutUs() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    setSettings(storage.getSiteSettings());
  }, []);

  if (!settings) return null;

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Build India Group</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">About Build India Group and Pledge</h2>
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-4">
            <p>
              The river Ganga starts from a glacier which melts drop by drop to form a stream. Along its path
              it is joined by several more streams to make a river. Numerous more tributaries join the river
              which empties into the sea and becomes part of an ocean. The origin of our civil society
              organization Build India Group has a similar story.
            </p>
            <p>
              It started with two lawyers Biraja Mahapatra and Nishant Datta, of the Delhi High Court. They
              were joined by a group of journalists Sudha Passi, Gautam Basu, Avtar Nehru; lawyers Shanmuga
              Patro, Kiran Patra and an HR Professional Nabajyoti Das, to discuss various issues concerning
              the country in 2007 and 2008. The organization was registered as a society in 2008.
            </p>
            <p>
              During the period, Mahapatra, whose brainchild BIG was, authored a book "My Call: For the
              greater glory of this country" in 2008. It contained a citizen's pledge, which in English is as
              follows:
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
              <p className="italic text-lg font-medium">
                We the people of India today Do solemnly pledge ourselves To the service of our nation With
                honesty, sincerity and commitment; Always keeping our nation's interest paramount In all that
                we think, do, or say For the greater glory of this land.
              </p>
            </div>
            <p>
              The pledge was put to test in a private school in East Delhi by its principal Pradosh K Debi
              with students writing and reciting the same as part of their Republic Day celebration.
              Encouraged by the electrifying impact of this programme, it was decided to get the pledge
              translated in all official languages of the country and also take it to other educational
              institutions who were receptive to the idea.
            </p>
            <p>
              The pledge was subsequently drafted in 14 official languages apart from English ensuring
              uniformity in content. These were Sanskrit, Urdu, Hindi, Assamiya, Bengali, Gujarati, Kannada,
              Kashmiri, Malayalam, Marathi, Odia, Punjabi, Tamil, and Telugu. This monumental work was
              accomplished with the unstinting support of dedicated citizens including former spokesperson of
              the Government of India, Dr Umakanta Mishra, and many other distinguished writers, journalists,
              and advocates.
            </p>
            <p>
              Eventually the pledge, in 15 languages, was adopted by a large number of educational
              institutions across the country in the format of a pledge festival on the third Saturday of
              January every year. In view of challenging weather conditions for holding such programmes in the
              northern and northeastern parts of the country, it was decided in 2012, to celebrate the pledge
              festival on November 26 considering its significance that people of this country became its
              owners on this day in 1949.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">The Pledge Festival Format</h2>
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-4">
            <p>
              The format of the pledge festival evolved over the years. Students, as a matter of exercise,
              would write the pledge in their mother tongue and recite the pledge in unison in their
              educational institutions on November 26 and kept it as a token of their commitment to the
              country.
            </p>
            <p>
              In 2015, November last week, when Parliament was offering tributes to Dr B R Ambedkar as part of
              the Constitution Day programme, former Rajya Sabha MP A V Swamy brought to the notice of the
              government the exercise being undertaken by the Build India Group across the country. Thereafter,
              Prime Minister, Sh Narendra Modi, constituted a cabinet committee comprising three ministers to
              decide the modicum of this festival.
            </p>
            <p>
              Thus, officially, the Constitution Day celebrations with fundamental duties as the theme started
              in 2016. The method is easy. All students may write the pledge preferably in their
              mother-tongue, obtain signatures of their parents on the document of pledge and bring the same
              to their educational institutions on November 26. They may then recite the pledge in unison as a
              part of the Constitution Day celebrations which can include essays, debates and cultural
              programme on fundamental duties as the theme.
            </p>
            <p>
              Meanwhile the pledge has already been drafted in all official languages of India. Now the
              citizen's pledge in all 22 official languages is readily available as the first instrument to
              unite all Indians into one indivisible Nation.
            </p>
          </div>
        </div>

        {settings.founderMessage && (
          <div className="bg-gradient-to-r from-green-50 to-beige-50 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Message from Founder</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Biraja Mahapatra</h3>
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed whitespace-pre-line">
              {settings.founderMessage}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
