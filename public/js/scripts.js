

  var congressData;
  var turbine;
  var addturbine;
  var name;
  var description;
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
   $('#list').hide();
   $('#graph').hide();}

 $('#search9').click(function(e) {
  check = true;
  console.log("*");
  name = $("#name").val();
  description = $("#description").val();
  var thing = '[{"name": "'+name+'", "description": "'+description+'"}]';
  JSON.parse(thing);
  console.log(thing);
  $.ajax({
            url: '/turbines',
            type: 'POST',
            contentType: "application/json",
            data: thing,
          complete: function() {
            console.log("added");
            loadTable();
            }
            });



 });
 $('#go').click(function(e) {
  loadTable();
 });

function loadTable(){
   console.log("called");
  $('#home').hide();
  $('#list').show();
       $.ajax({
            url: '/turbines',
            type: 'GET',
          complete: function(data) {
            console.log(data);
            fullData = JSON.parse(data.responseText);
            console.log("got through");
            console.log(fullData);
            swag = '<div id = "chart" class="swag"><table width="300" style="color: black" class="table"><thead><tr><th>Name</th><th>Description</th><th>Status</th></tr></thead>';
    for(var i= 0; i<fullData.length; i++){
      if(fullData[i].status === 'active'){
      swag+='<tbody><tr style="color: black" class="success"><td id= "'+i +'" class = "turb">'+ fullData[i].title + '</td><td class = "des">' + fullData[i].description + '</td><td>' + fullData[i].status + '</td></tr>';
    }
    else if(fullData[i].status === 'inactive'){
        swag+='<tbody><tr style="color: black"  class="danger"><td id="'+i +'" class = "turb">' + fullData[i].title + '</td><td class = "des">' + fullData[i].description + '</td><td>' + fullData[i].status + '</td></tr>';

    }
    // turbData.push(congressData.results[i]);

    }
     swag+='</tbody></table></div>';
     console.log(fullData);
    
     $("#turbine-form").append(swag); //write table

     $(".danger, .info").on("click", "td", function() {   //to indiviual "page"
     $('#list').hide();
     /////INSET GRACES CODE HERE
// var margin = {top: 40, right: 20, bottom: 30, left: 40},
//     width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;

// var formatPercent = d3.format(".0%");

// var x = d3.scale.ordinal()
//     .rangeRoundBands([0, width], .1);

// var y = d3.scale.linear()
//     .range([height, 0]);

// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom");

// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left")
//     .tickFormat(formatPercent);

// var tip = d3.tip()
//   .attr('class', 'd3-tip')
//   .offset([-10, 0])
//   .html(function(d) {
//     return "<strong>Frequency:</strong> <span style='color:red'>" + d.frequency + "</span>";
//   })

// var svg = d3.select("body").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// svg.call(tip);

// d3.tsv("data.tsv", type, function(error, data) {
//   x.domain(data.map(function(d) { return d.letter; }));
//   y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

//   svg.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis);

//   svg.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)
//     .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 6)
//       .attr("dy", ".71em")
//       .style("text-anchor", "end")
//       .text("Frequency");

//   svg.selectAll(".bar")
//       .data(data)
//     .enter().append("rect")
//       .attr("class", "bar")
//       .attr("x", function(d) { return x(d.letter); })
//       .attr("width", x.rangeBand())
//       .attr("y", function(d) { return y(d.frequency); })
//       .attr("height", function(d) { return height - y(d.frequency); })
//       .on('mouseover', tip.show)
//       .on('mouseout', tip.hide)

// });

// function type(d) {
//   d.frequency = +d.frequency;
//   return d;
// }



 /////////////////////////////////

     $('#graph').show();
     turbine = $(this).attr("id");
     console.log(turbine);
     $("#manage").text(fullData[turbine].title);
     // var chosen = legData[$(this).attr('id')];
     // console.log(chosen);
     
});
   //  $(".add").on("click", function() { 
   // addturbine = $(this).attr("id");
   // console.log(addturbine);
   //      });
          //  $("#legislators-form").append("NAME: " congressData.results[0].first_name + " " + congressData.results[0].last_name + " " + congressData.results[0].party + " " + congressData.results[0].twitter_id);

}
});

}




