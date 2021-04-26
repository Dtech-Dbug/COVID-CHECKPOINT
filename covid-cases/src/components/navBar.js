import {Link} from 'react-router-dom'
import {Resources} from './resources'

export  const NavBar = ()=> {

    const style = {
        textDecoration : 'none'
    }



    return (
        <div className='navigation'>
            <h1>CovidApp</h1>

            <div className='nav-Lists'>
                <ul>
                    <Link to='/' style={style}>
                    <li>Home</li>
                    </Link>
                    
                    <Link style={style} to='/analytics'>
                    <li>Analytics</li>
                    </Link>
                    
                    
                   
                   <Link style={style} to='/resources'>
                   <li>Resources</li>
                   </Link>
                   
                
                    
                </ul>
            </div>
        </div>
    )

}