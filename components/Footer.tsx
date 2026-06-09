import Clock from "./Clock";

export default function Footer() {
  return (
    <footer className="wrap footer">
      <span>© 2026 Rustam Nortadzhiev</span>
      <span>
        Built with <span className="heart">♥</span> in Dushanbe, Tajikistan
      </span>
      <Clock />
    </footer>
  );
}
