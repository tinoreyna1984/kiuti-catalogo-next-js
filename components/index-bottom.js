import ScrollToTop from "./scroll-to-top";

export default function IndexBottom({ loading, listaEstuches }) {
    return (
        <div className="row py-4">
            {!loading && listaEstuches?.length && (
                <p className="lead fw-bolder text-center">
                    *Los colores que se muestran en las imágenes son los únicos disponibles*
                </p>
            )}
            <ScrollToTop />
        </div>
    );
}