

  var congressData;
  var bills;
  var person;
  var cosponsors;
  var zip;
  var check = false;
  var legData= [];
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
$('#bills').hide();
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
            url: 'https://congress.api.sunlightfoundation.com/legislators/locate?zip='+ zip+ '&apikey=7e9b73b47a324c499f9ac9c13bb9e624',
            type: 'GET',
          complete: function(data) {
            console.log(data);
            congressData = JSON.parse(data.responseText);
            console.log("got through");
            console.log(congressData);
            swag = '<div id = "chart" class="swag"><table width="300" style="color: black" class="table"><thead><tr><th>Name</th><th>Party</th><th>Twitter</th><th>Add</th></tr></thead>';
    for(var i= 0; i<congressData.results.length; i++){
      if(congressData.results[i].party === 'D'){
      swag+='<tbody><tr id= "'+i +'"style="color: black" class="info"><td class = "legislator"><a href="#">'+ congressData.results[i].first_name + ' ' + congressData.results[i].last_name + '</a></td><td>Democrat</td><td>'+ congressData.results[i].twitter_id + '</td><td><button>+</button></td></tr>';
    }
    else if(congressData.results[i].party === 'R'){
        swag+='<tbody><tr id="'+i +'"style="color: black" class="danger"><td class = "lesiglator"><a href="#">'+ congressData.results[i].first_name + ' ' + congressData.results[i].last_name + '</a></td><td>Republican</td><td>'+ congressData.results[i].twitter_id + '</td><button>+</button></tr>';

    }
    legData.push(congressData.results[i]);

    }
     swag+='</tbody></table></div>';
     console.log(legData);
    
     $("#legislators-form").append(swag); //write table

     $(".table").on("click", "tr", function() {   //to indiviual "page"
     $('#list').hide();
     $('#bills').show();
     person = $(this).attr("id");
     $("#topHeader").text(legData[person].first_name+ " " + legData[person].last_name);
     findBills();
     // var chosen = legData[$(this).attr('id')];
     // console.log(chosen);

});
          //  $("#legislators-form").append("NAME: " congressData.results[0].first_name + " " + congressData.results[0].last_name + " " + congressData.results[0].party + " " + congressData.results[0].twitter_id);


        }
        });   
});

function findBills(){
  $.ajax({
            url: 'https://congress.api.sunlightfoundation.com/bills?sponsor_id=' + legData[person].bioguide_id + '&fields=official_title,bill_id&apikey=7e9b73b47a324c499f9ac9c13bb9e624',
            type: 'GET',
          complete: function(data) {
            console.log(data);
            bills = JSON.parse(data.responseText);
            console.log(" bills got through");
            console.log(bills);
            showBills();
          }
            });
}

function showBills(){
  var display = "";
  for(var b = 0; b<bills.results.length; b++){
   display += "<p>";
   display+= bills.results[b].official_title;
   display+= "<p>";
  }
  $("#display").append(display);
}

