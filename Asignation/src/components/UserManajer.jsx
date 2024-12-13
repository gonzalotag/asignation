import React from 'react';

const UserManager = ({ users }) => {
  return (
    <div className="w-1/2">
      <h2 className="text-xl font-bold mb-2">Usuarios</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 px-4 py-2">ID Usuario</th>
            <th className="border border-gray-200 px-4 py-2">Casos Asignados</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="border border-gray-200 px-4 py-2">{user.id}</td>
              <td className="border border-gray-200 px-4 py-2">
                {user.idCasosAsignados.join(', ') || 'Sin casos'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManager;
