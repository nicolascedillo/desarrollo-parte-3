import './tarjetaUsuario.css'

function tarjetaUsuario({ user, estaFavorito, alAlternarFavorito }) {

    return(
        <article className="tarjeta">

            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round preview-icon"><path d="M17.925 20.056a6 6 0 0 0-11.851.001"/><circle cx="12" cy="11" r="4"/><circle cx="12" cy="12" r="10"/></svg>
            
            <div>
                <p>{user.name} - {user.id}</p>
                <p>{user.email}</p>
                <p>{user.address.city} - {user.address.street}</p>
            </div>

            <div className="lateral">

                <p>Favorito</p>

                <button
                    className={`boton-favorito${estaFavorito ? ' activo' : ''}`}
                    type="button"
                    onClick={() => alAlternarFavorito(user.id)}
                >
                </button>
            </div>
            
        </article>
    )
}

export default tarjetaUsuario