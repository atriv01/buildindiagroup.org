import { pledges } from '../data/pledges';

export default function Pledges() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The Book of Pledge</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The citizen's pledge in all 22 official languages of India - the first instrument to unite all Indians into one indivisible Nation.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Our Pledge</h2>
          <p className="text-lg text-gray-800 italic leading-relaxed">
            "We the people of India today do solemnly pledge ourselves to the service of our nation;
            with honesty, sincerity and commitment always keeping our nation's interest paramount
            in all that we think do or say for the greater glory of this land."
          </p>
        </div>

        <div className="space-y-6">
          {pledges.map((pledge, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-green-700 mb-3">{pledge.language}</h3>
              <p className="text-gray-800 leading-relaxed">{pledge.text}</p>
              {pledge.transliteration && (
                <p className="text-gray-600 mt-3 italic">{pledge.transliteration}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-50 border-l-4 border-green-600 p-6">
          <p className="text-gray-800">
            These transliterations not only epitomise the country's language diversity but also manifest
            its underlying spirit of unity. Now the citizen's pledge in all official languages is readily
            available as the first instrument to unite all Indians into one indivisible Nation.
          </p>
        </div>
      </div>
    </div>
  );
}
