import { useState, useEffect } from 'react';
import './asset/styles/reset.css'
import './asset/styles/App.css';
import Form from './components/Form'
import AddressBook from './components/AddressBook'
import Search from './components/Search';

function App() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([])
  const [nameSearch, setNameSearch] = useState('')
  const [editId,setEditId] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('list')) {
      console.log('getItem');
      setList(JSON.parse(localStorage.getItem('list')))
    } else {
      console.log('nono');
    }
  }, [])
  useEffect(() => {
    setFilteredList(list)
    localStorage.setItem('list', JSON.stringify(list))
    console.log('cool');
  }, [list])

  const filter = () => {
    const newList = list.filter((item) => {
      const reg = new RegExp(nameSearch.toLowerCase())
      return item.name.toLowerCase().match(reg)
    })
    setFilteredList(newList)
  }
  const showDropList = (id) => {
    console.log('showDropList');
    const newFilteredList = filteredList.map((item, index) => {
      if (index === id) {
        return { ...item, show: !item.show }
      }
      return item
    })
    setFilteredList(newFilteredList)
  }
  const deleteItem = (name) =>{
    const newList = list.filter((item)=>{
      return item.name !== name
    })
    setList(newList)
  }
  const editItem = (name)=>{
    const index = list.findIndex(item=>item.name === name)
    setEditId(index)
    
  }

  return (
    <main className='app'>
      <Form setList={setList} editId={editId} list={list} setEditId={setEditId} />
      <div className='right-side'>
        <Search filter={filter} nameSearch={nameSearch} setNameSearch={setNameSearch} />
        <AddressBook filteredList={filteredList} showDropList={showDropList} deleteItem={deleteItem} editItem={editItem} />
      </div>
      
    </main>
  );
}

export default App;
