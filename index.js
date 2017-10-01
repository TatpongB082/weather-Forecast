$(function () {

    
    $("#loadwebapi").click(function () {
        $("#wpanel").empty();
        $("#citys").empty();
       

        var city=$("#city").val();
        

        var url="http://api.openweathermap.org/data/2.5/weather?q="+city;
        url +="&appid=6d6cd2cd152d47e2877bc13f7179b076";        
        $.get(url, function (data) {
                    console.log(data);
                    var city = "<img src='http://openweathermap.org/img/w/" +
                    data['weather'][0]['icon'] + ".png' width = '70'height = '70' ><br>";
                    
                    var row =   "<br><h3>"+ data.name+"</h3>"+ 
                                "<br><h3>"+ data.weather[0].main+"</h3>"+                   
                                "<br><h3>"+ data.weather[0].description+"</h3>";


                    $("#wpanel").append(row);
                    $("#citys").append(city);
         });
     });
        
    });

