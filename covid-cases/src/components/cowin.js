import Image2 from '../Images/Image2.jpg'


export const Cowin = ()=>{


    return(
        <div className='announcement'>
            <h2>Public Service Announcement</h2>


            <div className='vacc-reg-info'>
                <div className='Image'>
                    <img src={Image2}></img>
                </div>

                <div className='call-to-action'>

                    <p>
                        Let us get out of this Pandemic.
                        Register for <h3>#Largest <span style={{color:'yellow'}}><i>Vaccine</i></span> Drive.</h3>
                    </p>
                    <button>Register</button>

                    <p> or</p>

                    <p>
                        Visit: <a href='https://www.cowin.gov.in/home'>
                        https://www.cowin.gov.in/home
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}