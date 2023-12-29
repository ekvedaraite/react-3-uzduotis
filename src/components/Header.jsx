import "../styles/Header.css"

const Header = () => {
  return (
    <>
        <header>
            <div className="container">
                <h1>Title</h1>
                <p>Some about text</p>
                <p>in two lines</p>
                <button>Button</button>
            </div>
            <div className="cover"></div>
        </header>
    </>
  )
}

export default Header