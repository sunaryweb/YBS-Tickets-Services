let coins = JSON.parse(localStorage.getItem('coins')) || 0;
let tickets = JSON.parse(localStorage.getItem('tickets')) || 0;
let coinsAddButton = document.querySelector('.coins-add-button');
let remainingCoins = document.querySelector('.remaining-coins');
let remainingTickets = document.querySelector('.remaining-tickets');
let buyButton = document.querySelector('.buy-button');
let sellButton = document.querySelector('.sell-button');
let ticketsInput = document.querySelector('.tickets-input');
let calculateForBuying = document.querySelector('.calculate-for-buying');
let calculateForSelling = document.querySelector('.calculate-for-selling');
calculateForBuying.innerHTML = '300$';
calculateForSelling.innerHTML = '150$';
ticketsInput.addEventListener('keyup', () => {
    calculateForBuying.innerHTML = `${300 * Math.floor(ticketsInput.value)}$`;
    calculateForSelling.innerHTML = `${150 * Math.floor(ticketsInput.value)}$`;
});
coinsAddButton.addEventListener('click', () => {
    coins += 1000;
    storageAndInner();
});

function storageAndInner() {
    localStorage.setItem('coins', coins);
    localStorage.setItem('tickets', tickets);
    remainingCoins.innerHTML = `${coins}$`;
    remainingTickets.innerHTML = tickets;
}

buyButton.addEventListener('click', () => {
    let ticketsInputValue = Math.floor(ticketsInput.value);
    if (ticketsInputValue > 0) {
        if (coins >= 300 * ticketsInputValue) {
            coins = coins - 300 * ticketsInputValue;
            tickets = tickets + ticketsInputValue;
            storageAndInner();
        } else {
            alert('Not enougn coins!');
        }
    } else if (ticketsInput.value === '') {
        if (coins >= 300) {
            coins = coins - 300;
            tickets = tickets + 1;
            storageAndInner();
        } else {
            alert('Not enougn coins!');
        }
    } else {
        alert('Unable to buy!');
    }
});
sellButton.addEventListener('click', () => {
    let ticketsInputValue = Math.floor(ticketsInput.value);
    if (ticketsInputValue > 0) {
        if (tickets >= ticketsInputValue) {
            coins = coins + 150 * ticketsInputValue;
            tickets = tickets - ticketsInputValue;
            storageAndInner();
        } else {
            alert('Not enougn tickets!');
        }
    } else if (ticketsInput.value === '') {
        if (tickets >= 1) {
            coins = coins + 150;
            tickets = tickets - 1;
            storageAndInner();
        } else {
            alert('Not enougn tickets!');
        }
    } else {
        alert('Unable to sell!');
    }
});
storageAndInner();
