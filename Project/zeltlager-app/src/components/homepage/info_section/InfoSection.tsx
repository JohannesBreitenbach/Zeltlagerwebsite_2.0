import "./infosection.scss";

function InfoSection() {
  return (
    <>
      <div
        id="info-section"
        className="container-fluid d-flex align-items-center justify-content-center"
      >
        <div className="container p-3">
          <div className="row">
            <div id="imageContainer" className="col-4">
              <img
                src="src\assets\img\Zeltlagerplakat2024-1.png"
                className="w-100"
              />
            </div>
            <div
              id="contentContainer"
              className="col-8 d-flex align-items-start justify-content-center flex-column"
            >
              <h1>Wilkommen beim ULFer Zeltlager!</h1>
              <p>
                Unser jährliches Zeltlager ist das Highlight des Jahres!
                Organisiert von einem dynamischen und engagierten jungen Team,
                bieten wir Kindern und Jugendlichen eine Woche voller Abenteuer,
                Spaß und Gemeinschaft in der Natur. Unser Team besteht aus
                motivierten jungen Erwachsenen, die sich leidenschaftlich für
                die Arbeit mit Kindern und Jugendlichen einsetzen. Jeder von uns
                bringt eigene Erfahrungen und Talente mit, um ein
                abwechslungsreiches Programm zu gestalten, das für jeden etwas
                bietet – sei es spannende Spiele, kreative Workshops oder
                abendliche Lagerfeuerrunden. Die Pfarrei Unsere Liebe Frau
                unterstützt uns dabei tatkräftig und steht hinter diesem
                wunderbaren Projekt, das Generationen von Teilnehmern
                unvergessliche Erinnerungen beschert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoSection;
