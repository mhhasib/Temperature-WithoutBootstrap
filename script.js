
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(){

    const inputBtn = document.getElementById('input-btn').value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=fad4b27e4f0bdbe90d40449ea8165ce0')
     .then(response => response.json())
     .then(data => {

         const cityName = data.name;
         const temperature = data.main.temp;
         const tempCelsius = temperature - 273.15 ;
         const description = data.weather[0].description;

         document.getElementById('city').innerText = cityName;
         document.getElementById('temp').innerText = tempCelsius.toFixed(2);
         document.getElementById('des').innerText = description;
     })

     .catch(res => alert('Please, Enter the correct City Name!'))
}); 

