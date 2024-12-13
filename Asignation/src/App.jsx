import React, { useState } from 'react';
import { initialCases, initialUsers } from './data/datos';
import CaseManager from './components/CaseManager';
import UserManager from './components/UserManajer';
import AssignedCasesManager from './components/AsignedCasesManager';

const App = () => {
  const [cases, setCases] = useState(initialCases);
  const [users, setUsers] = useState(initialUsers);
  const [assignedCases, setAssignedCases] = useState([]);

  const logAssignments = (updatedUsers) => {
    console.log("Assigned cases:");
    updatedUsers.forEach(user => {
      console.log({
        id: user.id,
        idCasosAsignados: user.idCasosAsignados
      });
    });
  };

  const assignCasesEqually = () => {
    const MAX_CASES_PER_USER = 5;
    const updatedUsers = users.map(user => ({ ...user, idCasosAsignados: [] }));

    let unassignedCases = [...cases];

    updatedUsers.forEach(user => {
      user.idCasosAsignados = unassignedCases
        .slice(0, MAX_CASES_PER_USER)
        .map(caso => caso.id);

      unassignedCases = unassignedCases.slice(MAX_CASES_PER_USER);
    });

    const updatedCases = cases.map(caso => {
      const assignedUser = updatedUsers.find(user => user.idCasosAsignados.includes(caso.id));
      return assignedUser ? { ...caso, idUsuario: assignedUser.id } : caso;
    });

    setUsers(updatedUsers);
    setCases(updatedCases);
    logAssignments(updatedUsers);
  };

  const assignCasesTotally = () => {
    const MAX_CASES_PER_USER = 5;
    const updatedUsers = users.map(user => ({ ...user, idCasosAsignados: [] }));

    let unassignedCases = [...cases];

    updatedUsers.forEach(user => {
      user.idCasosAsignados = unassignedCases
        .slice(0, MAX_CASES_PER_USER)
        .map(caso => caso.id);

      unassignedCases = unassignedCases.slice(MAX_CASES_PER_USER);
    });

    unassignedCases.forEach(caso => {
      const randomUser = updatedUsers[Math.floor(Math.random() * updatedUsers.length)];
      randomUser.idCasosAsignados.push(caso.id);
    });

    const updatedCases = cases.map(caso => {
      const assignedUser = updatedUsers.find(user => user.idCasosAsignados.includes(caso.id));
      return assignedUser ? { ...caso, idUsuario: assignedUser.id } : caso;
    });

    setUsers(updatedUsers);
    setCases(updatedCases);
    logAssignments(updatedUsers);
  };

  const abortAssignment = () => {
    setCases(cases.map(caso => ({ ...caso, idUsuario: null })));
    setUsers(users.map(user => ({ ...user, idCasosAsignados: [] })));
    setAssignedCases([]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Casos y Usuarios</h1>
      <div className="flex space-x-4">
        <CaseManager cases={cases} users={users} setCases={setCases} setAssignedCases={setAssignedCases} />
        <UserManager users={users} />
      </div>
      <AssignedCasesManager assignedCases={assignedCases} />
      <div className="mt-4 space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={assignCasesEqually}
        >
          Autorizar Asignación Igualitaria
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={assignCasesTotally}
        >
          Asignar Casos Totales
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={abortAssignment}
        >
          Abortar
        </button>
      </div>
    </div>
  );
};

export default App;

