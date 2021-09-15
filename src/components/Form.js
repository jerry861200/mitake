import { useState, useEffect } from 'react';
import Input from './Input'
import '../asset/styles/Form.css'
import BirthInput from './BirthInput'

function Form({ setList, editId, list, setEditId }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', birthday: '', show: false })
  const [error, setError] = useState(false);
  const [birth, setBirth] = useState({
    year: '',
    month: '',
    day: ''
  })
  useEffect(() => {
    if (editId !== null) {
      setForm(list[editId])
      formIntoBirth()
    }
  }, [editId])

  useEffect(() => {
    birthIntoForm()
  }, [birth])

  const checkForm = () => {
    if (!checkBirth()) return false;
    if (form.name.length === 0 || form.phone.length === 0 || form.email.length === 0 || form.birthday.length === 0) return false;
    if (isNaN(parseFloat(form.phone))) return false;
    return true;
  }
  const handleSubmit = (e) => {
    console.log('handleSubmit');
    e.preventDefault();
    if (checkForm() && editId === null) {
      setError(false)
      setList((prev) => {
        return [...prev, form]
      })
      setForm({ name: '', phone: '', email: '', birthday: '', show: false })
      setBirth({ year: '', month: '', day: '' })
    } else if (checkForm() && editId !== null){
      console.log('handleEdit');
      setError(false)
      setList((prev)=>{
        return prev.map((item, index) => {
          if (index !== editId) {
            return item;
          } else {
            return form;
          }
        })
      });
      setForm({ name: '', phone: '', email: '', birthday: '', show: false })
      setBirth({ year: '', month: '', day: '' })
      setEditId(null)
    }
     else {
      setError(true)
    }
  };
  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  };

  //birthSelect
  const checkBirth = () => {
    const { year, month, day } = birth;
    const intYear = parseInt(year);
    const intMonth = parseInt(month);
    const intDay = parseInt(day);

    if (isNaN(intYear) || intYear > 2021 || intYear < 1921) {
      return false
    }

    if (isNaN(intMonth) || intMonth > 12 || intMonth < 1) {
      return false;
    }

    if (isNaN(intDay) || intDay > 31 || intDay < 1) {
      return false;
    }
    return true
  }
  const handleBirth = (e) => {
    const name = e.target.name;
    const value = e.target.value

    setBirth((prev) => {
      return {
        ...prev, [name]: value
      }
    })

  }
  const birthIntoForm = () => {
    const birthday = `${birth.year}/${birth.month}/${birth.day}`
    setForm((prev) => {
      return { ...prev, birthday: birthday }
    })
  }
  const formIntoBirth = () => {
    const newBirth = list[editId].birthday.split('/');
    setBirth({ year: newBirth[0], month: newBirth[1], day: newBirth[2] })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input index='name' value={form.name} handleChange={handleChange} />
      <Input index='phone' value={form.phone} handleChange={handleChange} />
      <Input index='email' value={form.email} handleChange={handleChange} />
      <BirthInput handleBirth={handleBirth} birth={birth} />
      <div className="submit-container">
        <small className={`${error ? 'submit-error show' : 'submit-error'}`}>內容不可空白或格式有誤</small>
        {
          (editId !== null) ? <button type='submit' className='submit-btn'>修改</button>
            : <button type='submit' className='submit-btn'>新增使用者</button>
        }
      </div>

    </form>
  )
}
export default Form;