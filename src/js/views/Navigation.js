import { Selectors } from '../models/Selectors';

//toggling the nav menu

export const toggleNav = () => {
    if(!document.querySelector('.menu')){
        Selectors.nav.addEventListener('mouseenter', () => {
            console.log(`You hovered the ${Selectors.nav}`);
            setTimeout(() => {
                addMenu();    
            },150);
        });
    }
    else if(document.queryselector('.menu')){
        console.log(true);
        Selectors.nav.addEventListener('mouseleave', () => {
            document.querySelector('.menu').style.background = 'red';
        });
    }
    
};

const addMenu = () => {
    
        let menu = `
               <div class="menu">
                  <a><p>About</p></a>
                  <a><p>Gallery</p></a>
                  <a><p>Contact</p></a>
                <div>`;
        
                
        Selectors.nav.insertAdjacentHTML("afterbegin", menu);        
};