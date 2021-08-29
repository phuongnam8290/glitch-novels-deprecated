$(document).ready(() => {
  // Navigation bar toggler button animation
  $('.navbar-toggler').click(() => {
    $('.navbar-toggler').toggleClass('change');
  });

  // Init carousel
  initCarousel();

  // Handle hover for active curator with long name
  $('.curators .curator.active .name .content').hover(startMarquee, stopMarquee);

  // Handle slide right for active curator (only on medium screen and above)
  $('.curators .curator .follow a').hover(
    () => {
      if ($(window).width() <=768) {
        return;
      }
      $('.curators .curator.active .followers-number').stop().animate({width: '15rem'}, 500);
    },
    () => {
      if ($(window).width() <=768) {
        return;
      }
      $('.curators .curator.active .followers-number').stop().animate({width: '-20px'}, 500)
    }
  );

  // Handle slide left for deactive curators (only on lg screen)
  for(let i = 1; i <= 4; i++) {
    $(`#deactive-curator-${i} .avatar`).hover (
      () => {
        if($(window).width() <= 992) {
          return;
        }

        let followersNumberContentWidth = $(`#deactive-curator-${i} .followers-number .content`).width();
        let scrollWidth = $(1.5).toPx() + followersNumberContentWidth + 10;
        $(`#deactive-curator-${i} .info`).stop().animate({width: `${scrollWidth}px`}, 500, () => {
          let name = $(`#deactive-curator-${i} .name .content`);
          loopMarquee(name);
        });
      },
      () => {
        $(`#deactive-curator-${i} .info`).stop().animate({width: '-20px'}, 500);
      }
    );
  };

  // Handle click event for deactive curators  
  $('.curator.deactive').click(event => {

    let clickedCurator = $(event.currentTarget);
    let activeCurator = $('#active-curator');

    // Get elements of clicked curator
    let clickedCuratorAvatar = clickedCurator.find('.avatar img');
    let clickedCuratorName = clickedCurator.find('.name .content');
    let clickedCuratorFollowers = clickedCurator.find('.followers-number .content');
    
    // Replicate values of clicked curator
    let replicatedAvatarSrc = clickedCuratorAvatar.attr("src");
    let replicatedNameText = clickedCuratorName.text();
    let replicatedFollowers = clickedCuratorFollowers.text();

    // Replace clicked curator's values with current activated curator
    let activeCuratorAvatar = activeCurator.find('.avatar img.hidden');
    setImgSrc(activeCuratorAvatar, clickedCuratorAvatar, clickedCuratorAvatar);

    let activeCuratorName = activeCurator.find('.name .content.hidden');
    setText(activeCuratorName, clickedCuratorName, null);
    
    let activeCuratorFollowers = activeCurator.find('.followers-number .content');
    setText(activeCuratorFollowers, clickedCuratorFollowers, null)

    // Set new values for activate curator
    let activeCuratorAvatarLayer = activeCurator.find('.avatar img.layer');
    setImgSrc(replicatedAvatarSrc, activeCuratorAvatar, activeCuratorAvatarLayer);

    let activeCuratorNameLayer = activeCurator.find('.name .content.layer');
    setText(replicatedNameText, activeCuratorName, activeCuratorNameLayer);
    setText(replicatedFollowers, activeCuratorFollowers, activeCuratorFollowers);

    toggleFollowBtn();
    toggleReviews(replicatedNameText);

    clickedCurator.find('.info').stop().animate({width: '-20px'}, 500);
  });

  // Init text-scroll for reviews
  for (let i =1; i <= 4; i++) {
    new ScrollBooster({
      viewport: document.querySelector(`.curators .review .viewport-${i}`),
      content: document.querySelector(`.curators .review .content-${i}`),
      scrollMode: 'transform',
      direction: 'vertical',
      bounce: false,
      onUpdate: (state) => {
        let copy = state;
      }
    });
  } 

  // Scroll title when hover if title's text is too long
  $('.title').hover(startMarquee, stopMarquee);
});



$(window).resize(() => {
  // Destroy and re-create carousel when resize
  $('.owl-carousel').trigger('destroy.owl.carousel');
  initCarousel();
})

// Carousel initializer function
let initCarousel = () => {
  $('.banner').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    center: true,
    autoWidth: true
  });

  calculateCarouselPadding();
}

// Calculate carousel padding
let calculateCarouselPadding = () => {
  $(".owl-carousel").css({'margin-top': $('nav.navbar').outerHeight()});
}

// Scroll overflow text fuctions
let startMarquee = arg => {
  let element = arg;
  
  // Look like arg is an event
  if(arg.target) {
    element = $(arg.target);
  }
  
  let elementWidth = element.width();
  let containerWidth = element.parent().width();

  if(elementWidth > containerWidth) {
    let scrollDistance = elementWidth - containerWidth;
    let container = element.parent();

    container.stop();
    container.animate(
      {scrollLeft: scrollDistance},
      2000, 
      'linear'
    );
  }
}

let stopMarquee = arg  => {
  let container = arg;
  
  if(arg.target) {
    container = $(event.target).parent();
  }

  container.stop();
  container.animate(
    {scrollLeft: 0},
    400,
    'swing'
  );
}

let loopMarquee =  arg => {
  let element = arg;

  // Look like arg is an event
  if(arg.target) {
    element = $(arg.target);
  }
  
  let elementWidth = element.width();
  let containerWidth = element.parent().width();

  if(elementWidth > containerWidth) {
    let scrollDistance = elementWidth - containerWidth;
    let container = element.parent();

    container.stop();
    container.animate(
      {scrollLeft: scrollDistance},
      1000, 
      'linear'
    ).animate(
      {scrollLeft: 0},
      1000,
      'linear'
    );
  }
}

let setText = (source, target, effect) => {
  let newValue = source

  if(source instanceof jQuery) {
    newValue = source.text();
  }

  target.text(newValue);

  if (effect != null) {
    $(effect).fadeOut(300, () => {
      effect.text(newValue).fadeIn(300);
    });
  }
}

let setImgSrc = (source, target, effect) => {
  let newSrc = source;
  
  if (source instanceof jQuery) {
    newSrc = source.attr("src");
  }

  if (effect !== target) {
    target.attr("src", newSrc);
  }
 
  $(effect).fadeOut(300, () => {
    effect.attr("src", newSrc).fadeIn(300);
  });
}

let toggleReviews = (name) => {
  let id = name.trim().toLowerCase().replaceAll(" ", "_").replaceAll(".", "_");

  let activatingReviews = $(`#reviews-${id}`)
  let deactivatingReviews = $('.reviews.active');

  deactivatingReviews.addClass("deactive").removeClass("active");
  activatingReviews.addClass("active").removeClass("deactive");

  deactivatingReviews.fadeToggle(300, () => {
    activatingReviews.fadeToggle(300, () => {
      let viewports = $(activatingReviews).find('.viewport');

      // Create scrollbooster object for newly avilable reviews
      viewports.each((i, viewport) => {     
        new ScrollBooster({
          viewport: $(viewport)[0],
          content: $(viewport).find('.content')[0],
          scrollMode: 'transform',
          direction: 'vertical',
          bounce: false
        });
      });
    });
  })
}

let toggleFollowBtn = () => {
  let followBtn = $('.curator.active .follow a');
  followBtn.fadeOut(300, () => {
    followBtn.fadeIn(300);
  })
}