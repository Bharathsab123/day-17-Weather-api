var rest_api = "https://restcountries.com/v3.1/all";

async function api() {
  var url = fetch(rest_api);
  var out = await (await url).json();

  var parent = document.querySelector(".row");
  for (let i of out) {
    try {
      
      var data_cont = document.createElement("div");
      data_cont.classList.add("card");

      

      //Name
      var country_name = document.createElement("h3");
      country_name.innerText = i.name.common;
      data_cont.append(country_name);

      //Flag
      var country_flag = document.createElement("img");
      country_flag.setAttribute("src", i.flags.png);
      data_cont.append(country_flag);

      //Capital
      var country_capital = document.createElement("p");
      country_capital.innerText = "Capital : " + i.capital[0];
      data_cont.append(country_capital);

      //Region
      var country_region = document.createElement("p");
      country_region.innerText = "Region : " + i.region;
      data_cont.append(country_region);

      //Country codes
      var country_code = document.createElement("p");
      country_code.innerText = "Contry Code : " + i.cca3;
      data_cont.append(country_code);

      //latlng
      var lat = i.latlng[0];
      var lng = i.latlng[1];
      data_cont.setAttribute("lat", lat);
      data_cont.setAttribute("lng", lng);
      data_cont.append(`Lating :${lat} , ${lng}`)

      //Click Button
      
      var click_btn = document.createElement("button");
      click_btn.setAttribute("onclick", "clicking(this)");
      click_btn.innerHTML = "Click for Weather";
      data_cont.append(click_btn);
      // console.log(click_btn);

      parent.append(data_cont);
    } catch (err) {
    }
  }
}
api();

async function clicking(e) {
  var parent = e.parentElement;
  //console.log(e.parentElement);
  var lat = parent.getAttribute("lat");
  var lon = parent.getAttribute("lng");

  var api_key = "b03a1dd32607528ea02693acfdf672ef";
  var weather_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
  var weather_url = fetch(weather_api);
  var out1 = await (await weather_url).json();
  //console.log(out1);
  var result = document.querySelector("body div.container");
  result.innerHTML = "";
  var data_ele = document.createElement("h1");
  data_ele.classList.add("name");
  var data_ele1 = document.createElement("p");
  data_ele.classList.add("temp");
  var data_ele2 = document.createElement("p");
  data_ele.classList.add("temp");
  var data_ele3 = document.createElement("p");
  data_ele.classList.add("humidity");
  var data_ele4 = document.createElement("p");
  data_ele.classList.add("speed");
  var data_ele5 = document.createElement("p");
  data_ele.classList.add("weather");
  var data_ele6 = document.createElement("a");
  data_ele6.setAttribute("href","index.html")
  data_ele6.innerHTML= "back"
  

  data_ele.innerText = JSON.stringify(out1.name);
  data_ele1.innerText = JSON.stringify(`temp : ${out1.main.temp} C`);
  data_ele2.innerHTML=JSON.stringify(`Pressure : ${out1.main.pressure} hpa`)
  data_ele3.innerText = JSON.stringify(`humidity : ${out1.main.humidity} %`);
  data_ele4.innerText = JSON.stringify(`Speed : ${out1.wind.speed} meter/sec `);
  data_ele5.innerText = JSON.stringify(`Weather :${out1.weather[0].description}`);
  result.append(data_ele);
  result.append(data_ele1);
  result.append(data_ele2);
  result.append(data_ele3);
  result.append(data_ele4);
  result.append(data_ele5);
  result.append(data_ele6)
}



