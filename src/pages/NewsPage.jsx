import React, { useState, useEffect } from 'react';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  //console.log(apiKey);

  const fetchArticles = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2024-07-03&to=2024-07-03&sortBy=popularity&apiKey=843caee978774e199d03d3cd6345075f');
      console.log('Response:', response);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log('Data:', data);
      // Filtrar los artículos que tienen imagen
      const articlesWithImages = data.articles.filter(article => article.urlToImage);
      // Limitar a 9 artículos
      const limitedArticles = articlesWithImages.slice(0, 9);
      setArticles(limitedArticles);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setError('Error fetching data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Noticias sobre Apple</h1>
      {loading && <p>Loading...</p>}
      {error && (
        <div>
          <p>{error}</p>
          <button onClick={fetchArticles} className="bg-blue-500 text-white px-3 py-1 rounded-md mt-4 hover:bg-blue-600">
            Intentar Nuevamente
          </button>
        </div>
      )}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover mb-2 rounded-md" />
              )}
              <p className="text-gray-600">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="block mt-2 text-sm font-semibold text-blue-500 hover:text-blue-600">Leer más</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsPage;
