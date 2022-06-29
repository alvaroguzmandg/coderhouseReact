import { Link } from "react-router-dom"
import React from "react"

export default function Footer (){

  return(
    <footer>
      <div className="footer--contenido">
          <div className="footer--informacion">
              <Link to="/"><h3>runClub</h3></Link>
          </div>
          <div className="footer--redes">
            <Link to="/uploader"><p className="footer--texto">UPLOADER</p></Link>
          </div>
      </div>
    </footer>
  )

}
