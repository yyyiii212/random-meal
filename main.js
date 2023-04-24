let meallist = [];

fetch("mealList.json")
    .then(function (response) {
        // 從JSON格式轉回一般的JS物件
        return response.json();
    })
    .then(function (data) {
        meallist = data;
    })
    .catch(function (error) {
        console.log(error);
    })


const inp = document.querySelectorAll(".inp")
const btn = document.querySelector(".btn")
const u1 = document.querySelector(".ul1")



btn.addEventListener("click", function () {
    let contant = "";
    const checkedList = Array.from(inp)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
    const mealList = meallist.filter((meal) => meal.category.some((cat) => checkedList.includes(cat)));

    if (mealList.length > 0) {
        const mealName = mealList[Math.floor(Math.random() * mealList.length)].name;
        contant = `<li>今天吃....${mealName}!!!!</li>`;
        u1.innerHTML = contant;
    } else {
        const random1 = Math.floor(Math.random() * meallist.length);
        console.log(meallist);
        contant = `<li>今天吃....${meallist[random1].name}!!!!</li>`;
        u1.innerHTML = contant;
    }


})

// setTimeout(function () {
//     btn.click();

// }, 1000);

const intervalID = setInterval(() => {
    btn.click();
}, 1000);


