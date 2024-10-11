import { getPosts } from '@/hooks/data';

export default async function Posts() {
  const posts = await getPosts({ limit: 10 });

  return (
    <>
      <section className="space-y-6 mb-6 self-start">
        <h1 className="text-4xl font-bold">Publicaciones</h1>
        <p className="text-lg">Publicaciones de los usuarios.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-gray-100 transition-all"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">
                <strong>Identificador de usuario:</strong> {post.userId}
              </p>
              <p className="text-gray-600 mb-4">{post.body}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
