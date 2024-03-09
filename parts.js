document.addEventListener('DOMContentLoaded', function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const partsContainer = document.getElementById('partsContainer');


            data.parts.forEach(part => {
                const card = document.createElement('div');
                card.className = 'col';
                card.innerHTML = `
                    <a href="details.html?partId=${part.partId}" class="card-link">
                        <div class="card shadow-sm">
                            <img src="images/${part.img}" class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <div class="card-body">
                                <h3>${part.name}</h3>
                                <p class="card-text">Price: ${part.price}</p>
                            </div>
                        </div>
                    </a>
                `;

                partsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});