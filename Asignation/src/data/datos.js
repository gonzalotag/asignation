export const initialCases = Array.from({ length: 30 }, (_, i) => ({
    id: `case-${i + 1}`,
    idUsuario: null,
  }));
  
  export const initialUsers = Array.from({ length: 4 }, (_, i) => ({
    id: `user-${i + 1}`,
    idCasosAsignados: [],
  }));
  