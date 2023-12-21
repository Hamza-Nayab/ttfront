import "./style.css";
import c1 from "../Img/1.png";
import c2 from "../Img/2.png";
import c3 from "../Img/3.png";

function Carousel() {
  return (
    <div style={{ marginTop: "15px" }}>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={c1}
              class="d-block w-100"
              style={{ height: "70vh" }}
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={c2}
              class="d-block w-100"
              style={{ height: "70vh" }}
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={c3}
              class="d-block w-100"
              style={{ height: "70vh" }}
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
