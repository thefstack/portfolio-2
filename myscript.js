document.getElementById('projectLink1').addEventListener('click',()=>{
    open('https://rockethealththefstack.netlify.app','_blank')
})
document.getElementById('projectLink2').addEventListener('click',()=>{
    open('https://portfoliothefstack.netlify.app','_blank')
})
document.getElementById('projectLink3').addEventListener('click',()=>{
    open('https://school-project-jsev.onrender.com','_blank')
})
document.getElementById('projectLink4').addEventListener('click',()=>{
    open('https://biotequethefstack.netlify.app','_blank')
})
document.getElementById('projectLink5').addEventListener('click',()=>{
    open('https://school-project-jsev.onrender.com/adminlogin','_blank')
})



let leftAnimation=gsap.to(".left",{
    translateX: '-10%',
    opacity:0.7,
    stagger:0.5,
    scrollTrigger:{
        trigger:'.containerContainAll',
        start:"top -30px",
        end:"top -400px",
        scrub: true,
        ease: 'Shine'
    }
})
let rightAnimation=gsap.to(".right",{
    translateX: '10%',
    opacity:0.7,
    stagger:0.5,
    scrollTrigger:{
        trigger:'.containerContainAll',
        start:"top -30px",
        end:"top -400px",
        scrub: true,
        ease: 'Shine'
    }
})
gsap.to("#name",{
    y:-2000,
    scrollTrigger:{
        trigger:'.containerContainAll',
        start:"top -3700px",
        end:"top -4614px",
        scrub: true,
        ease: 'Shine'
    }
})

window.addEventListener('resize',()=>{
    const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  console.log(windowWidth)
  if(windowWidth<=1200)
  {
    rightAnimation.kill();
    leftAnimation.kill();
    gsap.to(".left",{
        translateX: '-10%',
        opacity:0.7,
        stagger:0.5,
        scrollTrigger:{
            trigger:'.containerContainAll',
            start:"top 0px",
            end:"top -200px",
            scrub: true,
            ease: 'Shine'
        }
    })
    gsap.to(".right",{
        translateX: '10%',
        opacity:0.7,
        stagger:0.5,
        scrollTrigger:{
            trigger:'.containerContainAll',
            start:"top 0px",
            end:"top -200px",
            scrub: true,
            ease: 'Shine'
        }
    })
  }
})

const typed=new Typed('#changingText',{
    strings:['FRONT',"BACK"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
    showCursor: false

})
ScrollReveal({ 
 
    distance: '150px',
    duration:1000,
    delay:100
});

ScrollReveal().reveal('.about, .videoSection, .experience-list, .skill-item', {origin:'bottom'});
