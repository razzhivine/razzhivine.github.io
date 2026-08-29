let slideUp = (target, duration = 500) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

let slideDown = (target, duration = 500) => {
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "block";
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

let slideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === "none") {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".js-scroll-top-button")
    .addEventListener("click", function () {
      document.querySelector("body").scroll({
        top: 0,
        behavior: "smooth",
      });
    });

  document
    .querySelector(".js-mobile-block-open")
    .addEventListener("click", function () {
      document.querySelector(".js-mobile-block").classList.add("-active");
    });

  document
    .querySelector(".js-mobile-block-close")
    .addEventListener("click", function () {
      document.querySelector(".js-mobile-block").classList.remove("-active");
    });

  document.querySelectorAll(".js-select").forEach((element) => {
    element.addEventListener("click", () => {
      element.parentNode.classList.toggle("-active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".js-scroll-bannner");
  const button = document.querySelector(".js-scroll-bannner-button");

  button.addEventListener("click", function () {
    const contentHeight = container.scrollHeight;
    document.querySelector("body").scroll({
      top: contentHeight,
      behavior: "smooth",
    });
  });
});

function areasActivity(element, scroll = true) {
  if (!element.classList.contains("-active")) {
    document.querySelectorAll(".js-areas-activity-item").forEach((block) => {
      block.classList.remove("-active");

      if (block.querySelector(".areas-activity__item-image") !== null) {
        slideUp(block.querySelector(".areas-activity__item-image"));
      }

      if (block.querySelector(".areas-activity__item-text") !== null) {
        slideUp(block.querySelector(".areas-activity__item-text"));
      }

      if (block.querySelector(".areas-activity__item-link") !== null) {
        slideUp(block.querySelector(".areas-activity__item-link"));
      }

      if (block.querySelector(".areas-activity__item-tags") !== null) {
        slideUp(block.querySelector(".areas-activity__item-tags"));
      }
    });

    setTimeout(() => {
      if (element.querySelector(".areas-activity__item-image") !== null) {
        slideDown(element.querySelector(".areas-activity__item-image"));
      }

      if (element.querySelector(".areas-activity__item-text") !== null) {
        slideDown(element.querySelector(".areas-activity__item-text"));
      }

      if (element.querySelector(".areas-activity__item-link") !== null) {
        slideDown(element.querySelector(".areas-activity__item-link"));
      }

      if (element.querySelector(".areas-activity__item-tags") !== null) {
        slideDown(element.querySelector(".areas-activity__item-tags"));
      }

      element.classList.add("-active");

      if (window.matchMedia("(max-width: 767px)").matches && scroll) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    areasActivity(document.querySelector(".js-areas-activity-item"), false);
  });
  document.querySelectorAll(".js-areas-activity-item").forEach((element) => {
    element.addEventListener("click", () => {
      areasActivity(element, true);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".js-scroll-bannner");
  const button = document.querySelector(".js-scroll-bannner-button");

  button.addEventListener("click", function () {
    const contentHeight = container.scrollHeight;
    document.querySelector("body").scroll({
      top: contentHeight,
      behavior: "smooth",
    });
  });
});

function areasActivity(element, scroll = true) {
  if (!element.classList.contains("-active")) {
    document.querySelectorAll(".js-areas-activity-item").forEach((block) => {
      block.classList.remove("-active");

      if (block.querySelector(".areas-activity__item-image") !== null) {
        slideUp(block.querySelector(".areas-activity__item-image"));
      }

      if (block.querySelector(".areas-activity__item-text") !== null) {
        slideUp(block.querySelector(".areas-activity__item-text"));
      }

      if (block.querySelector(".areas-activity__item-link") !== null) {
        slideUp(block.querySelector(".areas-activity__item-link"));
      }

      if (block.querySelector(".areas-activity__item-tags") !== null) {
        slideUp(block.querySelector(".areas-activity__item-tags"));
      }
    });

    setTimeout(() => {
      if (element.querySelector(".areas-activity__item-image") !== null) {
        slideDown(element.querySelector(".areas-activity__item-image"));
      }

      if (element.querySelector(".areas-activity__item-text") !== null) {
        slideDown(element.querySelector(".areas-activity__item-text"));
      }

      if (element.querySelector(".areas-activity__item-link") !== null) {
        slideDown(element.querySelector(".areas-activity__item-link"));
      }

      if (element.querySelector(".areas-activity__item-tags") !== null) {
        slideDown(element.querySelector(".areas-activity__item-tags"));
      }

      element.classList.add("-active");

      if (window.matchMedia("(max-width: 767px)").matches && scroll) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    areasActivity(document.querySelector(".js-areas-activity-item"), false);
  });
  document.querySelectorAll(".js-areas-activity-item").forEach((element) => {
    element.addEventListener("click", () => {
      areasActivity(element, true);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var historyContentSlider = new Splide(".js-history-content-slider", {
    perPage: 1,
    pagination: false,
    arrows: false,
    gap: "20px",
  });

  var historyPaginationSlider = new Splide(".js-history-pagination-slider", {
    drag: true,
    perPage: "auto",
    pagination: false,
    arrows: false,
    gap: "20px",
    isNavigation: true,
  });

  historyContentSlider.sync(historyPaginationSlider);
  historyContentSlider.mount();
  historyPaginationSlider.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".js-presentation-tab").forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelectorAll(".js-presentation-block").forEach((block) => {
        block.classList.remove("-active");
      });
      document.querySelectorAll(".js-presentation-tab").forEach((tab) => {
        tab.classList.remove("-active");
      });
      document
        .querySelector(
          '.js-presentation-block[data-id="' + element.dataset.id + '"]',
        )
        .classList.add("-active");
      element.classList.add("-active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".js-scroll-bannner");
  const button = document.querySelector(".js-scroll-bannner-button");

  button.addEventListener("click", function () {
    const contentHeight = container.scrollHeight;
    document.querySelector("body").scroll({
      top: contentHeight,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var enterprisesSlider = new Splide(".js-enterprises-slider", {
    perPage: 1,
    padding: { right: "100px" },
    pagination: false,
    arrows: false,
    gap: 20,
    scroll: true,
  });

  if (window.matchMedia("(max-width: 767px)").matches) {
    enterprisesSlider.mount();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".js-scroll-bannner");
  const button = document.querySelector(".js-scroll-bannner-button");

  button.addEventListener("click", function () {
    const contentHeight = container.scrollHeight;
    document.querySelector("body").scroll({
      top: contentHeight,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".js-scroll-bannner");
  const button = document.querySelector(".js-scroll-bannner-button");

  button.addEventListener("click", function () {
    const contentHeight = container.scrollHeight;
    document.querySelector("body").scroll({
      top: contentHeight,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".js-region").forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelectorAll(".js-region").forEach((region) => {
        region.parentNode.classList.remove("-active");
      });
      element.parentNode.classList.add("-active");
      document
        .querySelector(".js-geography-of-presence-overlay")
        .classList.add("-active");
    });
  });

  document
    .querySelector(".js-geography-of-presence-overlay")
    .addEventListener("click", () => {
      document.querySelectorAll(".js-region").forEach((region) => {
        region.parentNode.classList.remove("-active");
      });
      document
        .querySelector(".js-geography-of-presence-overlay")
        .classList.remove("-active");
    });

  document
    .querySelectorAll(".js-geography-of-presence-item-companies-close")
    .forEach((element) => {
      element.addEventListener("click", () => {
        document.querySelectorAll(".js-region").forEach((region) => {
          region.parentNode.classList.remove("-active");
        });
        document
          .querySelector(".js-geography-of-presence-overlay")
          .classList.remove("-active");
      });
    });

  document
    .querySelectorAll(".js-geography-of-presence-region")
    .forEach((element) => {
      element.addEventListener("click", () => {
        document.querySelectorAll(".js-regionn").forEach((region) => {
          region.classList.remove("-active");
        });
        element.parentNode.classList.add("-active");
        document
          .querySelector(".js-geography-of-presence-overlay")
          .classList.add("-active");
      });
    });

  document
    .querySelector(".js-geography-of-presence-overlay")
    .addEventListener("click", () => {
      document.querySelectorAll(".js-regionn").forEach((region) => {
        region.classList.remove("-active");
      });
      document
        .querySelector(".js-geography-of-presence-overlay")
        .classList.remove("-active");
    });

  document.querySelectorAll(".js-type").forEach((element) => {
    element.addEventListener("click", () => {
      if (element.dataset.type == "map") {
        document.querySelector(".js-grid").classList.add("-active");
        document
          .querySelector(".js-geography-of-presence-info")
          .classList.add("-active");
        document
          .querySelector(".js-geography-of-presence-info-desc")
          .classList.add("-active");
        document.querySelector(".js-list").classList.remove("-active");
      } else if (element.dataset.type == "list") {
        document.querySelector(".js-list").classList.add("-active");
        document
          .querySelector(".js-geography-of-presence-info")
          .classList.remove("-active");
        document
          .querySelector(".js-geography-of-presence-info-desc")
          .classList.remove("-active");
        document.querySelector(".js-grid").classList.remove("-active");
      }
      document.querySelectorAll(".js-type").forEach((type) => {
        type.classList.remove("-active");
      });
      element.classList.add("-active");
    });
  });
  document.querySelector("#filter").addEventListener("keyup", () => {
    document.querySelectorAll(".js-region").forEach((element) => {
      element.parentNode.classList.remove("-filtered");

      if (element.innerText == document.querySelector("#filter").value) {
        console.log(element.innerText);
        element.parentNode.classList.add("-filtered");
      }
    });

    document
      .querySelectorAll(".js-regionn .js-geography-of-presence-region")
      .forEach((element) => {
        if (
          element.innerText
            .toLowerCase()
            .includes(document.querySelector("#filter").value.toLowerCase()) &&
          document.querySelector("#filter").value
        ) {
          element.parentNode.classList.add("-filtered");
        } else {
          element.parentNode.classList.remove("-filtered");
        }
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var enterprisesSlider = new Splide(".js-enterprises-slider", {
    perPage: 1,
    padding: { right: "100px" },
    pagination: false,
    arrows: false,
    gap: 20,
    scroll: true,
  });

  if (window.matchMedia("(max-width: 767px)").matches) {
    enterprisesSlider.mount();
  }
});
