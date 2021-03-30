import Axios from 'axios';
import './App.css';
import {useEffect, useState} from 'react'
import Header from './components/Header'
import CharacterCard from './components/CharacterCard'
import Search from './components/Search'
import './css/style.css'

function App() {

  const [Data, setData] = useState([])
  const [search, setSearch] = useState()
  const [Loading, setLoading] = useState(false)
  useEffect(()=> {
    const getData = async ()=> {
      setLoading(true)
      const result = await Axios(`https://www.breakingbadapi.com/api/characters?name=${search}`)
      
      setData(result.data)
      setLoading(false)
            
    }
    getData()
  },[search])
  
  return (
    <div className="App container">
    <Header /> 
    <Search getQuery={(q) => setSearch(q)} />
    <CharacterCard Loading= {Loading} data={Data} />
   
    
    </div>
  );
}

export default App;
