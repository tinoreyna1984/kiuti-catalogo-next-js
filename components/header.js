export default function Header() {
  return (
    <header className="d-flex flex-row align-items-center shadow rounded-bottom sticky-top" style={{ backgroundColor: "#f16c94" }}>
      <img className="rounded-circle p-2" src="/kiuti-logo-02.jpeg" width={94} height={94} alt="Kiuti" />
      <p className="display-4 text-start mt-3" id="title">Kiuti Cases</p>
    </header>
  );
}
