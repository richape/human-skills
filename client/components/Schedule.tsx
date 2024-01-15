import { useState } from 'react'

const TestSchedule: React.FC = () => {
  const [phaseOne, setPhaseOne] = useState<string | null>(null)
  const [phaseTwo, setPhaseTwo] = useState<string | null>(null)
  const [phaseThree, setPhaseThree] = useState<string | null>(null)

  const phaseOneOptions = ['Week 1', 'Week 2', 'Week 3']
  const phaseTwoOptions = ['Week 4', 'Week 5', 'Week 6']
  const phaseThreeOptions = ['Week 7', 'Week 8', 'Week 9']
}

function Schedule() {
  return (
  <div>
    <div>
      <label>Phase One</label>
      <select onChange={(e) => setPhaseOne(e.target.value)} value={phaseOne || ''}>
        <option value="">Select Week</option>
        {phaseOneOptions.map((week, index) => (
          <option key={index} value={week}>
            {week}
          </option>
        ))}
      </select>
    </div>
  
    <div>
      <span>Phase Two</span>
      <select onChange={(e) => setPhaseTwo(e.target.value)} value={phaseTwo || ''}>
        <option value="">Select Week</option>
        {phaseTwoOptions.map((week, index) => (
          <option key={index} value={week}>
            {week}
          </option>
        ))}
      </select>
    </div>
  
    <div>
      <span>Phase Three</label>
      <select onChange={(e) => setPhaseThree(e.target.value)} value={phaseThree || ''}>
        <option value="">Select Week</option>
        {phaseThreeOptions.map((week, index) => (
          <option key={index} value={week}>
            {week}
          </option>
        ))}
      </select>
    </div>
  </div>
  )
}

export default Schedule
