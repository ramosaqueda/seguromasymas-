import React from 'react';
import '../assets/css/components/About.scss';
import about from '../assets/images/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faUserTie } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Acera de...</h2>
          <h3>
            A&A Más <span>Corredores de Seguros</span>
          </h3>
          <p>
            A&A Más Corredores de seguros está presente desde 1998, una compañà
            familair formada e integrada por profesionales de vasta trayectoria
            en el mercado. Nuestros profesionales manejan las diferentes áreas
            de Seguros, lo que le permite a nuestros clientes sentirse apoyados
            en todas sus desciones. Manejamos una diversa cartera de servicios
            con las principlaes Aseguradoras nacionales e internacionales que
            operan en el país.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <img src={about} className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>Motivos de por que elegirnos</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <i>
                  <FontAwesomeIcon icon={faCheckDouble} />
                </i>
                <div>
                  <h5>Seguridad y confianza</h5>
                  <p>
                    Somos transparentes, te ofrecemos protección en el área de
                    salud y seguros generales a precios éticos, sin comisiones
                    fantasmas e incentivos perversos.
                  </p>
                </div>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faUserTie} />
                </i>
                <div>
                  <h5>Profesionales independientes</h5>
                  <p>
                    Sin duda, contratar a un corredor como mediador de seguros
                    es la mejor opción para tu empresa. Sin vinculación con las
                    compañías los corredores de seguros están en medio de la
                    operación, mediando para que los riesgos asegurados queden
                    completamente cubiertos en caso de siniestro.
                  </p>
                </div>
              </li>
            </ul>
            <p>
              Buscamos entre las compañías aseguradoras cuál es la mejor opción
              para ti. Realizamos un estudio financiero, analizamos los posibles
              riesgos y estudiamos las mejores ofertas del mercado según tu
              actividad. En ocasiones, nos hemos encontrado con empresas que no
              tienen totalmente cubierta su actividad y sus riesgos, con pólizas
              generales y coberturas básicas y en caso de siniestro el daño es
              doble.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
