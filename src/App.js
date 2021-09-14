import {useState} from 'react';
import './asset/styles/reset.css'
import './asset/styles/App.css';
import Form from './components/Form'
import AddressBook from './components/AddressBook'

function App() {
  const [list,setList] = useState([]);
  
  return (
    <main className='app'>
      <Form setList={setList}/>
      <AddressBook list={list}/>
    </main>
  );
}

export default App;
