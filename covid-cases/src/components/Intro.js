import Image1 from '../Images/Image1.jpg'
import {useEffect , useState} from 'react'


export const Intro = ()=>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://corona.lmao.ninja/v2/all?yesterday")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems([result]);
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
    
  

    return(
        <div className='Intro-Component'>
            <h2>Stay Safe.Use Mask and Sanitizer.</h2>

            <div className='contents'>
                

              <div className='message'>
              <p>
                    A message for all of you. As the current Pandemic situation is taking a drastic upsurge, being careful and following proper protocols have become important, more than ever.
                </p>
                  

                  <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/technical-guidance'>
                  <button href=''>
                    Read More
                </button>
                  </a>

                  <br/>
                  <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/technical-guidance'>
                    Visit: Technical Guidelines by WHO
                  </a>
               

              </div>
                
             <br/>
             

             <div className='world-cases-overview'>
                 <h3>WorldWide Stats</h3>

                 <ul>     
          {items.map(item => {

              return(
                  <div className='data-card'>
                       <li key={item.id}>
            Affected Countries: {item.affectedCountries}
          </li>

              <li key={item.id}>
            Cases: {item.cases}
          </li>

          <li key={item.id}>
            Recovered: {item.recovered}
          </li>

          <li key={item.id}>
            Critical: {item.critical}
          </li>

          <li key={item.id}>
            Deaths: {item.deaths}
          </li>

          <li key={item.id}>
            Cases/Million: {item.casesPerOneMillion}
          </li>

          <li key={item.id}>
            Deaths/Million: {item.deathsPerOneMillion}
          </li>
                  </div>

              )
         

         





          

          
          

         
          
              })}
          </ul>
     
             </div>

            </div>
        </div>
    )
}