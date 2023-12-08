import mapIcon from '../../public/images/map-icon.png'

export default function Card(props) {
  return (
    <div className="card-container">
      <img src={`../../public/images/${props.cardData.travelImg}`} className="travel-image" />
      <div className="location-container">
        <div className="city-container">
          <img src={mapIcon} className="map-icon" />
          <p className="city-title">{props.cardData.city}</p>
          <p className="google-maps-link">View on Google Maps</p>
        </div>
        <h1 className="location-title">{props.cardData.location}</h1>
        <h3 className="travel-date">{props.cardData.dates}</h3>
        <p className="location-description">{props.cardData.description}</p>
      </div>
    </div>
  )
}