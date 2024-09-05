
import{imgArrayMedieval,imgCaptionsMedieval,imgArrayEarlyModern,imgCaptionsEarlyModern} from './globals.js';
import { buildImageCarousel, showNthSlide } from './imageCarousel'


function buildMenu(
    parentNodeSelector,
    name,
    id,
    optionValueArray,
    optionTextArray) {

        const parent = document.querySelector(parentNodeSelector);

        const title = document.createElement('h1');
        title.textContent = 'Cool Historical Pictures';
        parent.appendChild(title);
        
        const select = document.createElement('select');
        const content = document.querySelector('.content');
        parent.appendChild(select);
        select.setAttribute('name',name);
        select.setAttribute('id',id);
        
        for (let o = 0; o < optionValueArray.length; o++){
            const option = document.createElement('option');
            select.appendChild(option);
            option.value = optionValueArray[o];
            option.textContent = optionTextArray[o];
            
        }

        select.addEventListener('click',()=>{
            if(select.value === 'medieval'){
                
                content.innerHTML = '';
                buildImageCarousel('.content', imgArrayMedieval,imgCaptionsMedieval);
            } else if (select.value === 'earlymodern'){
                content.innerHTML = '';
                buildImageCarousel('.content', imgArrayEarlyModern,imgCaptionsEarlyModern);
            }
            
        })

}

export { buildMenu }