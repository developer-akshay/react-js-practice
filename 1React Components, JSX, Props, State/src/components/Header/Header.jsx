import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

const getRandom = (max) => {
  return Math.floor(Math.random() * (max + 1))
}

const Header = () => {
  const description = reactDescriptions[getRandom(2)]

  return (
    <header>
      {/* In below way, images can not be optimized & also during bundle process it might get ignored; therefore we should use relative path */}
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {/* O/ping dynamic value */}
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

export default Header