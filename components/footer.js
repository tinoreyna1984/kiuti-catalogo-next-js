import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="d-flex p-2 align-items-center justify-content-center shadow rounded-top bg-dark text-light">
      <div className="pt-1">
        <p className="text-center lead">
          Haz tu pedido al 0939481770 (WhatsApp). Envíos gratuitos a todo Ecuador (excepto Galápagos).
        </p>
        <p className="text-center lead">
          Consultas a:{" "}
          <a
            className="text-decoration-underline text-white"
            href="mailto:kiuti.cases@gmail.com"
          >
            kiuti.cases@gmail.com
          </a>
          .{" "}
          Síguenos en Instagram:{" "}
          <a
            className="text-decoration-none text-white"
            href="https://www.instagram.com/kiuti.cases/"
          >
            <FontAwesomeIcon icon={faInstagram} />{" "}kiuti.cases
          </a>
        </p>
      </div>
    </footer>
  );
}
