import { loadHome} from './home.js';

function createHeader() {
    const header = document.createElement('header');
    const restaurantName = document.createElement('h1');
    const div = document.createElement('div');
    const menu = document.createElement('p');
    const contact = document.createElement('p');

    restaurantName.textContent = 'The Pizzeria';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';
    header.appendChild(restaurantName);
    header.appendChild(div);
    div.appendChild(menu);
    div.appendChild(contact);

    return header;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    return main;
}

function startWebsite() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    loadHome();
}

startWebsite();