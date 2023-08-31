
const rawApi= async() =>{

    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");

    const data= await res.json();

    const menuContainer = document.getElementById("menu-container");

    data.data.forEach((element) => {
        const div= document.createElement("div");

        div.innerHTML= 
        `<button class="btn  hover:bg-[#FF1F3D] hover:text-[#FFF]">${element.category}</button>
        `
        menuContainer.appendChild(div);
    });
}

rawApi();