import { useState, ChangeEvent } from "react";
import "./registrationpage.scss";

interface RegistrationData {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  birthday: string;
  medication: string;
  canSwim: boolean;
  isVegetarian: boolean;
  isVacc: boolean;
  canBivouac: boolean;
  canPhoto: boolean;
  wantsTshirt: boolean;
  tshirtSize: string;
  additionalInfo: string;
}

function RegistrationPage() {
  const [currentData, setCurrentData] = useState<RegistrationData>({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    birthday: "",
    medication: "",
    canSwim: true,
    isVegetarian: false,
    isVacc: true,
    canBivouac: true,
    canPhoto: true,
    wantsTshirt: true,
    tshirtSize: "",
    additionalInfo: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setCurrentData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setCurrentData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div id="registration-page" className="container-fluid p-4">
      <div className="row">
        <h2 className="col-12">Anmeldung</h2>
      </div>
      <form>
        <div className="row mb-3">
          <div className="col-12 col-lg-6">
            <label htmlFor="firstName">Vorname</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder=""
              value={currentData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-12 col-lg-6">
            <label htmlFor="lastName">Nachname</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder=""
              value={currentData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-3 col-sm-6">
            <label htmlFor="birthday">Geburtsdatum</label>
            <input
              id="birthday"
              name="birthday"
              className="form-control"
              type="date"
              value={currentData.birthday}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-9">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="youremail@example.com"
              value={currentData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-lg-8">
            <label htmlFor="address">Adresse</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder=""
              value={currentData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-12 col-lg-4">
            <label htmlFor="phone">Telefonnummer</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              placeholder=""
              value={currentData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <label htmlFor="canSwim" className="me-3">
              Mein Kind kann schwimmen.
            </label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  id="canSwimYes"
                  className="form-check-input"
                  name="canSwim"
                  type="radio"
                  checked={currentData.canSwim === true}
                  onChange={() =>
                    setCurrentData((prevData) => ({
                      ...prevData,
                      canSwim: true,
                    }))
                  }
                />
                <label htmlFor="canSwimYes" className="form-check-label">
                  Ja
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  id="canSwimNo"
                  className="form-check-input"
                  name="canSwim"
                  type="radio"
                  checked={currentData.canSwim === false}
                  onChange={() =>
                    setCurrentData((prevData) => ({
                      ...prevData,
                      canSwim: false,
                    }))
                  }
                />
                <label htmlFor="canSwimNo" className="form-check-label">
                  Nein
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <label htmlFor="isVegetarian" className="me-3">
              Mein Kind isst vegetarisch.
            </label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  id="isVegetarianYes"
                  className="form-check-input"
                  name="isVegetarian"
                  type="radio"
                  checked={currentData.isVegetarian === true}
                  onChange={() =>
                    setCurrentData((prevData) => ({
                      ...prevData,
                      isVegetarian: true,
                    }))
                  }
                />
                <label htmlFor="isVegetarianYes" className="form-check-label">
                  Ja
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  id="isVegetarianNo"
                  className="form-check-input"
                  name="isVegetarian"
                  type="radio"
                  checked={currentData.isVegetarian === false}
                  onChange={() =>
                    setCurrentData((prevData) => ({
                      ...prevData,
                      isVegetarian: false,
                    }))
                  }
                />
                <label htmlFor="isVegetarianNo" className="form-check-label">
                  Nein
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <label htmlFor="isVacc" className="me-3">
              Mein Kind ist gegen Zecken geimpft.
            </label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  id="isVaccYes"
                  className="form-check-input"
                  name="isVacc"
                  type="radio"
                  checked={currentData.isVacc === true}
                  onChange={() =>
                    setCurrentData((prevData) => ({
                      ...prevData,
                      isVacc: true,
                    }))
                  }
                />
                <label htmlFor="isVaccYes" className="form-check-label">
                  Ja
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  id="isVaccNo"
                  className="form-check-input"
                  name="isVacc"
                  type="radio"
                  checked={currentData.isVacc === false}
                  onChange={() =>
                    setCurrentData((prevData) => ({
                      ...prevData,
                      isVacc: false,
                    }))
                  }
                />
                <label htmlFor="isVaccNo" className="form-check-label">
                  Nein
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <label htmlFor="canBivouac" className="me-3">
              Mein Kind darf am Biwak (Übernachtung im Freien) teilnehmen.
            </label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  id="canBivouacYes"
                  className="form-check-input"
                  name="canBivouac"
                  type="radio"
                  checked={currentData.canBivouac === true}
                  onChange={() =>
                    setCurrentData((prevData) => ({
                      ...prevData,
                      canBivouac: true,
                    }))
                  }
                />
                <label htmlFor="canBivouacYes" className="form-check-label">
                  Ja
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  id="canBivouacNo"
                  className="form-check-input"
                  name="canBivouac"
                  type="radio"
                  checked={currentData.canBivouac === false}
                  onChange={() =>
                    setCurrentData((prevData) => ({
                      ...prevData,
                      canBivouac: false,
                    }))
                  }
                />
                <label htmlFor="canBivouacNo" className="form-check-label">
                  Nein
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-lg-8 d-flex align-items-center">
            <label htmlFor="canPhoto" className="me-3">
              Ich bin damit einverstanden, dass die Zeltlagerfotos, auf denen
              mein Kind zu sehen ist, veröffentlicht werden dürfen.*
            </label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  id="canPhotoYes"
                  className="form-check-input"
                  name="canPhoto"
                  type="radio"
                  checked={currentData.canPhoto === true}
                  onChange={() =>
                    setCurrentData((prevData) => ({
                      ...prevData,
                      canPhoto: true,
                    }))
                  }
                />
                <label htmlFor="canPhotoYes" className="form-check-label">
                  Ja
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  id="canPhotoNo"
                  className="form-check-input"
                  name="canPhoto"
                  type="radio"
                  checked={currentData.canPhoto === false}
                  onChange={() =>
                    setCurrentData((prevData) => ({
                      ...prevData,
                      canPhoto: false,
                    }))
                  }
                />
                <label htmlFor="canPhotoNo" className="form-check-label">
                  Nein
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 d-flex align-items-center">
            <label htmlFor="canPhoto" className="me-3">
              Ich möchte ein Zeltlager T-Shirt für mein Kind bestellen.
            </label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  id="tshirtYes"
                  className="form-check-input"
                  name="tshirt"
                  type="radio"
                  checked={currentData.canPhoto === true}
                  onChange={() =>
                    setCurrentData((prevData) => ({
                      ...prevData,
                      canPhoto: true,
                    }))
                  }
                />
                <label htmlFor="canPhotoYes" className="form-check-label">
                  Ja
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  id="tshirtNo"
                  className="form-check-input"
                  name="tshirt"
                  type="radio"
                  checked={currentData.canPhoto === false}
                  onChange={() =>
                    setCurrentData((prevData) => ({
                      ...prevData,
                      canPhoto: false,
                    }))
                  }
                />
                <label htmlFor="canPhotoNo" className="form-check-label">
                  Nein
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6 col-lg-3">
            <label htmlFor="tshirtSize">T-Shirt Größe</label>
            <input
              type="text"
              className="form-control"
              id="tshirtSize"
              name="tshirtSize"
              placeholder=""
              value={currentData.tshirtSize}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="additionalInfo">
              Sonstiges, auf das wir achten sollten:
            </label>
            <textarea
              className="form-control"
              id="additionalInfo"
              name="additionalInfo"
              placeholder=""
              value={currentData.additionalInfo}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <p>
          *(Bitte beachten Sie, dass wenn Sie gegen die Veröffentlichung
          (Pfarrei-Website, Abschlussfotos, Ausstellung in Jugendräumen) der im
          Rahmen des Zeltlagers gemachten Bilder sind, wir leider keine
          Erinnerungsfotos zur Verfügung stellen können)
        </p>
        <hr />
        <h4>
          Hiermit melde ich mein Kind zum diesjährigen Zeltlager der Pfarrei
          „Unsere Liebe Frau“ & Pfarreiengemeinschaft St. Martin in Höhefeld an.
        </h4>

        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button
              type="submit"
              className="btn btn-primary col-5 col-lg-2"
              onClick={() => console.log(currentData)}
            >
              Anmeldung abschicken
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;
