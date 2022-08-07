document.addEventListener("DOMContentLoaded", function(){
    
    let retryButton = document.querySelector(".filter__retry");
    let stepOneArr = document.querySelectorAll(".step-one .filter__item-main span");

    let stepTwoBlockArr = document.querySelectorAll(".step-two");
    let stepTwoArr = document.querySelectorAll(".step-two .filter__item");

    let stepThreeBlockArr = document.querySelectorAll(".step-three");
    let stepThreeArr = document.querySelectorAll(".step-three .filter__item");

    let stepFourBlockArr = document.querySelectorAll(".step-four");
    let stepFourArr = document.querySelectorAll(".step-four .filter__item");

    let stepFiveBlockArr = document.querySelectorAll(".step-five");

    let arrow = document.querySelector(".arrow-down-new");

    let items = document.querySelectorAll(".filter__tech-item");



    let room = document.querySelector(".room");

    retryButton.addEventListener(
        'click',
        () => {
            stepOneArr.forEach(item =>{
                item.parentElement.classList.remove("-disable");
                item.parentElement.classList.remove("-active");

                let stepOneParentRow = item.parentElement.parentElement;
                let stepOneParentBlock = item.parentElement;

                stepOneParentBlock.classList.remove("-disable");
                stepOneParentBlock.classList.remove("-active");
                stepOneParentRow.classList.remove("-disable");
                stepOneParentRow.classList.remove("-active");
                retryButton.classList.remove("-active");
                retryButton.classList.remove("-active");
            })
            stepTwoBlockArr.forEach(item2 =>{
                item2.classList.remove("-active");
            })

            stepThreeBlockArr.forEach(item3 =>{
                item3.classList.remove("-active");
            })
            stepTwoArr.forEach(item4 =>{
                item4.classList.remove("-active");
            })

            stepThreeArr.forEach(item5 =>{
                item5.classList.remove("-active");
            })

            stepFourBlockArr.forEach(item6 =>{
                item6.classList.remove("-active");
            })
            stepFourArr.forEach(item9 =>{
                item9.classList.remove("-active");
            })

            stepFiveBlockArr.forEach(item8 =>{
                item8.classList.remove("-active");
            })
            arrow.classList.remove("-active")

            items.forEach(item7 =>{
                item7.classList.remove("-active");
            })
            room.classList.remove("-active");

        }
    )

    stepOneArr.forEach(item =>{
        item.addEventListener(
            'click',
            () => {
                stepOneArr.forEach(item1 =>{
                    item1.parentElement.classList.add("-disable");
                })

                let stepOneParentRow = item.parentElement.parentElement;
                let stepOneParentBlock = item.parentElement;

                stepOneParentBlock.classList.remove("-disable");
                stepOneParentBlock.classList.add("-active");
                stepOneParentRow.classList.add("-active");
                retryButton.classList.add("-active");
            
                stepTwoBlockArr.forEach(item2 =>{
                    item2.classList.remove("-active");
                    if(item.dataset.step == item2.dataset.step){
                        item2.classList.add("-active");
                    }
                })
            }
        )
    })

    stepTwoArr.forEach(item =>{
        item.addEventListener(
            'click',
            () => {
                stepTwoArr.forEach(item1 =>{
                    item1.classList.remove("-active");
                })

                stepThreeArr.forEach(item1 =>{
                    item1.classList.remove("-active");
                })
                item.classList.remove("-disable");
                item.classList.add("-active");

                stepThreeBlockArr.forEach(item2 =>{
                    item2.classList.remove("-active");
                    if(item.dataset.step == item2.dataset.step){
                        item2.classList.add("-active");
                    }
                })

                stepFourBlockArr.forEach(item2 =>{
                    item2.classList.remove("-active");
                    if(item.dataset.step == item2.dataset.step){
                        item2.classList.add("-active");
                    }
                })

                stepFourArr.forEach(item9 =>{
                    item9.classList.remove("-active");
                })

                stepFiveBlockArr.forEach(item2 =>{
                    item2.classList.remove("-active");
                    if(item.dataset.step == item2.dataset.step){
                        item2.classList.add("-active");
                    }
                })

                items.forEach(item7 =>{
                    item7.classList.remove("-active");
                })
                arrow.classList.remove("-active")

                room.classList.remove("-active")

            }
        )
    })

    stepThreeArr.forEach(item =>{
        item.addEventListener(
            'click',
            () => {
                stepThreeArr.forEach(item1 =>{
                    item1.classList.remove("-active");
                })
                item.classList.remove("-disable");
                item.classList.add("-active");

                stepFourBlockArr.forEach(item2 =>{
                    item2.classList.remove("-active");
                    if(item.dataset.step == item2.dataset.step){
                        item2.classList.add("-active");
                    }
                })

                stepFiveBlockArr.forEach(item2 =>{
                    item2.classList.remove("-active");
                    if(item.dataset.step == item2.dataset.step){
                        item2.classList.add("-active");
                    }
                })
                stepFourArr.forEach(item9 =>{
                    item9.classList.remove("-active");
                })

                items.forEach(item7 =>{
                    item7.classList.remove("-active");
                })

                if(item.dataset.arrow == 'Y'){
                    arrow.classList.add("-active")
                } else {
                    arrow.classList.remove("-active")
                }

                room.classList.remove("-active")

            }
        )
    })


    stepFourArr.forEach(item =>{
        item.addEventListener(
            'click',
            () => {
                stepFourArr.forEach(item1 =>{
                    item1.classList.remove("-active");
                })
                item.classList.remove("-disable");
                item.classList.add("-active");

                stepFiveBlockArr.forEach(item2 =>{
                    item2.classList.remove("-active");
                    if(item.dataset.step == item2.dataset.step){
                        item2.classList.add("-active");
                    }
                })

                items.forEach(item7 =>{
                    item7.classList.remove("-active");
                })

                if(item.dataset.arrow == 'Y'){
                    arrow.classList.add("-active")
                }

                room.classList.remove("-active")

            }
        )
    })

    items.forEach(item =>{
        item.addEventListener(
            'click',
            () => {
                items.forEach(item1 =>{
                    item1.classList.remove("-active");
                })
                item.classList.remove("-disable");
                item.classList.add("-active");

                room.firstElementChild.firstElementChild.srcset = item.dataset.imagemob
                room.firstElementChild.lastElementChild.src = item.dataset.image

                room.classList.add("-active")


            }
        )
    })

      var swiper = new Swiper(".swiper1", {
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: true,
        navigation: {
            nextEl: ".pag-1-next",
            prevEl: ".pag-1-prev",
          },
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper2", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper3", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper4", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper5", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper6", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper7", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper8", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper9", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper10", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper11", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper12", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper13", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper14", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper15", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper16", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper17", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper18", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper19", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });
      var swiper = new Swiper(".swiper20", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            767: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 4,
            },
          },
      });

  
  });
      