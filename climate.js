
const api = '023016d763f94d16a1f202218252312';
const inpfield = document.getElementById('inp-box');
const inpbtn = document.getElementById('inp-btn');
const cityDiv = document.getElementById('city');


inpbtn.addEventListener('click',fetchdata);
inpfield.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        fetchdata();
    }
})
function fetchdata(){

    const city=inpfield.value.trim();
    if(!city){
        cityDiv.textContent='please enter city name'
        return;
    };
    const url=`http://api.weatherapi.com/v1/current.json?key=${api}&q=${city}&aqi=yes`;
    fetch(url)
    .then(res=>{
        if(!res.ok){
            throw new Error('city not found')
        };
        return res.json();
    })
    .then(data=>{

        cityDiv.innerHTML=`
       <h2>${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${data.current.temp_c} °C</p>
                <p>Feels like: ${data.current.feelslike_c} °C</p>
                <p>Condition: ${data.current.condition.text}</p>
                <img src="${data.current.condition.icon}" alt="weather icon">
               <p>Humidity: ${data.current.humidity}%</p>
               <p>Wind: ${data.current.wind_kph} km/h</p>
        
        `
    })
    .catch(err=>cityDiv.textContent=err.message)
}







// inpbtn.addEventListener('click', fetchWeather);

// inpfield.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') fetchWeather();
// });

// function fetchWeather() {
//     const city = inpfield.value.trim();
//     if (!city) {
//         cityDiv.textContent = 'Please enter a city!';
//         return;
//     }

//     const url = `https://api.weatherapi.com/v1/current.json?key=${api}&q=${city}&aqi=yes`;

//     fetch(url)
//         .then(res => {
//             if (!res.ok) throw new Error('City not found');
//             return res.json();
//         })
//         .then(data => {
//             cityDiv.innerHTML = `
//                 <h2>${data.location.name}, ${data.location.country}</h2>
//                 <p>Temperature: ${data.current.temp_c} °C</p>
//                 <p>Feels like: ${data.current.feelslike_c} °C</p>
//                 <p>Condition: ${data.current.condition.text}</p>
//                 <img src="${data.current.condition.icon}" alt="weather icon">
//                 <p>Humidity: ${data.current.humidity}%</p>
//                 <p>Wind: ${data.current.wind_kph} km/h</p>
//             `;
//         })
//         .catch(err => {
//             cityDiv.textContent = err.message;
//         });
// }
