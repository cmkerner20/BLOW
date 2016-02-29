  var xhr = new XMLHttpRequest(); 
  var zip = 10280;
  var congressData;

  console.log("js");

  document.getElementById("search").addEventListener("click", function(){
  $.ajax({
            url: 'https://congress.api.sunlightfoundation.com/legislators/locate?zip='+ zip + '?apikey=7e9b73b47a324c499f9ac9c13bb9e624',
            type: 'GET',
            dataType: 'application/json',
            data: congressData,
          success: function(result) {
            console.log("congressData");

        }
        });
    
});


