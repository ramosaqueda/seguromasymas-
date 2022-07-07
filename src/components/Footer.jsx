import React from 'react';
import '../assets/css/components/Footer.scss';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>¿Quiere Recibir información Períodica? </h4>
              <p>
                Registre su correo y enviaremos periodidcamente información de
                seguros
              </p>

              <input type="email" name="email" />
              <input type="submit" value="Subscribe" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>
                A&A<span>+</span>
              </h3>
              <p>
                Av. Pacífico <br />
                3333
                <br />
                LA Serena <br />
                <br />
                <strong>Phono:</strong> +56 9 66666666
                <br />
                <strong>Email:</strong> contacto@segurosayamas.cl
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Menu</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="/">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/about">Acerca de Seguros A&A+</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/servicios">Servicios</a>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/privacidad">Politica de Privacidad </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Principales Servicios</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <p>Seguros de Vida</p>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <p>Seguros de Automotriz</p>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <p>Seguros de Maritimo</p>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Nuestras Redes Sociales</h4>
              <p>Pongamonos en conacto por cualquiera de nuestas RRSS</p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>

                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="copyright">
          &copy; Copyright{' '}
          <strong>
            <span>Seguros A&A +</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="/">RamosAqueda DEV</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
