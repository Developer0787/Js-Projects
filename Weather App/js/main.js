
const bassicUrl = "https://api.openweathermap.org/data/2.5/"
const key ="b0078f7fab61f415b7c8a804f48b3eab"

// function change(){

//   document.getElementById('boxs').style.display='none'
// }

function ChangerName(){
  let countryName
    let temp
    let text = document.getElementById('text').value
    let list =''
    const yourDate = new Date()
    console.log(yourDate)
    const newDate = yourDate.toDateString()
    console.log(newDate)
    document.getElementById('text').value=""

    fetch(`${bassicUrl}weather?q=${text}&units=metric&APPID=${key}`)
    .then(res=> res.json())
    .then(respons =>{
        temp=respons.main.temp
        countryName = respons.name
        list=` <h1 > <span id="contryName">${respons.name}</span> ${respons.sys.country}</h1> <br>
                
        <div class="temp">
             <div class="gradus">${Math.floor(respons.main.temp)}° C</div> 
               <br>
             <h1>${respons.weather[0].main}</h1>
             <br>
            <h3>${newDate}</h3>
        </div>`

 document.getElementById('list').innerHTML =list
     
  // if(temp<16){
  //   document.getElementById('container-fluid').setAttribute('class', 'container-fluid cold')

  // }else{
  //   document.getElementById('container-fluid').setAttribute('class', 'container-fluid')
  // }
  
  if(countryName.toUpperCase()=="RUSSIA"){
    
    document.getElementById('contryName').innerHTML='Россия'

  }


    })







}