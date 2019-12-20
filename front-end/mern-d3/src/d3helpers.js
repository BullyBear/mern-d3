import * as d3 from 'd3';



const barChart = (props) => {

    console.log("sup bro")


    var margin = {top: 20, right: 20, bottom: 70, left: 40},
        width = 600 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    console.log("margin", margin)

    // Parse the date / time
    //var parseDate = d3.timeScale("%Y-%m").parse;
    //var parseDate = d3.timeParse("%B %d, %Y");
    var parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ");

    //var x = d3.scaleOrdinal().rangeRoundBands([0, width], .05);
    var x = d3.scaleBand().rangeRound([0, width]);

    var y = d3.scaleLinear().range([height, 0]);

    //var xAxis = d3.svg.axis()
    var xAxis = d3.axisBottom()
        .scale(x)
    //.orient("bottom")
    //.tickFormat(d3.timeParse("%B %d, %Y"));
         .tickFormat(d3.timeFormat('%b %Y'));

    //var yAxis = d3.svg.axis()
    var yAxis = d3.axisLeft()
        .scale(y)
    //.orient("left")
        .ticks(10);

    var svg = d3.select(".viz").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr('id', 'svg-viz')
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");



    //d3.csv("bar-data.csv", function(error, data) {

    //if(typeof(data) === "string") {data = JSON.parse(data)}
    //data = JSON.parse(data);

    //data.forEach(function(d) {
    //d.date = parseDate(d.date);
    //d.value = +d.value;
    //});


    var API_URL = 'http://localhost:6969/dummyDatas';


    var query = '/get?where=' + JSON.stringify({
        "value": {"$gt": 300}
    })

    var queryTwo = '/get?where=' + JSON.stringify({
        "value": {"$lt": 300}
    })
    d3.json(API_URL + query).then( function(data, error) {

        if(error){
            return console.warn(error);
        }


        data.forEach(function(d) {
            d.date = parseDate(d.date);
            d.value = +d.value;
        });

        //console.log("data", data);
        x.domain(data.map(function(d) { return d.date; }));
        y.domain([0, d3.max(data, function(d) { return d.value; })]);


        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr('width', width)
            .attr("dx", "-.8em")
            .attr("dy", "-.55em")
            .attr("transform", "rotate(-90)" );

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Value ($)");


        svg.selectAll("bar")
        //.data(data)
            .data(data)
            .enter().append("rect")
            .style("fill", "steelblue")
            .attr("x", function(d) { return x(d.date); })
            .attr("width", 30)
            .attr("y", function(d) { return y(d.value); })
            .attr("height", function(d) { return height - y(d.value); });

    });

    // displayJSON(query);



    //x.domain(data.map(function(d) { return d.date; }));
    //y.domain([0, d3.max(data, function(d) { return d.value; })]);


    //});


}


/*
const bubbleChart = (props) => {

    d3.select('.viz > *').remove()
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    d3.select('.viz').append('svg')
      .attr('height', h)
      .attr('width', w)
      .attr('id', 'svg-viz')

    const bubbles = props.shapes
    let min = bubbles[0].number
    let max = bubbles[0].number
    for (let i=1; i< bubbles.length; i++){
      if (bubbles[i].number > max) {
        max = bubbles[i].number
      }
      if(bubbles[i].number < min) {
        min = bubbles[i].number
      }
    }
//const max = d3.max(bubbles)
    const radiusScale = d3.scaleSqrt().domain([0, max]).range([0, max])


    const simulation = d3.forceSimulation()
      .force('x', d3.forceX(w/3).strength(0.05))
      .force('y', d3.forceY(h/3).strength(0.05))
      .force('charge', d3.forceManyBody().strength(-1300))
      .force('collide', d3.forceCollide(d => radiusScale(d.number)+1))


    const circles = d3.select('#svg-viz').selectAll('circle')
      .data(props.shapes)
      .enter()
      .append('svg:circle')
      .attr('r', d => d.radius/2+"px")    // Replaced "Width" Value
//.attr('r', d => d.width/2+"px")
      .style('fill', (d) => d.color ? d.color : 'purple')


  simulation.nodes(props.shapes)
  .on('tick', ticked)

  function ticked() {
      circles
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
//.attr('r', d => d.r)
    }

  }
  */




//export default bubbleChart;
export default barChart;

