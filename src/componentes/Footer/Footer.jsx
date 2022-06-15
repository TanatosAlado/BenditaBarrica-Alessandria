import React from 'react'
import './Footer.css'
import bienvenida from '../../images/bienvenida.png'
import insta from '../../images/instagramIcon.png'
import facebook from '../../images/facebookIcon.png'
import whatsapp from '../../images/whatsappIcon.png'

import { Link } from 'react-router-dom';


function Footer() {
  return (
   
    <>
    
    <footer id="footer" className="pie-pagina">
                <div className="grupo-2">
                    <small>El consumo excesivo es perjudicial para la salud - Si bebe, no conduzca</small>
                </div>
                <div className="grupo-1">
                    <div className="box integral">
                        <figure>
                            <div className="traslado">
                            <Link className='Link' to='/'>
                                <img src={bienvenida} alt="logo" />
                            </Link>
                            </div>
                        </figure>
                    </div>
                    <div className="box nosotros">
                        <h2>Sobre Nosotros</h2>
                        <p>San Martin 1254, Santa Fe, Santa Fe </p>
                        <p> Punto de Retiro </p>
                        <p>Teléfono Central: (342) 5289170</p>
                    </div>
                    <div className="box redes">
                        <h2>Siguenos</h2>
                        <div className="red-social">
                            <a href="https://api.whatsapp.com/send?phone=+5493425289170/"><img width="100%" src={whatsapp}></img></a>
                            <a href="#"><img width="100%" src={insta}></img></a>
                            <a href="#"><img width="100%" src={facebook}></img></a>
                        </div>    
                    </div>
                </div>
                <div className="grupo-2">
                    <small>&copy; 2022 <b>Integral Soluciones informáticas</b> - Todos los derechos reservados</small>
                </div>
        </footer>
    
    </>



  )
}

export default Footer