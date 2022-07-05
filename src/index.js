import { loadFooter } from './footer';
import { loadHome } from './home';
import { loadMenu } from './menu';

function createHeader() {
    const header = document.createElement('header');
    const restaurantName = document.createElement('h1');
    restaurantName.addEventListener('click', loadHome);
    const div = document.createElement('div');
    const menu = document.createElement('p');
    menu.addEventListener('click', loadMenu);
    const contact = document.createElement('p');
    restaurantName.textContent = 'The Pizzeria';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';
    header.append(restaurantName);
    header.append(div);
    div.append(menu);
    div.append(contact);

    return header;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    return main;
}

function startWebsite() {
    const content = document.getElementById('content');
    content.append(createHeader());
    content.append(createMain());
    loadHome();
    loadFooter();
}

startWebsite();