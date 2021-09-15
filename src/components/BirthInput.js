function BirthInput({handleBirth,birth}) {

  return (
    <>
    <h4>生日</h4>
    <div className='birth-select'>
        <input className='input select-item' type='text' name='year' onChange={handleBirth} value={birth.year} placeholder='年' />
        <input className='input select-item' type='text' name='month' onChange={handleBirth} value={birth.month} placeholder='月' />
        <input className='input select-item' type='text' name='day' onChange={handleBirth} value={birth.day} placeholder='日' />
    </div>
    </>
  )
}

export default BirthInput;