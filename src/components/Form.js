import { useState } from 'react';
import Input from './Input'
import '../asset/styles/Form.css'
function Form({ setList }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', birthday: new Date() })
  const [error, setError] = useState(false);
  const checkForm = () =>{
    console.log('check form');
    if (form.name.length === 0 || form.phone.length === 0 || form.email.length === 0) return false;
    if(isNaN(parseFloat(form.phone))) return false;
    return true;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(checkForm()){
      setError(false)
      setList((prev) => {
        return [...prev, form]
      })
      setForm({ name: '', phone: '', email: '', birthday: new Date() })
    }else{
      setError(true)
    }
    
  };
  const handleChange = (e) => {
    console.log('handleChange');
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input index='name' value={form.name} handleChange={handleChange} />
      <Input index='phone' value={form.phone} handleChange={handleChange} />
      <Input index='email' value={form.email} handleChange={handleChange} />
      <div className="submit-container">
        <small className={`${error ?'submit-error show' :'submit-error'}`}>內容不可空白或格式有誤</small>
        <button type='submit' className='submit-btn'>新增使用者</button>
      </div>

    </form>
  )
}
export default Form;