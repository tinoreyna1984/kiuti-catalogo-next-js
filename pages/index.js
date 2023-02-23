import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
//import Dropdown from "../components/dropdown";
import IndexBottom from "../components/index-bottom";
import IndexTop from "../components/index-top";
import IndexMid from "../components/index-mid";
//import Loading from "../components/loading";
import NoHayEstuches from "../components/no-hay-estuches";
import EstuchesModal from "../components/estuches-modal";
import jsonModelos from "../data/modelos.json";
import jsonEstuches from "../data/estuches.json";
import { initEstuches, startFilterEstuches } from "../redux/estuchesSlice";

export async function getServerSideProps() {
  return {
    props: {
      estuches: jsonEstuches.objects,
      modelos: jsonModelos.objects,
    },
  };
}

export default function Home({ estuches, modelos }) {

  const whatsApp = "https://api.whatsapp.com/send?phone=593939481770";
  const textbase = "text=Me%20gustaría%20adquirir%20el%20";

  const dispatch = useDispatch();
  const { slug, title, listaEstuches } = useSelector(
    (state) => state.estuches
  );
  useEffect(() => {
    dispatch(startFilterEstuches({ slug, title, estuches }));
  }, [slug]);

  const handleModelo = async ({ slug, title }) => {
    dispatch(startFilterEstuches({ slug, title, estuches }));
  };

  return (
    <div className="container px-5 py-3">
      {/* <IndexTop />
      <EstuchesModal modelos={modelos} handleModelo={handleModelo} />
      <IndexMid listaEstuches={listaEstuches} title={title} />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          listaEstuches.length > 0 ?
            listaEstuches?.map((estuche) => (
              <div key={estuche.slug} className="col">
                <div className="card h-100">
                  <img
                    src={estuche.url}
                    className="card-img-top"
                    alt="Estuche"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{estuche.title}</h5>
                    <p className="card-text">Precio: {estuche.precio}.</p>
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
            )) : <NoHayEstuches title={title} />
        }
      </div> */}
      {/* <IndexBottom listaEstuches={listaEstuches} /> */}
      <h1>Kiuti Cases - Sitio en mantenimiento</h1>
    </div>
  );
}
