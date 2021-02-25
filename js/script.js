const btn = document.querySelector(".submit_form .submit_button")
btn.addEventListener("click", function () {
    const name = document.querySelector("#name")
    const email = document.querySelector("#email")
    const subject = document.querySelector("#subject")

    console.log("Name: ", name.value)
    console.log("Email: ", email.value)
    console.log("Subject: ", subject.value)

    name.value = ""
    name.disabled = true
    email.value = ""
    email.disabled = true
    subject.value = "Спасибо за отзыв! При необходимости с вами свяжутся в ближайшее время.";
    subject.disabled = true
    btn.disabled = true
})


const promo_window = document.querySelector("#promo_window")
const shadow = document.createElement("div")
shadow.className = "shadow"

setTimeout(function(){
    promo_window.style.display = "block"
    shadow.appendChild(promo_window)
    document.body.appendChild(shadow)
}, 5000)


shadow.addEventListener("click", function () {
    shadow.removeChild(promo_window)
    document.body.removeChild(shadow)
    promo_window.style.display = "none"
})


