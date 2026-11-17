import { useState, useEffect } from 'react'
import './App.css'
import icono from './assets/react-icon.webp'
import { getUsers } from './services/usuariosAPI';
import Tarjeta from './components/tarjetaUsuario'
import { buscarUsuario } from './utils/buscarUsuario';


function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [favoritos, setFavoritos] = useState(new Set());
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  function alternarFavorito(id) {
    setFavoritos(favoritosActuales => {
      const nuevosFavoritos = new Set(favoritosActuales);

      if (nuevosFavoritos.has(id)) {
        nuevosFavoritos.delete(id);
      } else {
        nuevosFavoritos.add(id);
      }

      return nuevosFavoritos;
    });
  }

  const usuariosFiltrados = buscarUsuario(usuarios, busqueda);

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
          <h1>Listar usuarios</h1>
          <p>Nicolás Cedillo</p>
        </div>
      </header>
      
      <main>

        <div className="lista">

          {cargando && (
            <p>Cargando</p>
          )}

          {error && (
            <p>{error}</p>
          )}

          {!cargando && !error && (

            <div className="lista">

              <div className="barra-herramientas">
                <input
                  id="buscar-usuarios"
                  type="search"
                  placeholder="Buscar por nombre"
                  value={busqueda}
                  onChange={evento => setBusqueda(evento.target.value)}
                />
                <p>
                  Favoritos: {favoritos.size}
                </p>
              </div>

              {usuariosFiltrados.length > 0 ? (
                usuariosFiltrados.map(u => (
                  <Tarjeta
                    key={u.id}
                    user={u}
                    estaFavorito={favoritos.has(u.id)}
                    alAlternarFavorito={alternarFavorito}
                  />
                ))
              ) : (
                <p className="sin-resultados">
                  No se encontraron usuarios con ese nombre.
                </p>
              )}
            </div>
          )}

        </div>


      </main>

    </>
  )
}

export default App
