import PAGE_KEYS from "../../../constants";
import "./maillistsection.scss";

interface MailListSectionParams {
  setActivePage: (activePage: string) => void;
}

function MailListSection({ setActivePage }: MailListSectionParams) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const emailInput = (event.target as HTMLFormElement).elements.namedItem(
      "email"
    ) as HTMLInputElement;
    if (emailInput && emailInput.value) {
      console.log(`Email submitted: ${emailInput.value}`);
      // Add your email submission logic here
    }
  };

  return (
    <div id="mail-list-section" className="mail-list-section">
      <div className="container-fluid">
        <div className="row">
          <div id="imageContainer" className="d-none d-md-block col-md-6">
            <img
              src="/src/assets/img/Lagerfeuer.jpeg"
              className="w-100 h-100"
              alt="Lagerfeuer"
            />
          </div>
          <div
            id="content-container"
            className="col-12 col-md-6 d-flex align-items-center justify-content-center flex-column pb-3"
          >
            <h1 id="mail-title" className="mb-3">
              Interesse?
            </h1>
            <div
              id="content-body"
              className="w-100 d-flex align-items-center justify-content-center"
            >
              <div
                id="email-cta"
                className="d-flex align-items-center justify-content-center flex-column"
              >
                <p className="text-center">
                  Dann ganz unverbindlich in den E-Mail Verteiler eintragen und
                  auf dem Laufenden bleiben
                </p>
                <div className="w-100">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="E-Mail"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Hinzufügen
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <a
              onClick={() => setActivePage(PAGE_KEYS.APPLICATION)}
              className="align-self-end text-end text-decoration-underline"
            >
              Oder direkt zur Anmeldung ➔
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailListSection;
