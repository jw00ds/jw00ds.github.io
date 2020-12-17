async function fetchReadings() {
    try {
        const response = await fetch(
            'https://breads-server.herokuapp.com/api/readings/21', {
            method: 'GET',
            headers: {
                'Access-Control-Request-Headers': 'authorization'
            }
        });
        const responseBody = await response.json();
        return responseBody;
    } catch (err) {
        console.log(err, err.message);
    };
}

const createCard = reading => {
    const linkText = document.createTextNode('Link to article');
    const receiverContainer = document.getElementById('breads');
    const listItem = document.createElement('li');
    // const main = document.createElement('main');
    const section = document.createElement('section');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const h2 = document.createElement('h2');
    const image = document.createElement('img');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const div4 = document.createElement('div');
    const link = document.createElement('a');
    const createdAt = document.createTextNode(reading.created_at);
    const description = document.createTextNode(reading.description);
    const title = document.createTextNode(reading.title);
    // main.setAttribute('class', 'container');
    section.setAttribute('class', 'row justify-content-center mt-3');
    div1.setAttribute('class', 'col-12');
    div2.setAttribute('class', 'card shadow-lg');
    div3.setAttribute('class', 'card-body');
    h2.setAttribute('class', 'card-title');
    image.setAttribute('class', 'thumbnail');
    image.setAttribute('src', reading.reading_image);
    p1.setAttribute('class', 'card-text text');
    p2.setAttribute('class', 'card-text text-muted');
    div4.setAttribute('class', 'd-flex justify-content-end');
    link.setAttribute('class', 'btn btn-link');
    link.setAttribute('href', reading.url);
    link.appendChild(linkText);
    div4.appendChild(link);
    p2.appendChild(createdAt);
    p1.appendChild(description);
    h2.appendChild(title);
    div3.appendChild(h2);
    div3.appendChild(image);
    div3.appendChild(p1);
    div3.appendChild(p2);
    div3.appendChild(div4);
    div2.appendChild(div3);
    div1.appendChild(div2);
    section.appendChild(div1);
    // main.appendChild(section);
    listItem.appendChild(section);
    receiverContainer.appendChild(listItem);
    return receiverContainer;
};

const displayReadings = async () => {
    const readings = await fetchReadings();
    const latestFiveReadings = readings.slice(0, 5);
    const readingCards = latestFiveReadings.map(reading => {
        return createCard(reading);
    });
    return readingCards;
};

window.addEventListener('DOMContentLoaded', displayReadings);