import './App.css'
import { HandleDocument } from './helpers/prismic/perfil'

function App() {
  const contentDocument = HandleDocument()

  return ( 
    <div className="container">

        <div className="perfil">
          <img src={contentDocument?.image} alt="" />
        </div>

        <a href="https://instagram.com/wendel.8" target="_blank">@{contentDocument?.instaName}</a>

        <ul className="links_container">
            {contentDocument?.links?.map((element, index) => (
              <li className="links" key={index}>
                <a href={element.link} target="_blank">
                  <i className={`bx ${element.icon}`}></i>
                  {element.nameButton.toUpperCase()}
                </a>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default App
