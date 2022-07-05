function createItem() {
    const item = document.createElement('div');
    item.classList.add('item');
    const itemName = document.createElement('h1');
    itemName.classList.add('item-name');
    itemName.textContent = 'Lorem Ipsum Pizza';
    item.append(itemName);
    const description  = document.createElement('p');
    description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    item.append(description);

    return item;
}

function createMenu() {
    const main2 = document.createElement('main');
    main2.classList.add('main-menu');
    const restaurantMenu = document.createElement('h1');
    restaurantMenu.textContent = 'Menu';
    main2.append(restaurantMenu);
    const bestSellers = document.createElement('div');
    bestSellers.classList.add('best-sellers');
    main2.append(bestSellers);
    for(let i = 0; i < 6; i++) {
        bestSellers.append(createItem());
    }

    return main2;
}

function loadMenu() {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export { loadMenu };