function Search({ filter, nameSearch, setNameSearch}) {
  return (
    <section className='search-container'>
      <input type="text" placeholder='姓名搜尋' className='search-input' onChange={(e) => setNameSearch(e.target.value)}/>
      <button type='button' className='search-btn' onClick={filter}>搜尋</button>
    </section>
  )
}
export default Search;