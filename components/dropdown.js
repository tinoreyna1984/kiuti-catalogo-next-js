export default function Dropdown({ modelos, handleModelo }) {
    return (
        <div className="row py-3">
            <div className="dropdown">
                <button
                    id="dropdown-button"
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Presiona <b>aquí</b> para escoger tu modelo de iPhone
                </button>
                <ul className="dropdown-menu rounded">
                    {modelos.map((modelo) => (
                        <li
                            key={modelo.slug}
                            className="dropdown-item"
                            onClick={() => handleModelo(modelo)}
                        >
                            <p>{modelo.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}