export default function Header() {
  return (
    <header className="d-flex flex-row align-items-center shadow rounded-bottom sticky-top" style={{ backgroundColor: "#f16c94" }}>
      <img className="rounded-bottom" src="/kiuti-logo-02.jpeg" width={98} height={98} alt="Kiuti" />
      <p className="display-4 text-start" id="title">Kiuti Cases</p>
    </header>
  );
}
