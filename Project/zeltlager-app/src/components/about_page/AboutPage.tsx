import ContentSection from "./ContentSection";
import "./about.scss";

function AboutPage() {
  return (
    <section id="about-page" className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/src/assets/img/Team.jpg"
              alt="Team"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-4 mb-3">Wer ist "ULF" überhaupt?</h1>
            <h2 className="h4 mb-3">Na das sind wir!</h2>
            <p className="lead">
              Wir sind ein junges und motiviertes Team, das mit viel Herzblut
              und Engagement unvergessliche Zeltlager-Erlebnisse für Kinder und
              Eltern schafft. Unsere Leidenschaft für Abenteuer und Natur
              spiegelt sich in jedem Aspekt unseres Programms wider. Bei uns
              stehen Spaß, Sicherheit und Gemeinschaft an erster Stelle.
              Gemeinsam entdecken wir spannende Outdoor-Aktivitäten, lernen neue
              Freunde kennen und wachsen über uns hinaus. Unser Ziel ist es,
              jedem Kind die Möglichkeit zu geben, unvergessliche Erinnerungen
              zu sammeln und wertvolle Erfahrungen in der Natur zu machen. Kommt
              vorbei und werdet Teil unserer Zeltlager-Familie!
            </p>
          </div>
        </div>
      </div>
      <ContentSection />
    </section>
  );
}

export default AboutPage;
