import "./about.scss";

function AboutPage() {
  return (
    <>
      <div id="about-page">
        <h1>Wer ist "ULF" überhaupt?</h1>
        <div className="container-fluid p-3" id="header-section">
          <div className="row">
            <div
              id="imageContainer"
              className="col-6 col-sm-0 d-flex align-items-start justify-content-center"
            >
              <img src="/src/assets/img/Team.jpg" className="w-100" />
            </div>
            <div
              id="contentContainer"
              className="col-6 d-flex align-items-start justify-content-center flex-column"
            >
              <h2>Na das sind wir!</h2>
              <p>
                Wir sind ein junges und motiviertes Team, das mit viel Herzblut
                und Engagement unvergessliche Zeltlager-Erlebnisse für Kinder
                und Eltern schafft. Unsere Leidenschaft für Abenteuer und Natur
                spiegelt sich in jedem Aspekt unseres Programms wider. Bei uns
                stehen Spaß, Sicherheit und Gemeinschaft an erster Stelle.
                Gemeinsam entdecken wir spannende Outdoor-Aktivitäten, lernen
                neue Freunde kennen und wachsen über uns hinaus. Unser Ziel ist
                es, jedem Kind die Möglichkeit zu geben, unvergessliche
                Erinnerungen zu sammeln und wertvolle Erfahrungen in der Natur
                zu machen. Kommt vorbei und werdet Teil unserer
                Zeltlager-Familie!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
