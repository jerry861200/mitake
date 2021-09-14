import { useState, useEffect} from 'react';
import './asset/styles/reset.css'
import './asset/styles/App.css';
import Form from './components/Form'
import AddressBook from './components/AddressBook'
import Search from './components/Search';

function App() {
  const [list,setList] = useState([]);
  const [filteredList, setFilteredList] = useState([])
  const [nameSearch,setNameSearch] = useState('')
  
  const filter = () => {
    const newList = list.filter((item) => {
      const reg = new RegExp(nameSearch.toLowerCase())
      return item.name.toLowerCase().match(reg)
    })
    setFilteredList(newList)
  }
  
  useEffect(()=>{
    if(localStorage.getItem('list')){
      console.log('getItem');
      setList(JSON.parse(localStorage.getItem('list')))
    } else{
      console.log('nono');
    }
  },[])
  useEffect(() => {
    setFilteredList(list)
    localStorage.setItem('list',JSON.stringify(list))
    console.log('cool');
  }, [list])
  
  return (
    <main className='app'>
      <Form setList={setList} />
      <Search filter={filter} nameSearch={nameSearch} setNameSearch={setNameSearch}/>
      <AddressBook filteredList={filteredList}/>
    </main>
  );
}

export default App;
