import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-dark-brown fixed w-full'>
      <section className='max-w-6xl mx-auto px-4'>
        <nav className='flex justify-between items-center  h-16 '>
          <Link href='/' className='text-2xl text-yellow'>
            BeerCraft
          </Link>
          <ul className='flex gap-3'>
            <li>
              <Link
                href='/'
                className='p-2 rounded-full text-lg bg-dark-green text-white hover:bg-green'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/login'
                className='p-2 rounded-full text-lg bg-dark-green text-white hover:bg-green'
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
