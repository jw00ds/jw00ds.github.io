// import moment from 'moment';

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

export const eventListener = () => window.addEventListener('DOMContentLoaded',
    async () => {
        const readings = await fetchReadings();
        const latestFiveReadings = readings.slice(0, 5);
        let breadsHtml = latestFiveReadings.map(reading => {
            const d = new Date(reading.created_at);
            const yr = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
            const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
            return `
                <main class="container">
                    <section class="row justify-content-center mt-3">
                        <div class="col-12">
                            <div id="breads-cards" class="card shadow-lg">
                                <div id="breads-cards" class="card-body">
                                    <h2 id="breads-cards" class="card-title">${reading.title}</h2>
                                    <h3 id="breads-cards" class="card-subtitle mb-2 text-muted">
                                        Timestamp: ${day}-${mo}-${yr}
                                    </h3>
                                    <img
                                        src=${reading.reading_image}
                                        alt="Article img"
                                        class="thumbnail"
                                    />
                                    <p id="breads-cards" class="card-text">
                                        ${reading.description.substring(0, 300)}...
                                    </p>
                                    <div id="breads-cards" class="d-flex justify-content-end">
                                        <a
                                            id="breads-cards"
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
        }).join('');
        document.getElementById('breads').innerHTML = breadsHtml;
    }
)();
