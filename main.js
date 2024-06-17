const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;

toggleBtn.addEventListener("click", function() {
    body.classList.toggle("dark-mode")
}) 

const loremBtn = document.getElementById('lorem');

loremBtn.addEventListener("click", function() {
    body.classList.toggle("lorem")
}) 
