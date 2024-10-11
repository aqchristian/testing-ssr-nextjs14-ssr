import { getAlbums } from '@/hooks/data';

export default async function Albums() {
  const albums = await getAlbums({ limit: 10 });
  return (
    <>
      <section className="space-y-6 mb-6 self-start w-full">
        <h1 className="text-4xl font-bold">Álbumes</h1>
        <p className="text-lg">Álbumes de fotos.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {albums.map((album) => (
          <article
            key={album.id}
            className="bg-white p-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-gray-100 transition-all"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">{album.title}</h3>
              <p className="text-gray-600 mb-4">
                <strong>Identificador del álbum:</strong> {album.id}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Identificador de usuario:</strong> {album.userId}
              </p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
