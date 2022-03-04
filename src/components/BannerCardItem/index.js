// Write your code here.
import './index.css'

const Cards = props => {
  const {cards} = props

  return (
    <div className={cards.className}>
      <li>
        <h1>{cards.headerText}</h1>
        <p>{cards.description}</p>
        <button>Show More</button>
      </li>
    </div>
  )
}

export default Cards
