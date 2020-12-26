

//Portfolio Item Filter

const filterContainer=document.querySelector(".portfolio-filter"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll(".portfolio-item"),
      totalPortfolioItems = portfolioItems.length;
      console.log(totalPortfolioItems)


    for(let i=0; i<totalFilterBtn; i++){
        filterBtns[i].addEventListener("click",function(){
            filterContainer.querySelector(".active").classList.remove("active")
            this.classList.add("active")

            const filterValue=this.getAttribute("data-filter")
            for(let k=0; k<totalPortfolioItems; k++){
                if(filterValue === portfolioItems.getAttribute("data-categor")){
                    portfolioItems[k].classList.add("active");
                } else{
                    portfolioItems[k].classList.add("hide")
                }   
            }
        })
    }
 
