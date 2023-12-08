import './index.css'
import Header from './components/Header'
import Card from './components/Card'
import travelData from './components/travel-data'

function App() {

  const cards = travelData.map(cardData => {
    return <Card
      key={cardData.id}
      cardData={cardData}
      />
  })

  return (
    <>
      <Header />
      <div className="cards-array-container">
        {cards}
      </div>
    </>
  )
}

export default App
