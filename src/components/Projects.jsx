import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import './Projects.css'

const projects = [
  {
    title: 'Harmony Furniture',
    typeKey: 'website',
    image: '/project-images/harmony-furniture.jpg',
  },
  {
    title: 'Joy Burger',
    typeKey: 'social',
    image: '/project-images/joy-burger.jpg',
  },
  {
    title: 'Mesti Café and Restaurant',
    typeKey: 'social',
    image: '/project-images/mesti-cafe.jpg',
  },
  {
    title: 'NT Fashion',
    typeKey: 'website',
    image: '/project-images/nt-fashion.jpg',
  },
  {
    title: '251 Delivery',
    typeKey: 'content',
    image: '/project-images/251-delivery.jpg',
  },
  {
    title: 'Eastern Flower Corporation',
    typeKey: 'event',
    image: '/project-images/eastern-flower.jpg',
  },
  {
    title: 'Akkoo Coffee',
    typeKey: 'paid',
    image: '/project-images/akkoo-coffee.jpg',
  },
]

function Projects() {
  const { t } = useLanguage()
  return (
    <section id="projects" className="projects">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-tag">{t.projects.tag}</p>
            <h2 className="section-title">{t.projects.title}</h2>
            <p className="section-sub">{t.projects.sub}</p>
          </div>
        </Reveal>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 100}>
              <figure className="project">
                <img src={project.image} alt={`${project.title} project`} loading="lazy" />
                <figcaption className="project__overlay">
                  <span>{t.projects.types[project.typeKey]}</span>
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
