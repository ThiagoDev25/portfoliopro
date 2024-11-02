import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import  { ProjectCard } from "../components/ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projSite1 from "../assets/img/LP2.png";
import projSite2 from "../assets/img/LP1.png";
import projSite3 from "../assets/img/LP3.png";
import projAds1 from "../assets/img/ads1.png";
import projAds2 from "../assets/img/ads2.png";
import projAds3 from "../assets/img/ads3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    
    const projects = [
        {
            title: "Wifi House",
            description: "Comércio de tecnologia inteligente",
            imgUrl: projImg1,
          },
          {
            title: "Samara Nail Design",
            description: "Profissional em unhas",
            imgUrl: projImg2,
          },
          {
            title: "Prime Açai",
            description: "Açaiteria Delivery", 
            imgUrl: projImg3,
          },
          {
            title: "Zero Grau",
            description: "Depósito de bebidas",
            imgUrl: projImg4,
          },
          {
            title: "LuNET Telecom",
            description: "Provedor de internet",
            imgUrl: projImg5,
          },
          {
            title: "ENERGIAFIT GYM",
            description: "Academia e CT",
            imgUrl: projImg6,
          },
    ]
    const projectsSite = [
      {
          title: "Hype StreetWear",
          description: "E-Commerce de roupas",
          imgUrl: projSite1,
        },
        {
          title: "Vanguarda Teatro",
          description: "Escola de Artes",
          imgUrl: projSite2,
        },
        {
          title: "Sistema de Controle de Funcionarios",
          description: "Contoso Pets", 
          imgUrl: projSite3,
        },
  ]
    const projectsAds = [
      {
        title: "Meta Ads",
        description: "Ferramenta de gestão de Tráfego do Facebook e Instagram",
        imgUrl: projAds1,
      },
      {
        title: "Potencialize agora os seus resultados!",
        description: "A melhor agência de tráfego pago da região!",
        imgUrl: projAds3,
      },
      {
        title: "Google Ads",
        description: "Ferramenta de gestão de Tráfego do Google, Youtube, entre outros",
        imgUrl: projAds2,
      },
    ]



    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projetos</h2>
                  <p>Nossa Agência é especializada em:<br/>
                   - Design para redes sociais<br/>
                   - Sites completos e Landing Pages<br/>
                   - Desenvolvimento de Softwares<br/>
                   - Social Media<br/>
                   - Tráfego Pago</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Sites & Sistemas</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tráfego Pago</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        
                        <Row>
                          {
                            projectsSite.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                        <p> Temos experiências em desenvolvimento de sites e Landing Pages, além de sistemas para sua gestão empresarial ou Controle de Vendas</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {
                            projectsAds.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                        <p>Somos especialistas em Meta Ads e Google Ads, otimizando seus anúncios com excelência!<br/>
                            Atuamos no segmento de negócios locais, e-commerces e Infoprodutos!<br/>
                              Venha atingir novas metas juntos!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    )
}