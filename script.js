const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movie = document.getElementById("movie");
let ticketPrice = parseInt(movie.value);


function updateCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const numberOfSelectedSeats = selectedSeats.length;

    count.innerText = numberOfSelectedSeats;
    total.innerText = numberOfSelectedSeats * ticketPrice;
}


container.addEventListener("click", (e) => {
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
        updateCount();
    }
});

movie.addEventListener("change", (e) => {
    ticketPrice = parseInt(e.target.value);
    updateCount();
});
