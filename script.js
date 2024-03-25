let counter = document.querySelector('.dday');
let today = new Date(),
    dday = new Date("May 14, 2024, 00:00:00").getTime(),
    gap = dday - today,
    result = Math.ceil(gap / (1000 * 60 * 60 * 24));
counter.innerHTML = result;