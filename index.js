

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

const drawBarChart = function (data, options, element){

  data.forEach((element, index) => {
    console.log('element is -> ' + element + 'at index => ' + index);
    illustrateBar(element);
  });

};


const data = [25, 45, 87, 12, 100] // temp mock data
drawBarChart(data);
