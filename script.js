var cityName = document.getElementById("cityName")
var Btn = document.getElementById("Btn")

var container2 = document.getElementsByClassName("container2")


function info() {


var city = $(this).attr("cityName");
var webPage = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d0eb57f5da60ca882c4ba5390c593bef"


$.ajax({
    url : webPage,
    method : "GET"
}).then(function(response){
    console.log(response)
    var temp = response.main.temp
    var humidity = response.main.humidity
    var windSpeed = response.wind.speed
    

    $("#container2").append(temp)
    $("#container2").append(humidity)
    $("#container2").append(windSpeed)
})
}

info()

// function old() {
    
//     $("#cityName").empty();


//     for (var i = 0; i < city.length; i++){
//       var a = $("<button>");
//       a.addClass("pastCity");
//       a.attr("data-name", city[i]);
//       a.text(city[i]);
//       $("#cityName").append(a);
//     }
//   }




//       $("#pastCity").on("click", function(event) {
//         event.preventDefault();

//         var city = $("#cityName").val().trim();

//         old();
//       });

//       $(document).on("click", "#pastCity", info);

//         old();