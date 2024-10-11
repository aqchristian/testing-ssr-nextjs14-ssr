import { getUsers } from '../../hooks/data';

export default async function Users() {
  const users = await getUsers({ limit: 10 });

  return (
    <>
      <section className="space-y-6 mb-6 self-start">
        <h1 className="text-4xl font-bold">Usuarios</h1>
        <p className="text-lg">Usuarios registrados en la plataforma.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {users.map((user) => (
          <article
            key={user.id}
            className="bg-white p-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-gray-100 transition-all"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">{user.name}</h3>
              <p className="text-gray-600 mb-4">&#64;{user.username}</p>
              <p className="text-gray-800 mb-2">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-800 mb-2">
                <strong>Teléfono:</strong> {user.phone}
              </p>
              <p className="text-gray-800 mb-2">
                <strong>Dirección:</strong> {user.address.street},
                {user.address.suite}, {user.address.city},{user.address.zipcode}
              </p>
              <p className="text-gray-800 mb-2">
                <strong>Sitio Web:&nbsp;</strong>
                <a
                  href="http://{{ user.website }}"
                  target="_blank"
                  className="text-blue-500"
                >
                  {user.website}
                </a>
              </p>
              <p className="text-gray-800 mb-2">
                <strong>Compañía:</strong> {user.company.name}
              </p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
