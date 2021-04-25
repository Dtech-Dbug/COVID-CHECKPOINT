import Image1 from '../Images/Image1.jpg'


export const Intro = ()=>{

    return(
        <div className='Intro-Component'>

            <div className='contents'>
                <h2>Stay Safe.Use Mask and Sanitizer.</h2>

                <p>
                    A message for all of you. As the current Pandemic situation is taking a drastic upsurge, being careful and following proper protocols have become important, more than ever.
                </p>

                <button>
                    Read More
                </button>

                
            </div>


             <div className='Image'>
                 
                 <img  src={Image1}></img>


             </div>

        </div>
    )
}