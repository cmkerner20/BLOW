  var congressData;
  var zip;
  var check = false;
  $(function() {

  //  $('#legislators-form-link').click(function(e) {
  //  $("#legislators-form").delay(100).fadeIn(100);
  //  $("#bills-form").fadeOut(100);
  //  $('#bills-form-link').removeClass('active');
  //  $(this).addClass('active');
  //  e.preventDefault();
  //});
 // $('#bills-form-link').click(function(e) {
 //   $("#bills-form").delay(100).fadeIn(100);
 //   $("#legislators-form").fadeOut(100);
 //   $('#legislators-form-link').removeClass('active');
 //  // $("#bills-form").append(congressData);
 //   $(this).addClass('active');
 // });
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
            url: 'https://congress.api.sunlightfoundation.com/legislators/locate?zip='+ zip+ '&apikey=7e9b73b47a324c499f9ac9c13bb9e624',
            type: 'GET',
<<<<<<< HEAD
            dataType: 'application/json',
            data: congressData,
          success: function(result) {
            alert("Quiz Updated");
          //  console.log(result);

        }
        });



    
=======
          complete: function(data) {
            console.log(data);
            congressData = JSON.parse(data.responseText);
            console.log("got through");
            console.log(congressData);
            swag = '<div class="container"><table style="color: black" class="table"><thead><tr><th>Name</th><th>Party</th><th>Twitter</th></tr></thead>';
    for(var i= 0; i<congressData.results.length; i++){
      if(congressData.results[i].party === 'D'){
      swag+='<tbody><tr style="color: black" class="info"><td><a href=/bills">'+ congressData.results[i].first_name + ' ' + congressData.results[i].last_name + '</a></td><td>Democrat</td><td>'+ congressData.results[i].twitter_id + '</td></tr>';
    }
    else if(congressData.results[i].party === 'R'){
        swag+='<tbody><tr style="color: black" class="danger"><td><a href="/bills">'+ congressData.results[i].first_name + ' ' + congressData.results[i].last_name + '</a></td><td>Republican</td><td>'+ congressData.results[i].twitter_id + '</td></tr>';

    }
    }
     swag+='</tbody></table></div>';
    
    $("#legislators-form").append(swag);
          //  $("#legislators-form").append("NAME: " congressData.results[0].first_name + " " + congressData.results[0].last_name + " " + congressData.results[0].party + " " + congressData.results[0].twitter_id);


        }
        });
  // $.ajax({
  //           url: '/home',
  //           type: 'POST',
  //           data: zip,
  //         complete: function(data) {
  //           console.log("got through");
  //           apiRequest();
           
  //       }
  //       });
   
>>>>>>> f93335d9d035c6d33f0d229f07dfae1c9f43f575
});
    
    // if($("#legislators-form").length>0){
    //   console.log("ajax");
    //   $.ajax({
    //         url: '/list',
    //         type: 'GET',
    //       complete: function(data) {
    //         console.log("got through");
    //         apiRequest();

    //     }
    //     });
      

//}







