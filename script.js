const btn = document.querySelector('.watch_result')
const priceInput = document.querySelector('.price_user') 
const select = document.getElementById('select')

const getDataServe = () => {
    return fetch('cardb.json')
}

const getDataInput = () => {
   if(select.value === '' || priceInput.value === ''){
    alert('Заполните поля')
   } else{
    getDataServe()
   }
}


btn.addEventListener("click" , getDataInput)