document.querySelectorAll('.skill-btn').forEach(button => {
    button.addEventListener('click', function() {
        console.log("Tombol diklik:", this.innerText); // Debugging
        let imageUrl = this.getAttribute('data-image');
        document.getElementById('modal-img').src = imageUrl;
        document.getElementById('image-modal').style.display = 'flex';
    });
});
