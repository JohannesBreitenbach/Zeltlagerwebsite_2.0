import PAGE_KEYS from "../../../constants";
import "./maillistsection.scss";

interface MailListSectionParams {
  setActivePage: (activePage: string) => void;
}

function MailListSection({ setActivePage }: MailListSectionParams) {
  return (
    <>
      <div id="mail-list-section" className=" ">
        <div className="container-fluid">
          <div className="row">
            <div
              id="imageContainer"
              className="col-md-6 d-none d-md-flex align-items-start justify-content-center"
            >
              <img
                src="/src/assets/img/Lagerfeuer.jpeg"
                className="w-100 h-100"
              />
            </div>
            <div
              id="content-container"
              className="col-12 col-md-6 d-flex align-items-center justify-content-center flex-column gap-1 gap-md-2 pb-3"
            >
              <h1 id="mail-title" className="mb-5">
                Interesse?
              </h1>
              <div
                id="content-body"
                className="row w-100 d-flex align-items-center justify-content-between"
              >
                <div
                  id="enroll-cta"
                  className="col-12 col-sm-6 card border border-primary p-2"
                >
                  <h3>Dann direkt anmelden!</h3>
                  <button
                    className="btn btn-primary mb-3"
                    onClick={() => setActivePage(PAGE_KEYS.APPLICATION)}
                  >
                    Zur Anmeldung ➔
                  </button>
                </div>

                <div
                  id="email-cta"
                  className="col-12 col-sm-6 card border border-primary p-2"
                >
                  <h3>
                    Oder ganz unverbindlich in den E-Mail Verteiler eintragen:
                  </h3>
                  <div className="">
                    <form>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="E-Mail"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary w-100">
                        Hinzufügen
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MailListSection;
