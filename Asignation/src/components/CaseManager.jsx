import React, { useState, useEffect } from 'react';

const CaseManager = ({ cases, users, setCases, setAssignedCases }) => {
  const [userCases, setUserCases] = useState({});
  const [globalSelectedUser, setGlobalSelectedUser] = useState('');

  useEffect(() => {
    const initialUserCases = users.reduce((acc, user) => {
      acc[user.id] = { id: user.id, idCasosAsignados: [] };
      return acc;
    }, {});
    setUserCases(initialUserCases);
  }, [users]);

  const handleAssignCase = (caseId, selectedUser) => {
    if (!selectedUser) {
      alert('Seleccione un usuario para asignar este caso.');
      return;
    }

    const updatedCases = cases.map(caso =>
      caso.id === caseId ? { ...caso, idUsuario: selectedUser } : caso
    );

    const assignedCase = updatedCases.find(caso => caso.id === caseId);

    setCases(updatedCases.map(caso => 
      caso.id === caseId ? { ...caso, selected: false } : caso
    ));

    setAssignedCases(prev => [...prev, assignedCase]);

    setUserCases(prev => {
      const updatedUserCases = {
        ...prev,
        [selectedUser]: {
          ...prev[selectedUser],
          idCasosAsignados: [...prev[selectedUser].idCasosAsignados, caseId]
        }
      };
      console.log(updatedUserCases[selectedUser]);
      return updatedUserCases;
    });
  };

  const handleCheckboxChange = (caseId) => {
    setCases(prevCases => 
      prevCases.map(caso => 
        caso.id === caseId ? { ...caso, selected: !caso.selected } : caso
      )
    );
    // console.log("Casos seleccionados:", cases.filter(caso => caso.selected).map(caso => caso.id));
  };

  const handleGlobalAssign = () => {
    if (!globalSelectedUser) {
      alert('Seleccione un usuario para asignar los casos.');
      return;
    }

    const selectedCases = cases.filter(caso => caso.selected);
    const updatedCases = cases.map(caso =>
      caso.selected ? { ...caso, idUsuario: globalSelectedUser, selected: false } : caso
    );

    setCases(updatedCases);
    setAssignedCases(prev => [...prev, ...selectedCases]);

    setUserCases(prev => {
      const updatedUserCases = {
        ...prev,
        [globalSelectedUser]: {
          ...prev[globalSelectedUser],
          idCasosAsignados: [
            ...prev[globalSelectedUser].idCasosAsignados,
            ...selectedCases.map(caso => caso.id)
          ]
        }
      };
      console.log(updatedUserCases[globalSelectedUser]);
      return updatedUserCases;
    });

    setGlobalSelectedUser('');
  };

  return (
    <div className="w-1/2">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold">Casos</h2>
        {cases.some(caso => caso.selected) && (
          <div className="flex items-center">
            <select
              className="border border-gray-300 rounded px-2 py-1"
              value={globalSelectedUser}
              onChange={e => setGlobalSelectedUser(e.target.value)}
            >
              <option value="">Seleccionar usuario</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.id}
                </option>
              ))}
            </select>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 ml-2"
              onClick={handleGlobalAssign}
            >
              Asignar seleccionados
            </button>
          </div>
        )}
      </div>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 px-4 py-2">Seleccionar</th>
            <th className="border border-gray-200 px-4 py-2">ID Caso</th>
            <th className="border border-gray-200 px-4 py-2">Usuario</th>
          </tr>
        </thead>
        <tbody>
          {cases.map(caso => {
            const [selectedUser, setSelectedUser] = useState('');

            return (
              <tr key={caso.id}>
                <td className="border border-gray-200 px-4 py-2">
                  <input
                    type="checkbox"
                    checked={caso.selected || false}
                    onChange={() => handleCheckboxChange(caso.id)}
                  />
                </td>
                <td className="border border-gray-200 px-4 py-2">{caso.id}</td>
                <td className="border border-gray-200 px-4 py-2">
                  {caso.idUsuario ? (
                    <span>{caso.idUsuario}</span>
                  ) : (
                    <div className="flex items-center">
                      <select
                        className="border border-gray-300 rounded px-2 py-1"
                        value={selectedUser}
                        onChange={e => setSelectedUser(e.target.value)}
                      >
                        <option value="">Seleccionar usuario</option>
                        {users.map(user => (
                          <option key={user.id} value={user.id}>
                            {user.id}
                          </option>
                        ))}
                      </select>
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 ml-2"
                        onClick={() => handleAssignCase(caso.id, selectedUser)}
                      >
                        Asignar
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CaseManager;

