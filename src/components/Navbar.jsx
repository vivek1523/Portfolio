import { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
   const handleScroll = ()=>{
     const isScrolled = window.scrollY > 10;
     setScrolled(true);
   }
   window.addEventListener("scroll", handleScroll);

   return () => window.removeEventListener("scroll", handleScroll);
  },[])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
     <div className='inner'>
      <a className='logo text-3xl flex flex-row gap-2' href='#vivek'>
      <img src='/VIVEK.png' height={12} width={110} alt='Vivek Logo'/>
      {/* <p className='mt-3'>𝓥𝓲𝓿𝓮𝓴</p> */}
      </a>
      
      <nav className='desktop'>
       <ul>
        {navLinks.map(({ link, name}) =>(
            <li key={name} className='group'>
             <a href={link}>
              <span>{name}</span>
              <span className='underline'/>
             </a>
            </li>
        ))}
       </ul>
      </nav>

      <a href='#contact' className='contact-btn group'>
       <div className='inner'>
        <span>Contact Me</span>
       </div>
      </a>
     </div>
    </header>
  )
}

export default Navbar