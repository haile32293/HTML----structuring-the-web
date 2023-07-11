const list = document.createElement('ol');
const infor = document.createElement('p');
const html = document.querySelector('html');


infor.textContent = ' Below is a dynamic list. Click anywhere on the page to add a new list item . Click an existing list item to change its text to something else';
document.appendChild(infor);
document.appendChild(list);


html.onclick = function() {
    const listItem = document.createElement('li');
    const listContent = prompt('what do you want to include in the li item');
    listItem.textContent = listContent;
    
    list.appendChild(listItem);

    listItem.onclick = function(e){

        e.stopPropagation();
        const listContent = prompt('Enter a new content for your list item to update');
        this.textContent = listContent;
    }


}