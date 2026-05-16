const bars = document.getElementById("bars");
const navbar = document.querySelector(".navbar");
const closebtn=document.getElementById("close");

bars.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

closebtn.addEventListener("click" ,()=> {
  navbar.classList.remove("active");
})

document.addEventListener("click", (e)=>{
  if(
    !navbar.contains(e.target) && 
    !bars.contains(e.target))
    {
      navbar.classList.remove("active");
    }
})
