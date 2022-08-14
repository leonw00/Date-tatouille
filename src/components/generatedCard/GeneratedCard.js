import "./GeneratedCard.css";

function GeneratedCard({ category, place, price, desc, img, link }) {
  return (
    <div>
      <div className="card-container" onClick={() => openLink(link)}>
        <h1 className="category">{category}</h1>
        <div className="image-placeholder"></div>
        <h2 className="place">{place} - {price}</h2>
        <p className="desc">{desc}</p>
      </div>
      <div className="card-shadow"></div>
    </div>
  );
}

function openLink(link) {
  window.open(link,'mywindow');
}

export default GeneratedCard;
