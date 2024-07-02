
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

const page1=()=>{
    var tl=gsap.timeline()
tl.to('.startpage',{
    delay:.2,
    transform:'translateY(-100%)',
    duration:.6
})
tl.to('.endpage',{
    delay:1,
    y:0,
    duration:.5
})
tl.to('.loader',{
    display:'none'
})
}
page1()

gsap.to('.elechild',{
    transform:'translateX(-100%)',
    repeat:-1,
    duration:.5,
    ease:'none'
})

var ele=document.querySelectorAll('.ele');
var page2=document.querySelector('.page2')
ele.forEach(
    (d)=>{
        d.addEventListener(
            'mouseover',()=>{
                const path=d.getAttribute('data-img')
                page2.style.background=`url(${path})`

            }
        )
        d.addEventListener('mouseout',()=>{
            page2.style.background='black'
        })
        d.addEventListener('wheel',()=>{
            page2.style.background='black'
        })
    }
)

var back=document.querySelector(".back");
back.addEventListener(
    'click',()=>{
       scroll.scrollTo(0)
    }
)
