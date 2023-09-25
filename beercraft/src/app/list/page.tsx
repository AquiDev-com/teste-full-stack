'use client';
import { useState, useEffect } from 'react';

export default function List() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchBeers(currentPage);
  }, [currentPage]);

  const fetchBeers = async (page: any) => {
    const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`);
    const data = await response.json();
    setProducts(data);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main
      className='flex flex-col justify-center items-center'
      style={{
        backgroundImage: 'url("/glass.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-20 '>
        {products.map((beer: any) => (
          <div
            key={beer.id}
            className='w-300 p-4 flex flex-col gap-rounded cursor-pointer bg-dark-brown opacity-90rounded-md'
          >
            <img src={beer.image_url} alt={beer.name} width={66} height={96} />
            <h2 className='text-xl font-semibold'>{beer.name}</h2>
            <p className='text-gray-700'>{beer.tagline}</p>
            <p className='text-gray-300 mb-4'>
              {beer.description.length > 100
                ? `${beer.description.slice(0, 100)}...`
                : beer.description}
            </p>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-4 w-full bg-dark-brown'>
        <button
          className='m-2 p-2 rounded-full text-lg bg-dark-green text-white hover:bg-green'
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          className='m-2 p-2 rounded-full text-lg bg-dark-green text-white hover:bg-green'
          onClick={nextPage}
        >
          Next Page
        </button>
      </div>
    </main>
  );
}
