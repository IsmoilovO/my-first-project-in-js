import { arr } from "./data.js"
const card__list = document.querySelector(".card__list")
const x = () => {
    for (let i = 0; i < arr.length; i++) {
        //item yaratildi
        let li = document.createElement('li');
        li.className = "card__item"
        //rasm uchun alohida div yaraldi

        let div = document.createElement("div")
        div.className = "card__img_block"
        let div2 = document.createElement("div")
        div2.className = "card__content"
        let div3 = document.createElement("div")
        div3.className = "card__bottom"
        let img = document.createElement("img")
        img.className = "card__first_img"
        img.src = arr[i].img
        let title = document.createElement('h2')
        title.className = "card__sub_title"
        title.textContent = arr[i].name
        let descr = document.createElement("p")
        descr.className = "card__descr"
        descr.textContent = arr[i].descr
        let img2 = document.createElement("img")
        img2.className = "card__second_img"
        img2.src = arr[i].img2
        let time = document.createElement("p")
        time.className = "card__time"
        time.textContent = arr[i].time

        div.append(img)
        div2.append(title, descr, div3)
        div3.append(img2, time)
        li.append(div, div2)
        card__list.append(li)





    }
}
x()