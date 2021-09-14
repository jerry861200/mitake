function Search({ setFilteredList}) {
  const nameSearch = ''
  return (
    <section className='search-container'>
      <input type="text" placeholder='搜尋' value={nameSearch} readOnly className='search-input'/>
      <button type='button' className='search-btn' onClick={() => setFilteredList(nameSearch)}>搜尋</button>
    </section>
  )
}
export default Search;