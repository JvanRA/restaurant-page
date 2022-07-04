function createHeader() {
    const header = document.createElement('header');
    const restaurantName = document.createElement('h1');
    const div = document.createElement('div');
    const menu = document.createElement('p');
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

function loadHeader() {
    const content = document.querySelector('#content');
    content.append(createHeader());
}

export { loadHeader };