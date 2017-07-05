import { Test } from './app/test';

window.onload = () => {
    const container = document.getElementById('container');
    if(container != null)
    {
        const test = new Test();
        container.innerHTML = test.getInnerHtml();
    }        
};