  var xhr = new XMLHttpRequest(); 
  var zip = 10280;

  conosle.log("js");

  $.ajax({
            url: 'https://congress.api.sunlightfoundation.com/legislators/locate?zip='+ zip + '?apikey=[25d5c2f6794144a89172fb92c6ad847e]',
            type: 'GET',
            dataType: 'application/json',
            data: congressData,
          success: function(result) {
            alert("Quiz Updated");

        }
        });
