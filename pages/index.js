import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { startFilterEstuches } from "../redux/estuchesSlice";
import { useEffect } from "react";
import { bucket } from "./api/cosmic-api";
import { Hearts } from "react-loader-spinner";

export async function getServerSideProps() {
  const data = await bucket.objects
    .find({
      type: "modelos", // Object Type slug
    })
    .props("title,slug,metadata"); // response properties

  const modelos = await data.objects.reverse();
  return {
    props: {
      modelos,
    },
  };
}

export default function Home({ modelos }) {
  //console.log(modelos);

  // Redux
  const dispatch = useDispatch();
  const { slug, title, listaEstuches, loading } = useSelector(
    (state) => state.estuches
  );
  //console.log(loading);

  useEffect(() => {
    dispatch(startFilterEstuches({ slug, title }));
  }, [slug]);

  const handleModelo = async ({ slug, title }) => {
    //console.log(title);
    dispatch(startFilterEstuches({ slug, title }));
  };

  return (
    <div className="container p-5">
      <div className="row pt-2">
        <p className="lead">
          Aquí tenemos los estuches más kiut para tu iPhone. 🥰
        </p>
        <p className="lead">
          Haz clic en el botón de abajo para ver estuches para tu modelo.
        </p>
      </div>
      <div className="row py-3">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ¿Cuál es tu modelo de iPhone?
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
      <div className="row py-3">
        {listaEstuches?.length && (
          <p className="lead">
            Hay {listaEstuches?.length || 0}{" "}
            {listaEstuches?.length > 1 ? "estuches" : "estuche"} para {title}
          </p>
        )}
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {loading ? (
          <div className="col">
            <div className="card h-100 border-0">
              <div className="card-body">
                <Hearts
                  height="150"
                  width="150"
                  color="#f16c94"
                  ariaLabel="hearts-loading"
                  wrapperStyle={{}}
                  wrapperClass="card-img-top h-150 w-150"
                  visible={true}
                />
              </div>
            </div>
          </div>
        ) : (
          listaEstuches?.map((estuche) => (
            <div key={estuche.id} className="col">
              <div className="card h-100">
                <img
                  src={estuche.metadata.image.url}
                  className="card-img-top"
                  alt="Estuche"
                  loading="lazy"
                  decoding="async"
                />
                <div className="card-body">
                  <h5 className="card-title">{estuche.title}</h5>
                  <p className="card-text">
                    Precio: {estuche.metadata.precio}.
                  </p>
                </div>
              </div>
            </div>
          )) || (
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
                  <h5 className="card-title">Lo sentimos</h5>
                  <p className="lead">
                    Lo sentimos, no tenemos estuches para {title}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
