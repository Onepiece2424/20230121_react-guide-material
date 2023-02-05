const AnimalFilter = ({ filterState }) => {

  // filterStateから分割代入で取得
  const [filterVal, setFilterVal] = filterState ;

  return (
    <input
      type="text"
      value={filterVal}
      onChange={(e) => setFilterVal(e.target.value)}
    />
  )
}

export default AnimalFilter
