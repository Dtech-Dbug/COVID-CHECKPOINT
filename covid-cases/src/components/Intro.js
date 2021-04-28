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

                    
          {items.map(item => {

              return(
                  <div className='overall-data-card'>

                    <div className='world-stats'style={{display:'flex', justifyContent:'flex-start', flexDirection:'column'}}>
                      <h3 style={{color:'grey'}}>
                        {item.cases}
                      </h3>

                      <h3>
                        Cases
                      </h3>

                    </div>
                    
                    <div className='world-stats'style={{display:'flex', justifyContent:'flex-start', flexDirection:'column'}}>
                      <h3 style={{color:'green'}}>
                        {item.recovered}
                      </h3>

                      <h3>
                        Recovered
                      </h3>

                    </div>
                     
                    <div className='world-stats'style={{display:'flex', justifyContent:'flex-start', flexDirection:'column'}}>
                      <h3 style={{color:'red'}}>
                        {item.deaths}
                      </h3>

                      <h3>
                        Deaths
                      </h3>

                    </div>
                 
                  </div>

              )
         

         





          

          
          

         
          
              })}
          
     
             </div>

            </div>
        </div>
    )
}