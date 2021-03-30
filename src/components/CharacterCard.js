import React from 'react'
import Character from './Character'
import LoadingScr from './LoadingScr'
import '../css/style.css'

function CharacterCard({data , Loading}){
    
    return Loading ? (<LoadingScr /> ):

(   <section className='cards'>
        {
                        data.map((item) => {
                            console.log(item)
                            return <Character key ={item.char_id} 
                            item ={item}
                        />  
                        
                        })
                        
                    }
                    </section>)
            
    
           
    
}

export default CharacterCard
