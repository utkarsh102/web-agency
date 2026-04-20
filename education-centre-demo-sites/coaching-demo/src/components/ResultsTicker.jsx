const results = [
  { name: 'Priya Sharma', exam: 'IAS 2024', rank: 23 },
  { name: 'Arjun Mehta', exam: 'IPS 2024', rank: 87 },
  { name: 'Neha Gupta', exam: 'IAS 2023', rank: 12 },
  { name: 'Rahul Kumar', exam: 'IRS 2024', rank: 45 },
  { name: 'Ananya Singh', exam: 'IFS 2024', rank: 31 },
  { name: 'Vikram Rao', exam: 'IAS 2024', rank: 68 },
  { name: 'Pooja Iyer', exam: 'State PCS', rank: 7 },
  { name: 'Amit Verma', exam: 'IPS 2023', rank: 102 },
  { name: 'Ritika Joshi', exam: 'IAS 2024', rank: 19 },
  { name: 'Saurabh Nair', exam: 'IRS 2024', rank: 55 },
]

const doubled = [...results, ...results]

export default function ResultsTicker() {
  return (
    <div className="overflow-hidden py-4 border-y border-border bg-card" id="results">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #0D0D14, transparent)', position: 'relative' }} />
      <div className="ticker-track flex gap-0 w-max items-center">
        {doubled.map((r, i) => (
          <div key={i} className="flex items-center gap-4 px-6 border-r border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0" />
            <span className="text-sm font-display font-semibold text-frost whitespace-nowrap">{r.name}</span>
            <span className="text-xs font-mono text-ember whitespace-nowrap">{r.exam}</span>
            <span className="text-xs font-mono text-frost/40 whitespace-nowrap">AIR {r.rank}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
