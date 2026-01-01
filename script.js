const toggle=document.getElementById("modeToggle");

toggle.onclick=()=>{
 document.body.classList.toggle("dark");
}
const cards=document.querySelectorAll('.masonry-card');

const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
   if(e.isIntersecting) e.target.classList.add('show');
 });
});

cards.forEach(c=>observer.observe(c));

const revealItems = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

revealItems.forEach(item=>revealObserver.observe(item));
