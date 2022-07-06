function createAbout() {
    const main3 = document.createElement('main');
    main3.classList.add('main-about');
    const restaurantContact = document.createElement('h1');
    restaurantContact.textContent = 'Contact us';
    main3.append(restaurantContact);
    const restaurantAddress = document.createElement('div');
    restaurantAddress.classList.add('restaurant-address');
    restaurantAddress.innerHTML = 
    `<div class="contact">
        <p>Manhattan, NY 10036, United States</p>
        <p>Mon-Fri: 8am-8pm<br>Fri-Sun: 8am-11pm</p>
        <p>(111)-222-333</p>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11632.015290779787!2d-73.993836691507!3d40.75828457138387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sph!4v1657092336992!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    main3.append(restaurantAddress);

    return main3;
}

function loadAbout() {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createAbout());
}

export { loadAbout };