export default function Footer() {
  return (
    <footer className="d-flex p-2 align-items-center justify-content-center shadow rounded-top bg-dark text-light">
      <div className="pt-1">
        <p className="text-center lead">
          Haz tu pedido al 0939481770 (WhatsApp). Envíos gratuitos a todo Ecuador (excepto Galápagos).
        </p>
        <p className="text-center lead">
          También puedes escribir al correo:{" "}
          <a
            className="text-decoration-underline text-white"
            href="mailto:kiuti.cases@gmail.com"
          >
            kiuti.cases@gmail.com
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
