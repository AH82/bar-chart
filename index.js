

const illustrateBar = function (data) {

    $(document).ready(function(){

      $('.bars-container').css({backgroundColor: "red" }) // css >> highlighter-placeholder
        .append("<div></div>")
        .children("div:last-child")
        .addClass("bar__item")
        .css({width: `${data}%`})
        .append("<span></span>")
        .children("span").text(`${data}`).addClass("bar__item__value")

  });

}
const illustrateBarLabels = function (data) {

  $(document).ready(function(){

    $('.bar-labels-container').css({backgroundColor: "red" }) // css >> highlighter-placeholder
      .append("<div></div>")
      .children("div:last-child")
      .addClass("bar-label__item")
      // .css({width: `${data}%`})
      .append("<span></span>")
      .children("span").text(`${data}`)
      // .addClass("bar__item__value")

});

}

const drawBarChart = function (data, options, element){
  $(document).ready(function(){

    $(".dashboard__graph")
      .empty()
      .append("<header></header>")
      .append("<div></div>")
      .children("header").addClass("graph__header").parent()
      .children("div").addClass("graph__illustrator")

    $(".graph__header")
      .append("<h2></h2>").children("h2").text("Graph Title")
      .parent()
      .append("<p></p>").children("p").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et mi nec massa hendrerit efficitur. ")

    $(".graph__illustrator")
      .append("<div></div>").children("div:last-child").addClass("bar-labels-container")
      .parent()
      .append("<div></div>").children("div:last-child").addClass("vl")
      .parent()
      .append("<div></div>").children("div:last-child").addClass("bars-container")

});


  data.forEach((element, index) => {
    console.log('element is -> ' + element + 'at index => ' + index);
    illustrateBar(element.barValue);
    illustrateBarLabels(element.barLabel);
  });

};

// test data
const data = [25, 45, 87, 12, 100] // temp mock data
const data01 = [
  { barLabel : "label-A1", barValue : 1 },
  { barLabel : "label-A2", barValue : 87 },
  { barLabel : "label-A3", barValue : 50 },
  { barLabel : "label-A4", barValue : 33 },
  { barLabel : "label-A5", barValue : 100 },
  { barLabel : "label-A6", barValue : 0 }
];
drawBarChart(data01);
// drawBarChart(data);
