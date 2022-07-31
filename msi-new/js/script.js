document.addEventListener("DOMContentLoaded", function(){
    
    let retryButton = document.querySelector(".filter__retry");
    let stepOneArr = document.querySelectorAll(".step-one .filter__item-main span");

    let stepTwoBlockArr = document.querySelectorAll(".step-two");
    let stepTwoArr = document.querySelectorAll(".step-two .filter__item");

    let stepThreeBlockArr = document.querySelectorAll(".step-three");
    let stepThreeArr = document.querySelectorAll(".step-three .filter__item");

    let stepFourBlockArr = document.querySelectorAll(".step-four");
    let stepFourArr = document.querySelectorAll(".filter__tech-item");

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

            stepFourArr.forEach(item7 =>{
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

                stepFourArr.forEach(item7 =>{
                    item7.classList.remove("-active");
                })
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

                stepFourArr.forEach(item7 =>{
                    item7.classList.remove("-active");
                })

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

                // room.parentElement.source.srcset = '1213'
                room.firstElementChild.firstElementChild.srcset = item.dataset.imagemob
                room.firstElementChild.lastElementChild.src = item.dataset.image

                room.classList.add("-active")


            }
        )
    })

  
  });
      