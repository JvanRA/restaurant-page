function createHome() {
    const main1 = document.createElement('main');
    main1.classList.add('main-left');
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Welcome to The Pizzeria';
    main1.append(restaurantName);
    const description  = document.createElement('p');
    description.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error minima hic beatae cum incidunt fuga eos molestiae ipsum rem nulla sunt, atque voluptates molestias. Nisi sit placeat beatae voluptatibus maxime. Illum laborum, aut tenetur sequi explicabo distinctio, minima ex cumque aperiam at, eos cum ab suscipit eveniet magnam nihil nemo quis impedit sapiente assumenda commodi officia nisi! Facere, perspiciatis sint.'
    main1.append(description);

    return main1;
}

function loadHome() {
    const main = document.querySelector('.main');
    main.append(createHome());
}

export { loadHome };