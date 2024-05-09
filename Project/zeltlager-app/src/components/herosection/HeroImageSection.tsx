import "./herosection.scss";

function HeroImageSection() {
  return (
    <>
      <header id="heroImageComponent">
        <section>
          <div id="intro" className="bg-image">
            <div className="mask">
              <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row align-items-center">
                  <div className="col-12">
                    <h1 className="mb-0 text-white page-title">Zeltlager</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="content-below">
        <h1>Content below</h1>
      </main>
    </>
  );
}

export default HeroImageSection;
