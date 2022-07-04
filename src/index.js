import { loadHeader } from './header.js'
import { loadFooter } from './footer.js';
import { loadHome } from './home.js';

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    return main;
}

function startWebsite() {
    const content = document.getElementById('content');
    loadHeader();
    content.append(createMain());
    loadHome();
    loadFooter();
}

startWebsite();