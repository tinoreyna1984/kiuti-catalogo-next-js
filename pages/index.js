import { useDispatch, useSelector } from "react-redux";
import { startFilterEstuches } from "../redux/estuchesSlice";
import { useEffect } from "react";
import { bucket } from "./api/cosmic-api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Dropdown from "../components/dropdown";
import IndexBottom from "../components/index-bottom";
import IndexTop from "../components/index-top";
import IndexMid from "../components/index-mid";
import Loading from "../components/loading";
import NoHayEstuches from "../components/no-hay-estuches";
import EstuchesModal from "../components/estuches-modal";

export async function getServerSideProps() {
  const data = await bucket.objects
    .find({
      type: "modelos", // Object Type slug
    })
    .props("title,slug,metadata"); // response properties

  const modelos = await data.objects;
  return {
    props: {
      modelos,
    },
  };
}

export default function Home({ modelos }) {
  //console.log(modelos);

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
      <IndexTop />
      {/* <Dropdown modelos={modelos} handleModelo={handleModelo} /> */}
      <EstuchesModal modelos={modelos} handleModelo={handleModelo} />
      <IndexMid loading={loading} listaEstuches={listaEstuches} title={title} />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {loading ? (
          <Loading />
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
                    <FontAwesomeIcon icon={faWhatsapp} /> Pídelo por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )) || (
            <NoHayEstuches title={title} />
          )
        )}
      </div>
      <IndexBottom loading={loading} listaEstuches={listaEstuches} />
    </div>
  );
}
