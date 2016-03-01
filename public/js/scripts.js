  var congressData;
  var zip;
  var check = false;
  $(function() {

    $('#legislators-form-link').click(function(e) {
    $("#legislators-form").delay(100).fadeIn(100);
    $("#bills-form").fadeOut(100);
    $('#bills-form-link').removeClass('active');
    $("#legislators-form").append(congressData);
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#bills-form-link').click(function(e) {
    $("#bills-form").delay(100).fadeIn(100);
    $("#legislators-form").fadeOut(100);
    $('#legislators-form-link').removeClass('active');
    $("#bills-form").append(congressData);
    $(this).addClass('active');
    e.preventDefault();
  });
});

  var xhr = new XMLHttpRequest(); 

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
            congressData = data.responseText;
            console.log("got through");
            console.log(congressData);

            


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







