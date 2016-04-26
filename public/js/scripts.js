

  var congressData;
  var turbine;
  var addturbine;
  var zip;
  var check = false;
  var turbData= [];
 $(function() {

    $('#L-form-link').click(function(e) {
    $("#L-form").delay(100).fadeIn(100);
    $("#B-form").fadeOut(100);
    $('#B-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#B-form-link').click(function(e) {
    $("#B-form").delay(100).fadeIn(100);
    $("#L-form").fadeOut(100);
    $('#L-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
});
  var xhr = new XMLHttpRequest(); 
var swag;
  console.log("js");
  if(check===false){
    console.log("hide");
    $('#list').hide();}

 $('#search9').click(function(e) {
  check = true;
  console.log("*");
  zip = $("#searchterm").val();
  $('#home').hide();
  $('#list').show();
   console.log(zip);
       $.ajax({
            url: '/turbines',
            type: 'GET',
          complete: function(data) {
            console.log(data);
            fullData = JSON.parse(data.responseText);
            console.log("got through");
            console.log(fullData);
            swag = '<div id = "chart" class="swag"><table width="300" style="color: black" class="table"><thead><tr><th>Name</th><th>Status</th></tr></thead>';
    for(var i= 0; i<fullData.results.length; i++){
      if(fullData[i].status === 'active'){
      swag+='<tbody><tr style="color: black" class="success"><td id= "'+i +'" class = "legislator">'+ fullData.title + ' ' + fullData.results[i].last_name + '</td><button class= "add" id="'+congressData.results[i].bioguide_id+'"">+</button></td></tr>';
    }
    else if(fullData[i].status === 'inactive'){
        swag+='<tbody><tr style="color: black" class="danger"><td id="'+i +'" class = "lesiglator">' + fullData.title + ' ' + fullData.results[i].last_name + '</td><td><button class= "add" id="'+congressData.results[i].bioguide_id+'">+</button></td></tr>';

    }
    turbData.push(congressData.results[i]);

    }
     swag+='</tbody></table></div>';
     console.log(turbData);
    
     $("#turbine-form").append(swag); //write table

     $(".danger, .info").on("click", "td", function() {   //to indiviual "page"
     $('#list').hide();
     $('#bills').show();
     turbine = $(this).attr("id");
     $("#topHeader").text(turbData[turbine].title+ " " + turbData[turbine].description);
     // var chosen = legData[$(this).attr('id')];
     // console.log(chosen);
     
});
    $(".add").on("click", function() { 
   addturbine = $(this).attr("id");
   console.log(addturbine);
        });
          //  $("#legislators-form").append("NAME: " congressData.results[0].first_name + " " + congressData.results[0].last_name + " " + congressData.results[0].party + " " + congressData.results[0].twitter_id);

}
});

 });





