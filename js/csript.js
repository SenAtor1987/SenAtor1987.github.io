alert("JS connected");


  let position = 0;
  const SliderToShow = 1;
  const SliderToScroll = 1;
  const slader_containe = $(".slader_containe");
  const slider_track = $(".slider_track");
  const production_page_item = $(".production_page_item");
  const btn_prev = $(`.btn_prev`);
  const btn_next = $(".btn_next");
  const itemWidth = container.width() / SliderToShow;

  item.each(function (index, iten) {
      $(item).css({
        minWidth: itemWidthh,
      });
  });

  btn_prev.click(function() {
    console.log(`.btn_prev`);
  });

  btn_next.click(function() {
    console.log("btn_next");
  });




 