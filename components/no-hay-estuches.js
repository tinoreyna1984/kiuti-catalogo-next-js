export default function NoHayEstuches({ title }) {
    return (
        <div className="col">
            <div className="card h-100 border-0">
                <img
                    src="/sad-face.png"
                    className="card-img-top h-75 w-50"
                    alt="cara triste"
                    loading="lazy"
                    decoding="async"
                />
                <div className="card-body">
                    <h5 className="card-title">Lo sentimos...</h5>
                    <p className="lead">No tenemos estuches para {title}</p>
                </div>
            </div>
        </div>
    );
}