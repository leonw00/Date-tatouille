import "./GeneratedCard.css";

function GeneratedCard({ category, place, price, desc, img, link }) {
  return (
    <div>
      <div className="card-container">
        <h1 className="category">{category}</h1>

        <h2 className="place">{place} - {price}</h2>
        <p className="desc">{desc}</p>
      </div>
      <div className="card-shadow"></div>
    </div>
  );
}

export default GeneratedCard;
