import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import './Projects.css'

const projects = [
  {
    title: 'Harmony Furniture',
    typeKey: 'website',
    resultKey: 'harmony',
    image: '/project-images/harmony-furniture.jpg',
  },
  {
    title: 'Joy Burger',
    typeKey: 'social',
    resultKey: 'joy',
    image: '/project-images/joy-burger.jpg',
  },
  {
    title: 'Mesti Café and Restaurant',
    typeKey: 'social',
    resultKey: 'mesti',
    image: '/project-images/mesti-cafe.jpg',
  },
  {
    title: 'NT Fashion',
    typeKey: 'website',
    resultKey: 'nt',
    image: '/project-images/nt-fashion.jpg',
  },
  {
    title: '251 Delivery',
    typeKey: 'content',
    resultKey: 'delivery',
    image: '/project-images/251-delivery.jpg',
  },
  {
    title: 'Eastern Flower Corporation',
    typeKey: 'event',
    resultKey: 'eastern',
    image: '/project-images/eastern-flower.jpg',
  },
  {
    title: 'Akkoo Coffee',
    typeKey: 'paid',
    resultKey: 'akkoo',
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
                <div className="project__media">
                  <img src={project.image} alt={`${project.title} project`} loading="lazy" />
                </div>
                <figcaption className="project__body">
                  <span className="project__category">{t.projects.types[project.typeKey]}</span>
                  <h3 className="project__title">{project.title}</h3>
                  <p className="project__desc">{t.projects.results[project.resultKey]}</p>
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
