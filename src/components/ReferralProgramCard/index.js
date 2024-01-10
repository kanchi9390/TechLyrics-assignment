import './index.css'

const ReferralProgramCard = props => {
  const {referralCardDetails} = props
  const {title, description, btnText, id} = referralCardDetails

  return (
    <li className={`referrel-program-card-container card${id} `}>
      <h1 className="referrel-program-card-h">{title}</h1>
      <p className="referrel-program-card-p">{description}</p>
      <button type="button" className="referrel-program-card-btn">
        {btnText}
      </button>
    </li>
  )
}

export default ReferralProgramCard
