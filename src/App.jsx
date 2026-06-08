// 1. Importamos la memoria : 'useState' para recordar datos
import { useState } from "react";
import "./App.css";


function App() {
  // Zona de memoria (los ESTADOS)

  // Memoria 1 : Lo que usuario escribe en el input ahora mismo
  //             Empieza con un texto vacío
  const [textoInput, setTextoInput] = useState("");
  // Memoria 2 : La lista oficial de tareas guardadas
  //             Empieza como un arrray vacío
  const [ListaTareas, setListaTareas] = useState([]);

  // Zona lógica
  const manejarClick = () =>{
    // Seguridad: Si el input está vacío o solo tiene espacios
    if(textoInput.trim() === "") return;
    // La magia REACT: Cogemos la lista vieja y la pegamos
    setListaTareas([...ListaTareas, textoInput]);
    // Limpiamos el input dejándolo vacío para la siguiente tarea
    setTextoInput("");
  };

  const manejarTecla = (e) =>{
    if(e.key === "Enter"){
      manejarClick();
    }
  };

  // Zona visual
  return(
    <main className="contenedor-app">
      <h1>Entrenamiento de Memoria</h1>
      {/* zona de entrada de datos */}
      <div className="caja-formulario">
        <input 
          type="text" 
          placeholder="Escribe una tarea..."
          value={textoInput} // conectamos el input a la Memoria 1
          // cada pulsación de tecla actualiza la memoria
          onChange={(e)=> setTextoInput(e.target.value)}
          onKeyDown={manejarTecla}
          />
          <button onClick={manejarClick}>Añadir Tarea</button>
          </div>
          {/* zona de salida (la impresora) */}
          <ul className="caja-lista">
            {/* si la lista está vacía mostramos un mensaje amistoso */}
            {ListaTareas.length === 0 ?(
              <p className="mensaje-vacio">No hay tareas. Añade una.</p>
            ) : (
              // Usamos .map() para "fabricar" un <li> por cada tarea guardada
              ListaTareas.map((tarea, indice) => (
                <li key={indice} className="tarea-item">
                  {tarea}
                </li>
              ))
            )}
          </ul>
      
    </main>
  );

}
export default App;
