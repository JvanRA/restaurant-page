function createFooter() {
    const footer = document.createElement('footer');
    const creator = document.createElement('p');
    const credit = document.createElement('p');
    creator.classList.add('creator');
    credit.classList.add('credit');
    creator.textContent = 'Created by Ivan Añora';
    credit.textContent = 'Image from Unsplash by Hement Latawa ';
    footer.append(creator);
    footer.append(credit);

    return footer;
}

function loadFooter() {
    const content = document.querySelector('#content');
    content.append(createFooter());
}

export { loadFooter };