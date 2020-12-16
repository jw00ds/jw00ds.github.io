async function fetchReadings() {
    try {
        const response = await fetch(
            'https://breads-server.herokuapp.com/api/readings/21', {
            method: 'GET',
            headers: {
                'Access-Control-Request-Headers': 'authorization'
            }
        });
        console.log(response);
        const responseBody = await response.json();
        console.log(response);
        return responseBody;
    } catch (err) {
        console.log(err, err.message);
    };
}

const createCard = reading => {
    const linkText = document.createTextNode('Link to article');
    const receiverContainer = document.getElementById('breads');
    const listItem = document.createElement('li');
    const main = document.createElement('main');
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
    const mainWithAttr = main.setAttribute('class', 'container');
    const sectionWithAttr = section.setAttribute('class', 'row justify-content-center mt-3');
    const div1WithAttr = div1.setAttribute('class', 'col-12');
    const div2WithAttr = div2.setAttribute('class', 'card shadow-lg');
    const div3WithAttr = div3.setAttribute('class', 'card-body');
    const h2WithAttr = h2.setAttribute('class', 'card-title');
    const imageWithAttr1 = image.setAttribute('class', 'thumbnail');
    const imageWithAttr2 = imageWithAttr1.setAttribute('src', reading.reading_image);
    const p1WithAttr = p1.setAttribute('class', 'card-text text');
    const p2WithAttr = p2.setAttribute('class', 'card-text text-muted');
    const div4WithAttr = div4.setAttribute('class', 'd-flex justify-content-end');
    const linkWithAttr1 = link.setAttribute('class', 'btn btn-link');
    const linkWithAttr2 = linkWithAttr1.setAttribute('href', reading.url);
    const finishedLink = linkWithAttr2.appendChild(linkText);
    const finishedDiv4 = div4WithAttr.appendChild(finishedLink);
    const finishedP2 = p2WithAttr.appendChild(reading.created_at);
    const finishedP1 = p1WithAttr.appendChild(reading.description);
    const finishedH2 = h2WithAttr.appendChild(reading.title);
    const finishedDiv3 = div3WithAttr.appendChild(finishedH2, imageWithAttr2, finishedP1, finishedP2, finishedDiv4);
    const finishedDiv2 = div2WithAttr.appendChild(finishedDiv3);
    const finishedDiv1 = div1WithAttr.appendChild(finishedDiv2);
    const finishedSection = sectionWithAttr.appendChild(finishedDiv1);
    const finishedMain = mainWithAttr.appendChild(finishedSection);
    const finishedListItem = listItem.appendChild(finishedMain);
    const finishedReceiverContainer = receiverContainer.appendChild(finishedListItem);
    return finishedReceiverContainer;
};

const displayReadings = async () => {
    const readings = await fetchReadings();
    console.log(readings);
    const latestFiveReadings = readings.slice(0, 4);
    const readingCards = latestFiveReadings.map(reading => {
        return createCard(reading);
    });
    return readingCards;
};

window.addEventListener('DOMContentLoaded', displayReadings);