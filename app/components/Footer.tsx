import { CONTACT } from "../site-config";

export default function Footer() {
  return (
    <div className="container" style={{ padding: "var(--page-inline-padding)" }}>
      <footer className="footer">
        {CONTACT.company} · {CONTACT.phone} · {CONTACT.email}
      </footer>
    </div>
  );
}
