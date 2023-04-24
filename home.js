const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
const btn1 = document.querySelector(".bt1")


btn1.addEventListener("click", function () {

    if (box1.getAttribute("class") === "box box1") {

        box1.setAttribute("class", "box box1 box-move-down")

        setTimeout(function () {
            box2.setAttribute("class", "box box2 box-move-down");
        }, 500)
        setTimeout(function () {
            box3.setAttribute("class", "box box3 box-move-down");
        }, 1000)
    } else {
        box1.setAttribute("class", "box box1");

        setTimeout(function () {
            box2.setAttribute("class", "box box2");
        }, 500)

        setTimeout(function () {
            box3.setAttribute("class", "box box3");
        }, 1000)
    }
})
