import '../assets/css/skills.css'

type SkillItem = {
  label: string
}

type SkillsProps = {
  items?: SkillItem[]
}

const defaultItems: SkillItem[] = [
  { label: 'Branding' },
  { label: 'Strategy' },
  { label: 'Development' },
  { label: 'Design' },
  { label: 'SEO' },
  { label: 'Marketing' },
  { label: 'Analytics' },
  { label: 'Content' },
  { label: 'Social' },
  { label: 'Automation' },
  { label: 'UX/UI' },
  { label: 'CMS' },
  { label: 'Email' },
  { label: 'Video' },
]

function Skills({ items = defaultItems }: SkillsProps) {
  return (
    <div className="skills">
      <h2>Technical Skills</h2>
      <div className="skills__track">
        {[...items, ...items].map((item, index) => (
          <div
            className="skills__item"
            key={index}
            aria-hidden={index >= items.length || undefined}
          >
            <div className="skills__icon">
              <svg viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="1" height="1" fill="#d0d0d0" rx="0.08" />
              </svg>
            </div>
            <span className="skills__label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
