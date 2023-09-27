const btn = document.querySelector(".watch_result");
const priceInput = document.querySelector(".price_user");
const select = document.getElementById("select");
const errText = document.querySelector(".text_err");
const cardBlock = document.querySelector(".card_block");
const searchVariant = document.querySelector(".text_cart_variant");

let arrVariantCars = [];

const getDataServe = async (modelCar) => {
    const r = await fetch(`./db/${modelCar}.json`);
    return await r.json();
};

const render = () => {
    const overlap = arrVariantCars.length;

    if (overlap === 0) {
        errText.style.display = "block";
        searchVariant.style.display = "none";
    } else {
        arrVariantCars.forEach((item) => {
            errText.style.display = "none";
            const cardDiv = document.createElement("div");
            searchVariant.style.display = "flex";
            searchVariant.textContent = `вариантов найдено: ${overlap}`;
            cardDiv.classList.add("car_card");
            cardDiv.innerHTML = `<p class="price">${"цена: " + item.price + " ₽"}</p>
                                <p class="model">${
                                "название: " + item.fullname}</p>
                                <button>смотреть</button>`;
            cardBlock.append(cardDiv);
        });
    }
};

const testDate = (data) => {
    data.forEach((item) => {
        if (item.price <= +priceInput.value) {
            arrVariantCars.push(item);
        }
    });

    render();
};

const getDataInput = () => {
    if (select.value === "" || priceInput.value === "") {
        alert("Заполните поля");
    } else {
        getDataServe(select.value)
            .then((data) => testDate(data))
            .catch(() => alert('Сервер не отвечает'))
    }
};

const cleanBlock = () => {
    cardBlock.innerHTML = "";
    arrVariantCars = [];

    getDataInput();
};

btn.addEventListener("click", cleanBlock);
