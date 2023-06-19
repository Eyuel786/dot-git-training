const gridItem1 = document.querySelector(".grid-item1");
const gridItem2 = document.querySelector(".grid-item2");
const gridItem3 = document.querySelector(".grid-item3");
const gridItem4 = document.querySelector(".grid-item4");

gridItem1.innerHTML = gridItem2.innerHTML;

gridItem2.addEventListener('click', () => {
    gridItem1.innerHTML = "";
    gridItem1.innerHTML = gridItem2.innerHTML;
});

gridItem3.addEventListener('click', () => {
    gridItem1.innerHTML = "";
    gridItem1.innerHTML = gridItem3.innerHTML;
});

gridItem4.addEventListener('click', () => {
    gridItem1.innerHTML = "";
    gridItem1.innerHTML = gridItem4.innerHTML;
});