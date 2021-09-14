function Input({ index, value, handleChange }) {
  const type = index === 'email' ? 'email' : 'text'
  const labelMap = {
    email: '信箱',
    name: '姓名',
    phone: '電話',
  }
  console.log(index, value);
  return (
    <div className="form-control">
      <label htmlFor={index} className='label'>
        {labelMap[index]}
      </label>
      <input className='input' type={type} name={index} id={index} value={value} onChange={handleChange} />

    </div>
  )
}

export default Input;