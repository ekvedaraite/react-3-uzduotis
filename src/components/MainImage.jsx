import defaultWomenImage from '../images/women.jpg'

const MainImage = ({women, text}) => {

const handleClick = (e) => {
    e.target.parentElement.style.background = "red"
}

  return (
    <div className="image" onClick={handleClick}>
        <img src={women || "Women Image"} alt="Women Image" />
        <p>{text ? text : "Text"}</p>
    </div>
  )
}

export default MainImage