export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-center p-4 md:p-8 lg:p-12'
      style={{
        backgroundImage: 'url("/beer.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <section className='bg-dark-brown opacity-90 p-4 md:p-8 lg:p-12 rounded-lg flex flex-col justify-center items-center gap-4 py-auto text-center'>
        <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold opacity-100'>
          Are you a craft beer enthusiast?
        </h2>
        <p className='text-md md:text-lg lg:text-xl xl:text-2xl font-semibold'>
          Looking for an easy way to manage your collection of beer-related products?
        </p>
        <p className='text-md md:text-lg lg:text-xl xl:text-2xl font-semibold'>
          Want to explore a wide variety of beers from around the world?
        </p>
        <p className='text-md md:text-lg lg:text-xl xl:text-2xl font-semibold'>
          If so youre in the right place!
        </p>
      </section>
    </main>
  );
}
