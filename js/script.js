

//Portfolio Item Filter

const filterContainer=document.querySelector(".portfolio-filter"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll(".portfolio-item"),
      totalPortfolioItems = portfolioItems.length;
    //   console.log(totalPortfolioItems)


    for(let i=0; i<totalFilterBtn; i++){
        filterBtns[i].addEventListener("click",function(){
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue=this.getAttribute("data-filter");
            for(let k=0; k<totalPortfolioItems; k++){
                if(filterValue === portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                } else{
                    portfolioItems[k].classList.add("hide");
                    portfolioItems[k].classList.remove("show");
                }   
                if (filterValue === "all"){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show")   
                }
            }
        })
    }
 




    //Portfolio Lightbox
    const lightbox = document.querySelector(".lightbox"),
            lightboxImg = lightbox.querySelector(".lightbox-img"),
            lightboxClose = lightbox.querySelector(".lightbox-close"),
            lightboxtext = lightbox.querySelector(".caption-text"),
            lightboxCounter = lightbox.querySelector(".caption-counter");
    
    let itemIndex = 0;

    for(let i=0; i<totalPortfolioItems; i++){
        portfolioItems[i].addEventListener("click",function(){
            itemIndex=i;
            changeItem();
            toggleLightox();
        })
    }

    function nextItem(){
        if(itemIndex === totalPortfolioItems-1){
            itemIndex=0;
        }else{
            itemIndex++
        }
        changeItem();
    }

    function prevItem(){
        if(itemIndex === 0){
            itemIndex = totalPortfolioItems-1
        }else{
            itemIndex--
        }
        changeItem();
    }

    function toggleLightox(){
        lightbox.classList.toggle("open")
    }

    function changeItem() {
        imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        lightboxImg.src=imgSrc;
        lightboxtext.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalPortfolioItems
    }

    //closeLightbox
    lightbox.addEventListener("click",function(event){
        if(event.target === lightboxClose || event.target === lightbox){
            toggleLightox();
        }
    })

