const form = document.querySelector(".form");
const nameUser = document.querySelector("#name");
const secondName = document.querySelector("#secondName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const agree = document.querySelector("#agree");
const button = document.querySelector("#button");
const clear = document.querySelector("#clear");

///////////////////первый вариант//////
// const sendData = async(url, data) => {
//     const responce = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer: AntoninaPervenenok'
//         },
//         body: data
//     })
//     if (!responce.ok) {
//         const user = document.querySelector("#user");
//         user.innerHTML = "";
//         return user.textContent = "Обнонвите страницу и повторите попытку"

//     } else {
//         const user = document.querySelector("#user");
//         user.innerHTML = "";
//         user.textContent = "Регистрация завершена успешно!";
//     }
//     return await responce.json();
// };
// const sendForm = () => {
//     form.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const formData = new FormData(form);
//         const data = {};
//         for (const [key, value] of formData) {
//             data[key] = value;

//         }
//         sendData(`http://46.21.248.81:3001/user`, JSON.stringify(data))
//             .then(() => {
//                 form.reset();
//             })
//     })
// };



const sendData = async(url) => {
    const responce = await fetch(url, {

        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer: AntoninaPervenenok'
        },
        body: JSON.stringify({

            name: `${nameUser.value}`,
            secondName: `${secondName.value}`,
            phone: `${phone.value}`,
            email: `${email.value}`,
            agree: `${agree.checked}`
        })
    });
    if (!responce.ok) {
        const user = document.querySelector("#user");
        user.innerHTML = "";
        return user.textContent = "Обнонвите страницу и повторите попытку"
    } else {
        const user = document.querySelector("#user");
        user.innerHTML = "";
        user.textContent = "Регистрация завершена успешно!";
        return await responce.text();
    }
};
const sendForm = () => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        sendData( /*`https://polinashneider.space/user`*/
                `http://46.21.248.81:3001/user`
            )
            .then(() => {
                form.reset();
            })
    })
};

const getData = async(url) => {
    const responce = await fetch(url, {

        headers: {
            'Authorization': 'Bearer: AntoninaPervenenok'
        }
    })
    return await responce.json();
}


getData( /*`https://polinashneider.space/user`*/
    `http://46.21.248.81:3001/my-users`
).then((data) => {
    console.log(data);
});
sendForm();