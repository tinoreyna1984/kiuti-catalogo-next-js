export default function IndexMid({ loading, listaEstuches, title }) {
    return (
        <div className="row py-3">
            {/* {!loading && listaEstuches?.length && (
          <p className="lead">
            Hay {listaEstuches?.length || 0}{" "}
            {listaEstuches?.length > 1 ? "estuches" : "estuche"} para {title}
          </p>
        )} */}
            {!loading && listaEstuches?.length && (
                <>
                    <p className="lead fw-bolder text-center">
                        Estos son los estuches disponibles para {title}.
                    </p>
                    <p className="lead fw-bolder text-center">
                        Para cambiar de modelo, haz clic en el botoncito oscurito de arriba. ☝️
                    </p>
                </>
            )}
        </div>
    );
}