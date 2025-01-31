let currentImageIndex = 0;
const images = [
    "https://t4.ftcdn.net/jpg/07/08/47/75/360_F_708477508_DNkzRIsNFgibgCJ6KoTgJjjRZNJD4mb4.jpg",
    "https://t4.ftcdn.net/jpg/07/41/71/93/360_F_741719394_C9BP3YbiXSJ7WspSDLtKdYxZKKWlf0Jz.jpg",
    "https://media.istockphoto.com/id/610041376/photo/beautiful-sunrise-over-the-sea.jpg?s=612x612&w=0&k=20&c=R3Tcc6HKc1ixPrBc7qXvXFCicm8jLMMlT99MfmchLNA=",
    "https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=",
    "https://i.pinimg.com/originals/bc/b5/d9/bcb5d9df181b9bc07bcc0cc2d659d3fe.jpg",
    "https://upstdc.co.in/website/pic/portfolio/580x285-1@2x.jpg",
    "https://www.allartdirect.co.uk/cdn/shop/products/img_proxy_071d24fa-be00-4360-850e-c17f7e365c78.jpg?v=1734627242",
    "https://rivieramaison.com/media/catalog/product/cache/a998d1fab5b663e391b809e55535fa36/5/6/565920.webp",
    "https://static7.depositphotos.com/1288351/768/i/450/depositphotos_7689364-stock-photo-ringed-planet.jpg",
    "https://static7.depositphotos.com/1288351/768/i/450/depositphotos_7689364-stock-photo-ringed-planet.jpg",
    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
];

function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = "flex";
    modalImage.src = images[currentImageIndex];
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    if (currentImageIndex >= images.length) currentImageIndex = 0;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentImageIndex];
}

// Close modal when clicked outside the image
document.getElementById('imageModal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});
