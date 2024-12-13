import React from 'react';

const AssignedCasesManager = ({ assignedCases }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Casos Asignados</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 px-4 py-2">ID Caso</th>
            <th className="border border-gray-200 px-4 py-2">Usuario</th>
          </tr>
        </thead>
        <tbody>
          {assignedCases.map(caso => (
            <tr key={caso.id}>
              <td className="border border-gray-200 px-4 py-2">{caso.id}</td>
              <td className="border border-gray-200 px-4 py-2">{caso.idUsuario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignedCasesManager;