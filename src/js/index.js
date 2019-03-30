import { toggleNav } from './views/Navigation';


const loadJS = () => {
    
    //initialize navmenu toggle
    toggleNav();
};

//wait for media and DOM to be ready
if(document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded", loadJS);
}
else {
    loadJS();
}


