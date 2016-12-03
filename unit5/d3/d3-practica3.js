var data = [3, 7, 21, 31, 35, 42];

//select chart div
d3.select('.chart').selectAll('div')
//bind data array
.data(data)
//append nodes as a div
.enter().append('div')
//add style and text
.style({
  width:function(d){return 10*d+'px'},
  height:'15px',
  'background-color':'skyblue',
  'margin-top':'10px',
  'padding':'5px'
})
.text(function(d,i){return i;});