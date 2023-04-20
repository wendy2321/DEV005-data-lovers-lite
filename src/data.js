
export const ordenarDatos = (data) => {

  const dataOrdenada = data.sort((a, z) => {
    if (a.name < z.name) {
      return -1;
    }
    if (a.name > z.name) {
      return 1;
    }
    return 0;

  });

  return dataOrdenada;
};


export const filtrarDatos = (data, tipo) => {
  return data.filter(item => item.type.includes(tipo));
};