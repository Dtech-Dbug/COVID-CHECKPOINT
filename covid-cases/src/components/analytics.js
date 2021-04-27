
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
             // setItems(result);
              console.log(result)
              console.log('UseEfect ran , results are ' + result)
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
         //setItems(data)
          //console.log(items)
            console.log(data)
          var  fetchedData = Object.entries(data)
          //setItems(fetchedData)
          console.log('After converting obj to array ' +fetchedData)
            console.log('Country ' + data.country)
            setItems([data])
            console.log( data)
            var Cases = data.cases
            var Deaths = data.deaths
            var Image = data.countryInfo.flag
            console.log(Deaths)

            
            
            
        })
    }
    return(
        <div className='analytics'>
            <div className='analytics-intro'>
                <h2>Analytics</h2>

                <p>
                  Enter name of a country to view current covid conditions.
                </p>

                <p>
                  <i>
                    Please note the data may be tentative and may not be 100% acurate.
                  </i>
                </p>

                <br/>
                <input type='text' className='input' placeholder='Search By Country name'></input>
                <span>
                    <button onClick={test}>Search</button>
                </span>

                <br/>

                <div className='result-card'>
               <ul>
                 {items.map(item =>{

                 return(
                   <div className='data-card'>
                    <img src={item.countryInfo.flag}></img>
                    <h3>{item.country}</h3>
                    <h4>Continent : {item.continent}</h4>
                    <li>Population : {item.population}</li>
                    <li>Cases : {item.cases}</li>
                    <li>Cases/ Milion : {item.casesPerOneMillion}</li>
                    <li>Critical : {item.critical}</li>
                    <li>Recovered : {item.recovered}</li>
                    <li>Deaths : {item.deaths}</li>
                    <li>Today Deaths : {item.todayDeaths}</li>
                    <li>Today Recovered : {item.todayRecovered}</li>
                    
                   </div>
                 )
                 })}
               </ul>
            
 
          
          </div>

                
                      
            </div>
        </div>
    )
}