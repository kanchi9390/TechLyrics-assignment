import {PiList} from 'react-icons/pi'
import {MdOutlineVerifiedUser} from 'react-icons/md'
import {FaHeadset} from 'react-icons/fa'
import {PiKeyboardLight} from 'react-icons/pi'
import {IoSearchOutline} from 'react-icons/io5'
import {BsArrowRight} from 'react-icons/bs'

import ReferralProgramCard from './components/ReferralProgramCard'
import PropertyCard from './components/PropertyCard'

import './App.css'

const ReferralProgramAndOffersList = [
  {
    id: 1,
    title: 'Win £50 in just a few steps! Refer a friend and earn your reward',
    description:
      'Turn connections into rewards. Get credited after successful booking.',
    btnText: 'Refer Now',
    imgUrl:
      'https://prod-static-assets.amberstudent.com/images/refer+8.png?auto=format&q=10%27',
  },
  {
    id: 2,
    title: 'Unlock your academic dreams in the UK with amber scholarship!',
    description: 'Save £5,000 and turn your education dreams into a reality.',
    btnText: 'Apply Now',
    imgUrl:
      'https://prod-static-assets.amberstudent.com/images/scholarshoip-offer+1.png?auto=format&q=10%27',
  },
  {
    id: 3,
    title: 'Save up to £300 with amber+',
    description:
      'Get exclusive discounts from 150+ trusted partners at this one-stop student platform',
    btnText: 'Claim Now',
    imgUrl:
      'https://prod-static-assets.amberstudent.com/images/refer-3-hd1.png?auto=format&q=10%27',
  },
]

const ThousandsOfPropertiesList = [
  {
    id: 1,
    imageUrl:
      'https://prod-assets.amberstudent.com/inventories/133373/b1564535.jpg?w=400&w=480&h=260&h=360&fit=crop&q=0&auto=format&trim=auto',
    name: 'The Lyra, London',
    place: 'London, England, GB',
    price: '£405/week',
    rooms: '7 Room Options',
  },
  {
    id: 2,
    imageUrl:
      'https://prod-assets.amberstudent.com/inventories/143234/55ce0ee4.jpg?w=400&w=480&h=260&h=360&fit=crop&q=0&auto=format&trim=auto',
    name: 'iQ Paris Gardens, London',
    place: 'London, England, GB',
    price: '£426/week',
    rooms: '21 Room Options',
  },
  {
    id: 3,
    imageUrl:
      'https://prod-assets.amberstudent.com/inventories/169924/863f0d15.jpg?w=400&w=480&h=260&h=360&fit=crop&q=0&auto=format&trim=auto',
    name: 'Pavilion Court, Wembley',
    place: 'Wembely, England, GB',
    price: '£235/week',
    rooms: '12 Room Options',
  },
  {
    id: 4,
    imageUrl:
      'https://prod-assets.amberstudent.com/inventories/143240/35360b3c.jpg?w=400&w=480&h=260&h=360&fit=crop&q=0&auto=format&trim=auto',
    name: 'iQ Magenta House, London',
    place: 'London, England, GB',
    price: '£387/week',
    rooms: '9 Room Options',
  },
  {
    id: 5,
    imageUrl:
      'https://prod-assets.amberstudent.com/inventories/917017/e739db28.jpeg?w=400&w=480&h=260&h=360&fit=crop&q=0&auto=format&trim=auto',
    name: 'Fieldgate StreetE1,London',
    place: 'London, England, GB',
    price: '£489/week',
    rooms: '1 Room Options',
  },
  {
    id: 6,
    imageUrl:
      'https://prod-assets.amberstudent.com/inventories/181141/d4f1b5df.jpeg?w=400&w=480&h=260&h=360&fit=crop&q=0&auto=format&trim=auto',
    name: 'Arbour House, London',
    place: 'London, England, GB',
    price: '£389/week',
    rooms: '5 Room Options',
  },
]

function App() {
  return (
    <div className="Home-page">
      <div className="banner-section">
        <nav className="amber-navbar">
          <h1 className="website-name">amber</h1>
          <button className="nav-btn">
            <PiList />
          </button>
        </nav>

        <h1 className="website-caption">Home away from home!</h1>
        <p className="website-description">
          Book student accommodations near top universities and cities across
          the globe.
        </p>
        <div className="banner-tags-container">
          <div className="banner-tag">
            <MdOutlineVerifiedUser className="tag-icon" />
            <p className="tag-p">Verified Properties</p>
          </div>
          <div className="banner-tag">
            <FaHeadset className="tag-icon" />
            <p className="tag-p">24x7 Assistance</p>
          </div>
          <div className="banner-tag">
            <PiKeyboardLight className="tag-icon" />
            <p className="tag-p">Price Match Guarantee</p>
          </div>
        </div>

        <div className="search-bar-container">
          <input
            placeholder="Search by City, University or Property"
            className="search-input"
          />
          <button className="search-btn">
            <IoSearchOutline />
          </button>
        </div>
      </div>
      <div className="home-section-1">
        <div className="amber-services-container">
          <div className="service-card service-card-1">
            <img
              src="https://prod-static-assets.amberstudent.com/images/homepage-beds.svg"
              className="service-card-icon"
              alt="service-icon"
            />
            <h3 className="service-card-h">1 M+ Beds</h3>
            <p className="service-card-p">
              Book your perfect place from an extensive list of options.
            </p>
          </div>
          <div className="service-card service-card-1">
            <img
              src="https://prod-static-assets.amberstudent.com/images/homepage-universities.svg"
              className="service-card-icon"
              alt="service-icon"
            />
            <h3 className="service-card-h">800+ Universities</h3>
            <p className="service-card-p">
              Find the best student homes near prestigious universities.
            </p>
          </div>
          <div className="service-card service-card-1">
            <img
              src="https://prod-static-assets.amberstudent.com/images/homepage-cities.svg"
              className="service-card-icon"
              alt="service-icon"
            />
            <h3 className="service-card-h">250+ Global Cities</h3>
            <p className="service-card-p">
              We operate in major cities around the world.
            </p>
          </div>
          <div className="service-card service-card-2">
            <img
              src="https://prod-static-assets.amberstudent.com/images/trustpilot-rating.svg"
              className="service-card-icon-2"
              alt="service-icon"
            />
            <h3 className="service-card-h">4.8/5 on Trustpilot</h3>
            <p className="service-card-p">
              4000+ students have rated us excellent for our services.
            </p>
          </div>
        </div>

        <div className="amber-cities-section">
          <h2 className="cities-section-h">Popular Cities Across the Globe</h2>
          <p className="cities-section-p">
            Book student accommodations near top cities and universities around
            the world
          </p>
          <div className="countries-section">
            <div className="country-card country-card-active">
              <img
                src="https://prod-static-assets.amberstudent.com/images/flag-uk.svg"
                alt="flag"
                className="country-flag"
              />
              <p className="country-name">United Kingdom</p>
            </div>
            <div className="country-card country-card-inactive">
              <img
                src="https://prod-static-assets.amberstudent.com/images/flag-aus.svg"
                alt="flag"
                className="country-flag"
              />
              <p className="country-name">Australia</p>
            </div>
            <div className="country-card country-card-inactive">
              <img
                src="https://prod-static-assets.amberstudent.com/images/flag-ire.svg"
                alt="flag"
                className="country-flag"
              />
              <p className="country-name">Ireland</p>
            </div>
            <div className="country-card country-card-inactive">
              <img
                src="https://prod-static-assets.amberstudent.com/images/flag-us.svg"
                alt="flag"
                className="country-flag"
              />
              <p className="country-name">United States</p>
            </div>
            <div className="country-card country-card-inactive">
              <img
                src="https://prod-static-assets.amberstudent.com/images/flag-can.svg"
                alt="flag"
                className="country-flag"
              />
              <p className="country-name">Canada</p>
            </div>
            <div className="country-card country-card-inactive">
              <img
                src="https://prod-static-assets.amberstudent.com/images/flag-ger.svg"
                alt="flag"
                className="country-flag"
              />
              <p className="country-name">Germany</p>
            </div>
            <div className="country-card country-card-inactive">
              <img
                src="https://prod-static-assets.amberstudent.com/images/flag-esp.svg"
                alt="flag"
                className="country-flag"
              />
              <p className="country-name">Spain</p>
            </div>
          </div>

          <div className="popular-cities-section">
            <div className="popular-city city-1">
              <p className="city-p">London</p>
            </div>
            <div className="popular-city city-2">
              <p className="city-p">Nottingham</p>
            </div>
            <div className="popular-city city-3">
              <p className="city-p">Liverpool</p>
            </div>
            <div className="popular-city city-4">
              <p className="city-p">Leeds</p>
            </div>
            <div className="popular-city city-5">
              <p className="city-p">Cardiff</p>
            </div>
            <div className="popular-city city-6">
              <p className="city-p">Swansea</p>
            </div>
          </div>
          <button className="view-cities-btn">
            View All Cities <BsArrowRight />
          </button>
        </div>

        <h2 className="cities-section-h">Amber Referral Program and Offers</h2>
        <p className="cities-section-p">
          Several promotions, deals and special offers crafted just for you.
        </p>

        <ul className="referrel-program-ul-container">
          {ReferralProgramAndOffersList.map(each => (
            <ReferralProgramCard key={each.id} referralCardDetails={each} />
          ))}
        </ul>

        <h2 className="cities-section-h">Book your Perfect Accommodation</h2>
        <p className="cities-section-p">
          Take the hassle out of securing your student home for the best years
          of your life
        </p>

        <div className="amber-services-container">
          <div className="service-card service-card-1">
            <img
              src="https://prod-static-assets.amberstudent.com/images/fast-and-easy-bookings.svg"
              className="service-card-icon"
              alt="service-icon"
            />
            <h3 className="service-card-h">Quick & easy bookings</h3>
            <p className="service-card-p">
              Time is money. Save both when you book with us.
            </p>
          </div>
          <div className="service-card service-card-1">
            <img
              src="https://prod-static-assets.amberstudent.com/images/expert-assistance.svg"
              className="service-card-icon"
              alt="service-icon"
            />
            <h3 className="service-card-h">Price Match Guarantee</h3>
            <p className="service-card-p">
              Find a lower price and we'll match it. No questions asked.
            </p>
          </div>
          <div className="service-card service-card-1">
            <img
              src="https://prod-static-assets.amberstudent.com/images/verified-listings.svg"
              className="service-card-icon"
              alt="service-icon"
            />
            <h3 className="service-card-h">24x7 Assistance</h3>
            <p className="service-card-p">
              If you have a doubt or a query, we’re always a call away.
            </p>
          </div>
          <div className="service-card service-card-2">
            <img
              src="https://prod-static-assets.amberstudent.com/images/price-match-guarantee.svg"
              className="service-card-icon-1"
              alt="service-icon"
            />
            <h3 className="service-card-h">100% Verified Listings</h3>
            <p className="service-card-p">
              We promise to deliver what you see on the website.
            </p>
          </div>
        </div>

        <h2 className="cities-section-h">Thousands of properties globally</h2>
        <p className="cities-section-p">
          Explore affluent and cozy student homes near renowned universities and
          bustling capitals
        </p>

        <div className="countries-section">
          <div className="country-card country-card-active">
            <p className="country-name">London</p>
          </div>
          <div className="country-card country-card-inactive">
            <p className="country-name">Glasgow</p>
          </div>
          <div className="country-card country-card-inactive">
            <p className="country-name">Sydney</p>
          </div>
          <div className="country-card country-card-inactive">
            <p className="country-name">Liverpool</p>
          </div>
          <div className="country-card country-card-inactive">
            <p className="country-name">Melbourne</p>
          </div>
          <div className="country-card country-card-inactive">
            <p className="country-name">Manchester</p>
          </div>
          <div className="country-card country-card-inactive">
            <p className="country-name">sheffield</p>
          </div>
          <div className="country-card country-card-inactive">
            <p className="country-name">Birmingham</p>
          </div>
        </div>
        <ul className="thousands-of-properties-ul-container">
          {ThousandsOfPropertiesList.map(each => (
            <PropertyCard key={each.id} propertyDetails={each} />
          ))}
        </ul>
      </div>
      <div className="home-section-2">
        <h2 className="reviews-section-h">
          What do students have to say about us?
        </h2>
        <p className="cities-section-p">
          Over 1M students trust amber for their student housing needs ;)
        </p>

        <div className="rating-card">
          <img
            src="https://prod-static-assets.amberstudent.com/images/star.svg"
            alt="star"
          />
          <h4 className="rating-h">Trustpilot</h4>
          <h4 className="rating-ratio">4.8/5</h4>
        </div>
      </div>
    </div>
  )
}

export default App
