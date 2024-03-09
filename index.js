document.addEventListener('DOMContentLoaded', function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const carContainer = document.getElementById('carContainer');

            data.cars.forEach(car => {
                const card = document.createElement('div');
                card.className = 'col';
                card.innerHTML = `
                    <a href="indexdata.html?carId=${car.carId}" class="card-link">
                        <div class="card shadow-sm">
                            <img src="./myotherimages/${car.img}" class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <div class="card-body">
                                <h3>${car.name}</h3>
                                <p class="card-text">Price: ${car.price}</p>
                            </div>
                        </div>
                    </a>
                `;

                carContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
