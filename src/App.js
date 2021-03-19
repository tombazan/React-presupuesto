import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {
  //localStorage
  

  //Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [ gasto, guardarGasto ] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);
  

  //useEffect que actualiza el restante
  useEffect(() => {
    if(creargasto){
      //Agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);

      //Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;

      guardarRestante(JSON.parse(presupuestoRestante));
      //Resetear a false
      guardarCrearGasto(false);

    }
  }, [gasto, creargasto, gastos, restante]);

  //Eliminar el gasto
  const eliminarGasto = gastoBorrar => {
    //Eliminar el Gasto
    const gastoEliminado = gastos.filter(gasto => gasto.id !== gastoBorrar.id);
    guardarGastos(gastoEliminado);

    //Actualizar el restante
    const actualizarRestante = restante + gastoBorrar.cantidad;
    guardarRestante(JSON.parse(actualizarRestante));
  }


  return (
    <div className="container">
      <header>
        <h1>Gasto Mensual</h1>

        <div className="contenido-principal contenido">

          {mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
            ) : (
              <div className="row">
                <div className="one-half column">
                
                  <Formulario 
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>

                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                    eliminarGasto={eliminarGasto}
                  />

                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )}
        </div>
      </header>
    </div>
  );
}

export default App;
