const form = document.getElementById('contact-form');
const successMsg = document.getElementById('success-msg');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            form.reset();
            successMsg.style.display = 'block';
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 5000);
        } else {
            alert('Oops! Something went wrong.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const certificates = document.querySelectorAll('.certifications__item');
    const zoomedContainer = document.createElement('div');
    zoomedContainer.classList.add('zoomed-container');
    document.body.appendChild(zoomedContainer);

    certificates.forEach(cert => {
        cert.addEventListener('click', function () {
            const img = this.querySelector('.certifications__img');
            const zoomedImg = img.cloneNode(true); // Clone the image to show in zoomed container

            // Clear the zoomed container and append the cloned image
            zoomedContainer.innerHTML = '';
            zoomedContainer.appendChild(zoomedImg);
            zoomedContainer.classList.add('active'); // Show the zoomed container

            // Add zoomed class for effect
            zoomedImg.classList.add('zoomed');

            // Close zoomed view on overlay click
            zoomedContainer.addEventListener('click', function () {
                zoomedContainer.classList.remove('active'); // Hide zoomed container
                zoomedImg.classList.remove('zoomed'); // Reset zoom on close
            });
        });
    });
});

