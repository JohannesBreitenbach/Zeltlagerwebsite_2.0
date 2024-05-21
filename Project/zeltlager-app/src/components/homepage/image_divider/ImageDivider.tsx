import "./imagedivider.scss";

function ImageDivider() {
  return (
    <div id="image-divider" className="p-3">
      <div id="image-container" className="row w-100">
        <img className="col-4" src="src\assets\img\Quidditch.jpeg" />
        <img className="col-4" src="src\assets\img\Gruppenbild_cropped.jpg" />
        <img className="col-4" src="src\assets\img\Quellenspiel.jpeg" />
      </div>
      <div className="w-100">
        <p className="text-end pt-2 pb-0 mb-0">
          <a onClick={() => {}}>Mehr Bilder ansehen ➔</a>
        </p>
      </div>
    </div>
  );
}

export default ImageDivider;
