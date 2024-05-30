import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div id="not-found-page">
      <h1>Kein Anschluss unter dieser Nummer!</h1>
      <img src="src\assets\img\not_found.jpg"></img>
      <Link to="/">Zurück zur Homepage</Link>
    </div>
  );
}
