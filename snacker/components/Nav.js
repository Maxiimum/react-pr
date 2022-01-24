import '../css/nav.css';
import logo_Btn from '../images/snacker_logo.svg';
import Hamburger_Btn from '../images/hamburger.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



function hamburger_click(){
    const burger_btn = document.querySelector('.hamburger_btn');
    const menu = document.querySelector('.nav_menu');
    const account_menu = document.querySelector('.nav_account');

    burger_btn.addEventListener('click', () => {
        menu.classList.toggle('active');
        account_menu.classList.toggle('active');
    });
    
}

function Nav(){
    let navigate = useNavigate();

    useEffect(() => {
        hamburger_click();
    },[])

    

    return(
        <nav className="navbar" >
            <div className='nav_logo' onClick={()=>{navigate('/');}}>
                <img src={logo_Btn} alt='ang'></img>
            </div>
            <div className='nav_menu'>
                <li>스낵커란?</li>
                <li>스낵</li>
                <li>광장</li>
                <li>문의</li>
            </div>
            <div className='nav_account'>
            <button className='nav_login'>로그인</button>
            <button className='nav_join'>회원가입</button>
            </div>
            <div className='hamburger_btn'><img src={Hamburger_Btn} alt="burger"></img></div>
        </nav>
        
    )
}

export default Nav;