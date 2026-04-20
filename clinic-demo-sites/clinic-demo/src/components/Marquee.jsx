const items = [
  'Hydrafacial', '✦', 'Botox & Fillers', '✦', 'Chemical Peels',
  '✦', 'Laser Hair Removal', '✦', 'PRP Therapy', '✦',
  'Acne Treatment', '✦', 'Anti-Ageing', '✦', 'Skin Brightening',
  '✦', 'Hydrafacial', '✦', 'Botox & Fillers', '✦', 'Chemical Peels',
  '✦', 'Laser Hair Removal', '✦', 'PRP Therapy', '✦',
  'Acne Treatment', '✦', 'Anti-Ageing', '✦', 'Skin Brightening', '✦',
]

export default function Marquee() {
  return (
    <div className="overflow-hidden py-5 border-y border-border bg-card relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10"
        style={{ background: 'linear-gradient(90deg, #111010, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10"
        style={{ background: 'linear-gradient(-90deg, #111010, transparent)' }} />
      <div className="marquee-track flex gap-8 w-max">
        {items.map((item, i) => (
          <span key={i}
            className={`whitespace-nowrap text-sm font-mono tracking-widest ${
              item === '✦' ? 'text-blush' : 'text-muted uppercase'
            }`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
