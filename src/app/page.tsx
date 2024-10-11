import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      <section className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">
          Bienvenido a Testing Next.jx 14 SSR
        </h2>
        <p className="text-lg mb-6">
          Explora las increíbles características que ofrecemos.
        </p>
        <a
          href="#"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
        >
          Comienza Ahora
        </a>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link
          href="/users"
          className="bg-white p-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-gray-100 transition-all"
          aria-label="Usuarios"
        >
          <div>
            <h3 className="text-3xl font-bold mb-4">Usuarios</h3>
            <p>Usuarios registrados en la plataforma.</p>
          </div>
        </Link>
        <Link
          href="/posts"
          className="bg-white p-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-gray-100 transition-all"
          aria-label="Posts"
        >
          <div>
            <h3 className="text-3xl font-bold mb-4">Publicaciones</h3>
            <p>Publicaciones de los usuarios.</p>
          </div>
        </Link>
        <Link
          href="/albums"
          className="bg-white p-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-gray-100 transition-all"
          aria-label="Álbumes"
        >
          <div>
            <h3 className="text-3xl font-bold mb-4">Álbumes</h3>
            <p>Álbum de fotos.</p>
          </div>
        </Link>
      </section>
    </>
  );
}
