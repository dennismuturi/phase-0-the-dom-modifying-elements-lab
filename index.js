// Write your code here!

const main_element = document.getElementById('main');
main_element.remove();

const newHeader=document.createElement('h1');
newHeader.setAttribute('id','victory');
newHeader.innerHTML="Dennis is the champion";
newHeader.append(main);
