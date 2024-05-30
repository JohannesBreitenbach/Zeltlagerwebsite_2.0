import { Link } from "react-router-dom";
import "./notfoundpage.scss";

export default function NotFoundPage() {
  return (
    <div id="not-found-page">
      <h1>Kein Anschluss unter dieser Nummer!</h1>
      <p>Sorry, hier haben wir nicht mit Besuch gerechnet.</p>
      <img src="src\assets\img\not_found.jpg" className=""></img>
      <Link to="/">Zurück zur Homepage</Link>
    </div>
  );
}
