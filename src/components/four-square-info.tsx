import '../assets/css/four-square-info.css'

type SquareItem = {
  icon: React.ReactNode
  title: string
  text: string
}

type FourSquareInfoProps = {
  items: [SquareItem, SquareItem, SquareItem, SquareItem]
}

function FourSquareInfo({ items }: FourSquareInfoProps) {
  return (
    <div className="four-square">
      {items.map((item, index) => (
        <div className="four-square__card" key={index}>
          <div className="four-square__icon">{item.icon}</div>
          <h3 className="four-square__title">{item.title}</h3>
          <p className="four-square__text">{item.text}</p>
        </div>
      ))}
    </div>
  )
}

export default FourSquareInfo
