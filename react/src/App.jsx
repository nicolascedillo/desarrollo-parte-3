import { useState, useEffect } from 'react'
import './App.css'
import icono from './assets/react-icon.webp'
import { getUsers } from './services/usuariosAPI';


function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargar() {

      try {

        const data = await getUsers();
        setUsuarios(data);

      } catch (e) {
        setError(e.message);

      } finally {
        setCargando(false);
      }
    }
    cargar();
  }, []);

  return (
    <>
      <header>
        <img src={icono} alt="logo-react"/>
        <div>
          <h1>React</h1>
          <p>Nicolás Cedillo</p>
        </div>
      </header>
      
      {cargando && (
        <p>Cargando</p>
      )}

      {error && (
        <p>Error</p>
      )}

      {!cargando && !error && (
        usuarios.map(u => <p key={u.id}>{u.name}</p>)
      )}


    </>
  )
}

export default App
