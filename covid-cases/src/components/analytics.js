import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState, useEffect} from 'react'


export const Analytics = ()=>{
    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
 

    useEffect(() => {
        fetch("https://corona.lmao.ninja/v2/countries/")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              console.log(result)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

    //fetch URL : https://corona.lmao.ninja/v2/countries/


    function test(e){
        console.log('hello')
        var userInput = document.querySelector('.input').value
        console.log(userInput)

        var Url = 'https://corona.lmao.ninja/v2/countries/'+ userInput
        fetch(Url)
        .then(response => response.json())
        .then((data)=> {
            console.log(data)
            console.log('Country ' + data.country)
            var Cases = data.cases
            var Deaths = data.deaths
            console.log(Deaths)
            
        })
    }
    return(
        <div className='analytics'>
            <div className='analytics-intro'>
                <h2>Analytics</h2>

                <br/>
                <input type='text' className='input' placeholder='Search By Country name'></input>
                <span>
                    <button onClick={test}>Search</button>
                </span>

                <div className='g'>
                <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.country} {item.deaths}
          </li>
        ))}
      </ul>
                
                </div>
                      
            </div>
        </div>
    )
}