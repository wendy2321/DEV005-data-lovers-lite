import { ordenarDatos, filtrarDatos } from '../src/data.js';
import{dataGeneral} from './mockData.js';

describe('ordenarDatos', () => {
  it('is a function', () => {
    expect(typeof ordenarDatos).toBe('function');
  });

  it('returns `dataOrdenada`', () => {
    const resultadoOrden = [
      {
        "num": "001",
        "name": "bulbasaur",
        "type": [
          "fire",
          "poison"
        ],
      },
      {
        "num": "002",
        "name": "ivysaur",
        "type": [
          "grass",
          "poison"
        ],
      },{
        "num": "098",
        "name": "pikachu",
        "type": [
          "grass",
          "poison"
        ],
      }, {
        "num": "003",
        "name": "venusaur",
        "type": [
          "poison"
        ],
      },
      {
        "num": "004",
        "name": "venusaur",
        "type": [
          "poison"
        ],
      },
    
    
    ]
    expect(ordenarDatos(dataGeneral)).toEqual(resultadoOrden);
  });
});


describe('filtrarDatos', () => {
  it('is a function', () => {
    expect(typeof filtrarDatos).toBe('function');
  });

  it('returns `dataFiltrada`', () => {
    const resultadoFiltrar=[
      {
        "num": "001",
        "name": "bulbasaur",
        "type": [
          "fire",
          "poison"
        ],
      }
    ]
    expect(filtrarDatos(dataGeneral, 'fire')).toEqual(resultadoFiltrar);
  });
});
