import PAGE_KEYS from "../../../constants";
import "./maillistsection.scss";

interface MailListSectionParams {
  setActivePage: (activePage: string) => void;
}

function MailListSection({ setActivePage }: MailListSectionParams) {
  return (
    <>
      <div id="mail-list-section" className="p-2 pb-0">
        <h2>Interesse?</h2>
        <div className="container">
          <div className="row">
            <div id="imageContainer" className="col-6">
              <img src="/src/assets/img/Party.png" className="w-100" />
            </div>
            <div
              id="contentContainer"
              className="col-6 d-flex align-items-start justify-content-center flex-column"
            >
              <h3>Dann direkt anmelden!</h3>
              <button
                className="btn btn-primary"
                onClick={() => setActivePage(PAGE_KEYS.APPLICATION)}
              >
                Zur Anmeldung ➔
              </button>
              <h3>Oder ganz unverbindlich in den E-Mail Verteiler eintragen</h3>
              <div className="card border border-primary p-2">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MailListSection;
