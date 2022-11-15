export default function Header() {
  return (
    <header className="d-flex flex-row align-items-center shadow rounded-bottom sticky-top" style={{ backgroundColor: "#f16c94" }}>
      <img className="rounded-bottom" src="/kiuti-logo.jpg" width={98} height={98} alt="Kiuti" />
      <p className="display-4 text-start">Kiuti Cases</p>
    </header>
  );
}
