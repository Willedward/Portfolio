const words = ['William Sugiharto.', 'A Student Developer.'];
const el = document.getElementById('typewriter');

let widx = 0;
let charidx = 0;
let dlt = false;

function typelooper()
{
    const currword = words[widx];
    if(!dlt)
    {
        el.textContent = currword.substring(0, charidx + 1);
        charidx++;
        if (charidx === currword.length)
        {
            dlt = true;
            setTimeout(typelooper, 1000);
            return;
        }
    }else{
        el.textContent = currword.substring(0, charidx-1);
        charidx--;
        if(charidx === 0)
        {
            dlt = false;
            widx = (widx+1)%words.length;
        }
    }
    const speed = dlt ? 60 : 100; //makes deleting faster, typing slower
    setTimeout(typelooper, speed)

}

window.addEventListener("load", typelooper);

document.addEventListener("DOMContentLoaded", function()
{
    const underline = document.querySelector(".underline");
    if(!underline) return;
    const observer = new IntersectionObserver((entries) => 
    {
        entries.forEach(entry => {
            if (entry.isIntersecting)
            {
                underline.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {threshold:0.3});
    observer.observe(underline); 
});

document.addEventListener("DOMContentLoaded", function()
{
    const underline1 = document.querySelector(".underline1");
    if(!underline1) return;
    const observer = new IntersectionObserver((entries) => 
    {
        entries.forEach(entry => {
            if (entry.isIntersecting)
            {
                underline1.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {threshold:0.3});
    observer.observe(underline1); 
});

document.addEventListener("DOMContentLoaded", function()
{
    const underline2 = document.querySelector(".underline2");
    if(!underline2) return;
    const observer = new IntersectionObserver((entries) => 
    {
        entries.forEach(entry => {
            if (entry.isIntersecting)
            {
                underline2.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {threshold:0.3});
    observer.observe(underline2); 
});

const toggleBtn = document.querySelector(".nav-toggle");
const overlay = document.querySelector(".nav-overlay");
const drawer = document.querySelector(".nav-drawer");

function openMenu(){
  document.body.classList.add("menu-open");
  overlay.hidden = false;
  toggleBtn.setAttribute("aria-expanded", "true");
  drawer.setAttribute("aria-hidden", "false");
}

function closeMenu(){
  document.body.classList.remove("menu-open");
  overlay.hidden = true;
  toggleBtn.setAttribute("aria-expanded", "false");
  drawer.setAttribute("aria-hidden", "true");
}

toggleBtn.addEventListener("click", () => {
  const isOpen = document.body.classList.contains("menu-open");
  isOpen ? closeMenu() : openMenu();
});

overlay.addEventListener("click", closeMenu);

// close when clicking a link
drawer.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", closeMenu);
});

// close with ESC
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeMenu();
});


