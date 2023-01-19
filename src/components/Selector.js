export default function Selector({ setPlaying, setGenre, genre }) {
  const handleSelection = (e) => {
    setGenre(e.target.value)
  }
  const handleClick = () => {
    setPlaying(true)
  }
  console.log('genre:', genre)
  return (
    <div>
      <p>Select a Genre</p>
      <select onChange={handleSelection}>
        <option value={'horror'}>Horror</option>
        <option value={'action'}>Action</option>
        <option value={'sci-fi'}>Sci-Fi</option>
      </select>
      <button onClick={handleClick}>Create Board</button>
    </div>
  )
}
