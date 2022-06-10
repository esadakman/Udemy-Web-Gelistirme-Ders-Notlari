// card body seçip birinci indexi seçiyoruz
const cardBody = document.querySelectorAll(".card-body")[1];
// title alanını alıyoruz
const title = document.querySelector("#tasks-title");

// Click Event Tek tık

// title.addEventListener("click",run);

// Double Click çift tık

// title.addEventListener("dblclick",run);

// Mouse Down

// title.addEventListener("mousedown",run);

// Mouse Up

// title.addEventListener("mouseup",run);

// Mouse Over imleç gelince çalışır

// title.addEventListener("mouseover",run);

// // Mouse Out imleç terkedince çalışır

// title.addEventListener("mouseout",run);

//cardbodyde olduğu için her gezişte sürekli oluşuyor

// cardBody.addEventListener("mouseover",run); 
// cardBody.addEventListener("mouseout",run);

// Mouse Enter ve Mouse Leave

// cardBody.addEventListener("mouseenter",run);
// cardBody.addEventListener("mouseleave",run);



function run(e) {
    console.log(e.type);
}