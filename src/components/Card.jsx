import mapIcon from '../../public/images/map-icon.png'

export default function Card(props) {
  return (
    <div className="card-container">
      <img src={`../../public/images/${props.cardData.travelImg}`} className="travel-image" />
      <div className="location-container">
        <img src={mapIcon} className="map-icon" />
        <p className="city-title">{props.cardData.city}</p>
      </div>
    </div>
  )
}