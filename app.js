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

window.addEventListener('DOMContentLoaded',
    async () => {
        const readings = await fetchReadings();
        const latestFiveReadings = readings.slice(0, 5);
        document.getElementById('breads').innerHTML = latestFiveReadings.map(reading => {
            `
        <main class="container">
            <section class="row justify-content-center mt-3">
                <div class="col-12">
                    <div class="card shadow-lg">
                        <div class="card-body">
                            <h2 class="card-title">${reading.title}</h2>
                            <h3 class="card-subtitle mb-2 text-muted">
                                Timestamp: ${reading.created_at}
                            </h3>
                            <img
                                src=${reading.reading_image}
                                alt="Article img"
                                class="thumbnail"
                            />
                            <p class="card-text">
                                ${reading.description.substring(0, 125)}
                            </p>
                            <div class="d-flex justify-content-end">
                                <a
                                    href=${reading.url}
                                    class="btn btn-link"
                                >
                                    Link to full article
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        `;
        });
    }
);
