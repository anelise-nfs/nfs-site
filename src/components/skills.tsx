import '../assets/css/skills.css'

type SkillItem = {
  label: string
  icon: string
}

type SkillsProps = {
  items?: SkillItem[]
}

const defaultItems: SkillItem[] = [
  { label: 'HTML', icon: '/images/skill_html.png' },
  { label: 'CSS', icon: '/images/skill_css.png' },
  { label: 'JavaScript', icon: '/images/skill_javascript.png' },
  { label: 'React', icon: '/images/skill_react.png' },
  { label: 'Tailwind', icon: '/images/skill_tailwind.png' },
  { label: 'Vite', icon: '/images/skill_vite.png' },
  { label: 'GitHub', icon: '/images/skill_github.png' },
  { label: 'Figma', icon: '/images/skill_figma.png' },
  { label: 'Claude', icon: '/images/skill_claude.png' },
  { label: 'Illustrator', icon: '/images/skill_illustrator.png' },
  { label: 'Photoshop', icon: '/images/skill_photoshop.png' },
  { label: 'InDesign', icon: '/images/skill_indesign.png' },
  { label: 'Asana', icon: '/images/skill_asana.png' },
  { label: 'Jira', icon: '/images/skill_jira.png' },
]

function Skills({ items = defaultItems }: SkillsProps) {
  return (
    <div className="skills">
      <h3>Technical Toolkit</h3>
      <div className="skills__track">
        {[...items, ...items].map((item, index) => (
          <div
            className="skills__item"
            key={index}
            aria-hidden={index >= items.length || undefined}
          >
            <div className="skills__icon">
              <img src={item.icon} alt={item.label} />
            </div>
            <span className="skills__label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
