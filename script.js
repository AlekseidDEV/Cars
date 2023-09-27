const btn = document.querySelector('.watch_result')
const priceInput = document.querySelector('.price_user') 
const select = document.getElementById('select')

const render = (data) => {

    console.log(data);
//     const arr = data

//    for(let carVariant of arr){
//     console.log(carVariant.price);
//    }
}

const getDataServe = (modelCar) => {
    return fetch(`./db/${modelCar}.json`)
        .then((r => r.json()))
}

const getDataInput = () => {
   if(select.value === '' || priceInput.value === ''){
    alert('Заполните поля')
   } else{
    getDataServe(select.value)
        .then((data) => render(data))
   }
}


btn.addEventListener("click" , getDataInput)