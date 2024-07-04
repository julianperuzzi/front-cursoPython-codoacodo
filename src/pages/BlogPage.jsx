import React, { useState, useEffect } from 'react';

const BlogPage = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'xptaXYFki53aBag76QaOPbDbJbjCaKRCQ5hfg4Aq';

  const fetchApodData = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setApodData(data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApodData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-8">Imagen Astronómica del Día (NASA APOD)</h1>
      {loading && <p>Loading...</p>}
      {error && (
        <div>
          <p>{error}</p>
          <button onClick={fetchApodData} className="bg-blue-500 text-white px-3 py-1 rounded-md mt-4 hover:bg-blue-600">
            Intentar Nuevamente
          </button>
        </div>
      )}
      {!loading && !error && apodData && (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">{apodData.title}</h2>
          {apodData.media_type === 'image' ? (
            <img src={apodData.url} alt={apodData.title} className="w-full rounded-md mb-4" />
          ) : (
            <iframe
              src={apodData.url}
              title={apodData.title}
              className="w-full rounded-md mb-4"
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
            ></iframe>
          )}
          <p className="text-gray-600">{apodData.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
