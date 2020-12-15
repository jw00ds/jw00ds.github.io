async function fetchReadings() {
    await fetch(
        'https://breads-server.herokuapp.com/api/readings/21', {
        method: 'GET',
    })
        .then(results => results.json())
        .catch(err => console.log(err, err.status, err.message));
}

const createCard = reading => {
    const articleImage = document.createElement('img').setAttribute('class', 'thumbnail');
    const articleLink = document.createElement('a').setAttribute('class', 'btn btn-link');
    const articleLinkText = document.createTextNode('Link to article');
    document.getElementById('breads').appendChild(
        document.createElement('li').appendChild(
            document.createElement('main').setAttribute('class', 'container').appendChild(
                document.createElement('section').setAttribute('class', 'row justify-content-center mt-3').appendChild(
                    document.createElement('div').setAttribute('class', 'col-12').appendChild(
                        document.createElement('div').setAttribute('class', 'card shadow-lg').appendChild(
                            document.createElement('div').setAttribute('class', 'card-body').appendChild(
                                document.createElement('h2').setAttribute('class', 'card-title').appendChild(
                                    reading.title
                                ),
                                articleImage.setAttribute('src', reading.reading_image),
                                document.createElement('p').setAttribute('class', 'card-text text').appendChild(
                                    reading.description
                                ),
                                document.createElement('p').setAttribute('class', 'card-text text-muted').appendChild(
                                    reading.created_at
                                ),
                                document.createElement('div').setAttribute('class', 'd-flex justify-content-end').appendChild(
                                    articleLink.setAttribute('href', reading.url).appendChild(articleLinkText)
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

const displayReadings = async () => {
    const readings = await fetchReadings();
    const latestFiveReadings = readings.slice(0, 4);
    console.log(latestFiveReadings);
    const readingCards = latestFiveReadings.map(reading => {
        return createCard(reading);
    });
    return readingCards;
};

window.addEventListener('DOMContentLoaded', displayReadings);