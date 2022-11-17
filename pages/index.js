import { useDispatch, useSelector } from "react-redux";
import { startFilterEstuches } from "../redux/estuchesSlice";
import { useEffect } from "react";
import { bucket } from "./api/cosmic-api";
import { Hearts } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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

  /* const linkTest =
    "https://api.whatsapp.com/send?phone=593939481770&text=Hola.%20Quisiera%20adquirir%20el%20estuche%20de%20margaritas,%20por%20favor"; */
  
  const whatsApp = "https://api.whatsapp.com/send?phone=593939481770";
  const textbase = "text=Me%20gustaría%20adquirir%20el%20";

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
    <div className="container px-5 py-3">
      <div className="row">
        <p className="lead">
          Aquí encontrarás los estuches más kiut para tu iPhone. 🥰
        </p>
        <p className="lead">
          Elige tu modelo de iPhone y podrás ver todos los estuches que están disponibles. 🤗
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
        {!loading && (listaEstuches?.length && (
          <p className="lead">
            Hay {listaEstuches?.length || 0}{" "}
            {listaEstuches?.length > 1 ? "estuches" : "estuche"} para {title}
          </p>
        ))}
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {loading ? (
          <div className="col">
            <div className="card h-100 border-0">
              <div className="card-body">
                <Hearts
                  height="282"
                  width="282"
                  color="#f16c94"
                  ariaLabel="hearts-loading"
                  wrapperStyle={{}}
                  wrapperClass="card-img-top h-100 w-100"
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
                  <a
                    className="btn btn-success"
                    href={`${whatsApp}&${textbase}${estuche.title}%20para%20${title},%20por%20favor`}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />{" "}Pídelo por WhatsApp
                  </a>
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
                  <h5 className="card-title">Lo sentimos...</h5>
                  <p className="lead">
                    No tenemos estuches para {title}
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
