import './index.css'

const PropertyCard = props => {
  const {propertyDetails} = props
  const {name, place, price, rooms, imageUrl} = propertyDetails

  return (
    <li className="property-card-li">
      <img src={imageUrl} alt={name} className="property-card-li-img" />
      <div className="property-card-li-text-container">
        <h1 className="property-card-li-name">{name}</h1>
        <p className="property-card-li-place">{place}</p>
        <p className="property-card-li-rooms">{rooms}</p>
        <p className="property-card-li-price">{price}</p>
      </div>
    </li>
  )
}

export default PropertyCard