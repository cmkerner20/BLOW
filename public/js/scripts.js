  $(function() {

    $('#legislators-form-link').click(function(e) {
    $("#legislators-form").delay(100).fadeIn(100);
    $("#bills-form").fadeOut(100);
    $('#bills-form-link').removeClass('active');
    $("#legislators-form").append("legislator");
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#bills-form-link').click(function(e) {
    $("#bills-form").delay(100).fadeIn(100);
    $("#legislators-form").fadeOut(100);
    $('#legislators-form-link').removeClass('active');
    $("#bills-form").append("bills");
    $(this).addClass('active');
    e.preventDefault();
  });


  var xhr = new XMLHttpRequest(); 
  var zip = 10280;

  console.log("js");

  document.getElementById("search").addEventListener("click", function(){
  $.ajax({
            url: 'https://congress.api.sunlightfoundation.com/legislators/locate?zip='+ zip + '?apikey=[25d5c2f6794144a89172fb92c6ad847e]',
            type: 'GET',
            dataType: 'application/json',
            data: congressData,
          success: function(result) {
            alert("Quiz Updated");

        }
        });

    
});




  });

