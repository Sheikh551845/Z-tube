
const rawApi= async() =>{

    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");

    const data= await res.json();

    const menuContainer = document.getElementById("menu-container");

    data.data.forEach((element) => {

        
        const div= document.createElement("div");

        div.innerHTML= 
        `<button onclick = cardInfo(${element.category_id}) class="btn  hover:bg-[#FF1F3D] hover:text-[#FFF]">${element.category}</button>
        `
        menuContainer.appendChild(div);
    });
}


const cardInfo = async(categoryId=1000) =>{

   

    const res = await fetch( `https://openapi.programming-hero.com/api/videos/category/${categoryId}`);

    const data= await res.json();

    const cardContainer = document.getElementById("card-container");
    
    cardContainer.innerHTML=" ";

        data.data.forEach((element) => {

        const tViews= (element.others?.views).slice(0,-1);
        

            const card= document.createElement("div");

            let blueTick="";

            if(element.authors[0].verified)
            {
                blueTick=`<img src="./correct.png" class="rounded-full w-6 h-6" alt="">`;
            }
            else{
                blueTick="";
            }

            card.innerHTML=
                            `<div class="card w-[360px] bg-base-100 shadow-xl">
                            <figure><img src="${element.thumbnail}" class="w-[360px] h-[200px] "alt="" /></figure>
                            <div class="card-body">
                            <div id="card-details-container" class="flex flex-row gap-2">
                                <div>
                                    <img src="${element.authors[0]?.profile_picture}" class="rounded-full w-10 h-10" alt="">
                                </div>
                              <div class="">
                                <h1 class="card-title">
                                    ${element.title}
                                </h1>
                                <div class="flex mt-2 gap-2 max-w-max">
                                   <p>
                                   ${element.authors[0]?.profile_name} 
                                   </p>
                               
                                 ${blueTick}
                                    
                                </div>

                               <p id="views">
                               ${element.others?.views} 
                               </p>
                              </div>
                            </div>
                            </div>
                          </div>`;
        cardContainer.appendChild(card);            
        });

      if(!(data.status))
      {
        const div= document.getElementById('not-found');
        const notFound=document.createElement("div")

        notFound.innerHTML=
        `
        <img src="./Icon.png" class="mx-auto mt-[100px]">
        <h1 class="text-3xl font-bold text-center">Oops!! Sorry, There is no<br>content here</h1>
        `;

        div.appendChild(notFound);
      }

}



cardInfo();
rawApi();