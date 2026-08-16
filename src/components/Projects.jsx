import Reveal from './Reveal'
import './Projects.css'

const projects = [
  {
    title: 'Harmony Furniture',
    type: 'Website Design & Development',
    image: '/project-images/harmony-furniture.jpg',
  },
  {
    title: 'Joy Burger',
    type: 'Social Media Management',
    image: '/project-images/joy-burger.jpg',
  },
  {
    title: 'Mesti Café and Restaurant',
    type: 'Social Media Management',
    image: '/project-images/mesti-cafe.jpg',
  },
  {
    title: 'NT Fashion',
    type: 'Website Design & Development',
    image: '/project-images/nt-fashion.jpg',
  },
  {
    title: '251 Delivery',
    type: 'Content Production',
    image: '/project-images/251-delivery.jpg',
  },
  {
    title: 'Eastern Flower Corporation',
    type: 'Event Promotion & Influencer Marketing',
    image: '/project-images/eastern-flower.jpg',
  },
  {
    title: 'Akkoo Coffee',
    type: 'Paid Advertising',
    image: '/project-images/akkoo-coffee.jpg',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-tag">Projects</p>
            <h2 className="section-title">Work that speaks for itself.</h2>
            <p className="section-sub">
              A selection of brands we’ve helped grow.
            </p>
          </div>
        </Reveal>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 100}>
              <figure className="project">
                <img src={project.image} alt={`${project.title} project`} loading="lazy" />
                <figcaption className="project__overlay">
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
