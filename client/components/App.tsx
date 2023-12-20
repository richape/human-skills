import { useFruits } from '../hooks/useFruits.ts'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="bg-purple-600 text-yellow-400 p-5 text-xl font-mono text-center">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
      </div>
    </>
  )
}

export default App
