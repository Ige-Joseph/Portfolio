let a = document.querySelector(`.js-a`)

let b = document.querySelector(`.js-x`)

let c = document.querySelector(`.Social-Media`)

let d = document.querySelector(`.body-content`)

console.log(d)

 
window.onload = function() {
  document.getElementById('mask-photo').classList.add('animate-mask');
  document.getElementById('animated-text1').classList.add('animate-text');
  document.getElementById('animated-text2').classList.add('animate-text');
  document.getElementById('typewriter-text').classList.add('animate-typewriter');
};


let Openslide = false

function AAA() {

  console.log(a.style)

   Openslide = !Openslide

  if (a.style.left === `-300px` || Openslide  ) {
    a.style.left = `0px`

    c.classList.add(`SM`)

    d.style.left = `00px`

     

  }
  else {
    a.style.left = `-300px`
    c.classList.remove(`SM`)
    d.style.left = `0px`
  }
 
}




   // animation function for Grapghic dynamics


  let Graphic =  document.querySelector(`.SkillsCardGraphic`)

  let displayGraphicbutton = document.querySelector(`.js-GraphicSkillsetinfo`)

  displayGraphicbutton.addEventListener(`click`, ()=>{

    
    clearFunction()
    removeClassList()
   
    addCount(clickCount)
    ShowFunc()
    
  })

   
   


  // if (webDev.style.display = `none`) {
  //   console.log(`hi`)
  // }
  // else {
  //   console.log(`no`)
  // }

  let showDetail = false

  let clickCount = 0

  function ShowFunc() {

    showDetail = !showDetail

    clickCount2 = 0

    clickCount3 = 0

    clickCount4 = 0

    clickCount5 = 0

    clickCountforShowALL = 0


    

    if ((Graphic.style.display === `none`) || (showDetail && clickCount === 0)) {

       
      console.log(`clicked`)
      Graphic.style.display = `contents`
      Web.style.display = `none`
      NicheDiv.style.display === `none`
      clickCount++
      displayGraphicbutton.classList.add(`All-Skillset-informationActivated`)

      toggleDiv()
    }

    else{
      Graphic.style.display = `contents`
      displayGraphicbutton.classList.add(`All-Skillset-informationActivated`)
      displayAnimatorButton.classList.add(`All-Skillset-informationActivated`)

      toggleDiv()
      
      alert(`you clicked the graphic design tab more than Twice`)
    }

    // else {
       
    //   Graphic.style.display = `contents`

      
    // }  

  }




   // animation function for Web development

 let Web = document.querySelector(`.js-SkillsCardWebDevelop`)
  

 let displayWebButton = document.querySelector(`.js-WebSkillsetinfo`)



 displayWebButton.addEventListener(`click`, ()=> {
  clearFunction()
  removeClassList()
  addCount(clickCount2)
  DisplayWebinfo()
 })

// let showDetail = false

clickCount2 = 0


showDetail2 = false

 function DisplayWebinfo(){

  showDetail2 = !showDetail2


  clickCount = 0

  clickCount3 = 0

  clickCount4 = 0

  clickCount5 = 0

  clickCountforShowALL = 0

  if (Web.style.display === `none` || (showDetail2 && clickCount2 === 0 )) {
 Web.style.display = `contents`
 Graphic.style.display = `none`
 animationinfobox.style.display = `none`
 DigitalArtDiv.style.display = `none`
 NicheDiv.style.display =  `none`

 displayWebButton.classList.add(`All-Skillset-informationActivated`)

 clickCount2++
  }
 

  else  {
    Web.style.display = `contents`
    displayWebButton.classList.add(`All-Skillset-informationActivated`)
     
    alert(`you clicked the web dev project tab more than Twice`)
  }

 }




  // animation function for dynamics
 
 let animationinfobox = document.querySelector(`.SkillsCard3dArtist`)
 
 let displayAnimatorButton = document.querySelector(`.js-AnimatorSkillsetinfo`)
    
 
  displayAnimatorButton.addEventListener(`click`, ()=>{
    clearFunction()
    removeClassList()
    addCount(clickCount3)
    show3ddiv() 
  })
  
  clickCount3 = 0

  showDetail1 = false


  function show3ddiv() {

    showDetail1 = !showDetail1

    clickCount = 0

    clickCount2 = 0

    clickCount4 = 0

    clickCount5 = 0 

    clickCountforShowALL = 0

    if(animationinfobox.style.display === `none` || (showDetail1 && clickCount3 === 0 ) ){
      animationinfobox.style.display = `contents`

      Web.style.display = `none`
      Graphic.style.display = `none`
      DigitalArtDiv.style.display = `none`
      NicheDiv.style.display = `none`
      clickCount3++

      displayAnimatorButton.classList.add(`All-Skillset-informationActivated`)
    }

    else {
      animationinfobox.style.display = `content`
      displayAnimatorButton.classList.add(`All-Skillset-informationActivated`)
      alert(`you clicked the web dev project tab more than Twice`)
    }
    

  }





 




 let DigitalArtDiv = document.querySelector(`.js-SkillsCardDigitalArtist`)



let DigitalArtButton = document.querySelector('.Js-DigitalArtistSkillInformation')


DigitalArtButton.addEventListener(`click`,  function () {
  clearFunction()
  removeClassList()
  addCount(clickCount4)
  ShowArt()
})


clickCount4 = 0

showDetail4 = false




function ShowArt() {

  showDetail4 = !showDetail4


  clickCount = 0

  clickCount2 = 0

  clickCount3 = 0

  clickCount5 = 0

  clickCountforShowALL = 0

  if(DigitalArtDiv.style.display === `none` || (showDetail4 && clickCount4 === 0 ) ){
    DigitalArtDiv.style.display = `contents`

    Web.style.display = `none`
    Graphic.style.display = `none`
    animationinfobox.style.display = `none`
    NicheDiv.style.display  = `none`
    clickCount4++ 

    DigitalArtButton.classList.add(`All-Skillset-informationActivated`)
  }

  else{
    DigitalArtDiv.style.display = `content`
     
    alert(`you clicked the web dev project tab more than Twice`)
    DigitalArtButton.classList.add(`All-Skillset-informationActivated`)
  }



}



    






let NicheButton = document.querySelector('.js-NicheSkillset-information')


let NicheDiv = document.querySelector('.js-SkillsCardNiche')


NicheButton.addEventListener(`click`,  function () {
  clearFunction()
  removeClassList()
  addCount(clickCount5) 
  ShowNiche()
})


clickCount5 = 0

showDetail5 = false




function ShowNiche() {

  showDetail5 = !showDetail5


  clickCount = 0

  clickCount2 = 0

  clickCount3 = 0

  clickCount4 = 0

  clickCountforShowALL = 0

  if(NicheDiv.style.display === `none` || (showDetail5 && clickCount5 === 0 ) ){
    NicheDiv.style.display = `contents`

    Web.style.display = `none`
    Graphic.style.display = `none`
    animationinfobox.style.display = `none`
    DigitalArtDiv.style.display = `none`
    clickCount5++ 

    NicheButton.classList.add(`All-Skillset-informationActivated`)
  }

  else{
    NicheDiv.style.display = `contents`

    Web.style.display = `none`
    Graphic.style.display = `none`
    animationinfobox.style.display = `none`
     
    NicheButton.classList.add(`All-Skillset-informationActivated`)
  }

}






// showallskillcard



let ShowallButton = document.querySelector(`.js-showallButt`)

let ShowAllButtonDiv = document.querySelector(`.ShowallDiv`)

ShowallButton.addEventListener(`click`, ()=> {
  addCount (clickCountforShowALL) 
  removeClassList()
ShowAll()
 
})


clickCountforShowALL = 0

showALLDetail = false


function ShowAll() {

  showALLDetail = !showALLDetail

  


  clickCount =  0

  clickCount2 = 0

  clickCount3 = 0

  clickCount4 = 0

  clickCount5 = 0

  if(ShowAllButtonDiv.style.display === `` ||(showALLDetail && clickCountforShowALL === 0 ) ){
    ShowAllButtonDiv.style.display = `contents`
    NicheDiv.style.display = `contents`

    Web.style.display = `contents`
    Graphic.style.display = `contents`
    animationinfobox.style.display = `contents`
    DigitalArtDiv.style.display = `contents`

    ShowallButton.classList.add(`All-Skillset-informationActivated`)

    clickCountforShowALL++ 
  }

  else if ( clickCountforShowALL  >= 1 || (showALLDetail && ShowAllButtonDiv.style.display === `contents`  )){
    ShowAllButtonDiv.style.display = `contents`
    NicheDiv.style.display = `contents`
    Web.style.display = `contents`
    Graphic.style.display = `contents`
    animationinfobox.style.display = `contents`
    
    ShowallButton.classList.add(`All-Skillset-informationActivated`)
   
  }



  else if ( ShowAllButtonDiv.style.display === `contents`  || (showALLDetail && clickCountforShowALL   >= 1 )){
    ShowAllButtonDiv.style.display = `contents`
    NicheDiv.style.display = `contents`
    Web.style.display = `contents`
    Graphic.style.display = `contents`
    animationinfobox.style.display = `contents`
  
    ShowallButton.classList.add(`All-Skillset-informationActivated`)
  
  }
    

}

 


function clearFunction(){

  // clickCountforShowALL = 0
   
 
  Graphic.style.display = `none`
  Web.style.display = `none`
  NicheDiv.style.display =`none`
  DigitalArtDiv.style.display = `none`
  animationinfobox.style.display = `none` 
   ShowAllButtonDiv.style.display = `` 


   
 }



//  var messageDiv = document.querySelector(".CountClickDiv");


 var messageDiv = document.querySelector(".messageDiv");
 var clickTwiceButtons = document.querySelectorAll(".clickTwiceButton");


 console.log(messageDiv)

 countTrack = false


 clickTwiceButtons.forEach(function(button) {
  button.addEventListener("click", addCount);
 });


 function addCount (TheCount) {
  TheCount++
  
  
  if (TheCount >= 2) {
    messageDiv.style.opacity = 1; // Show the message with opacity
    messageDiv.innerText = "You clicked the same tab twice!";
    
    // Automatically hide the message after 2 seconds (2000 milliseconds)
    setTimeout(function() {
      messageDiv.style.opacity = 0; // Hide the message with opacity
        // TheCount = 0
    }, 2000);
  }

  

 }



 function removeClassList() {
  NicheButton.classList.remove(`All-Skillset-informationActivated`)
  DigitalArtButton.classList.remove(`All-Skillset-informationActivated`)
  displayAnimatorButton.classList.remove(`All-Skillset-informationActivated`)

  displayGraphicbutton.classList.remove(`All-Skillset-informationActivated`)

  displayWebButton.classList.remove(`All-Skillset-informationActivated`)

  ShowallButton.classList.remove(`All-Skillset-informationActivated`)
 }



 function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



reveal() 






// function toggleDiv() {
//   var myDiv = document.querySelector(".textAnimate");

//   console.log(myDiv)

//   myDiv.style.opacity = (myDiv.style.opacity === "0") ? "1" : "0";
  

// }





 










// for Scrolling


let scrollButton = document.querySelector(`.Scroll-div`)


        let lastScrollTop = 0;

        window.addEventListener("scroll", function() {
            let currentScrollTop = window.scrollY;

            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                onScrollDown();
            } else {
                // Scrolling up
                onScrollUp();
            }

            lastScrollTop = currentScrollTop;
        });

        function onScrollDown() {

            scrollButton.style.bottom = `10px`
            console.log("Scrolling Down");
            // Add your code for scrolling down here
        }

        function onScrollUp() {
            console.log("Scrolling Up");
            // Add your code for scrolling up here

            scrollButton.style.bottom = `-70px`
        }









 




















        const openBtns = document.querySelectorAll('.openBtn');
        const overlay = document.querySelector('.overlay');
        const pop_pop = document.querySelector('.popup');

        console.log(openBtns)
         
        openBtns.forEach((button) => {
          button.addEventListener('click', () => {
            
            overlay.style.display = 'flex';
            pop_pop.style.display = 'flex';
          });
        });
    
        function closePopup() {
          overlay.style.display = 'none';
          pop_pop.style.display = 'none';
        }






        document.addEventListener('DOMContentLoaded', function () {
          const overlay = document.querySelector('.overlay');
          const pop_pop = document.querySelector('.popup');
          const popupTitle = document.querySelector('.popup-title');
          const popupDescription = document.querySelector('.Github-text');
          
          const openButtons = document.querySelectorAll('.openBtn');
          const closeButtons = document.querySelectorAll('.closeBtn');
          
          openButtons.forEach(button => {
              button.addEventListener('click', () => openPopup(button) );
          });
          
          closeButtons.forEach(button => {
              button.addEventListener('click', ()=> closePopup());
          });
          
          function openPopup(button) {
              const itemId = button.dataset.item_id;
              fetch(`/api/items/${itemId}/`, {
                  headers: {
                      'Accept': 'application/json',
                  },
              })
              .then(response => response.json())
              .then(data => {
                   
                  const firstItem = data[0];
                   console.log(firstItem)
                  popupTitle.innerText = firstItem.Name;
                  popupDescription.innerText = firstItem.Name;
              });
              overlay.style.display = 'flex';
              pop_pop.style.display = 'flex';
          }
          
          function closePopup() {
              overlay.style.display = 'none';
              pop_pop.style.display = 'none';
          }
      });
      
      






      const openBtns1 = document.querySelectorAll('.openBtn1');
      const overlay1 = document.querySelector('.overlay1');
      const pop_pop1 = document.querySelector('.popup1');

      console.log(openBtns)
       
      openBtns1.forEach((button) => {
        button.addEventListener('click', () => {
          
          overlay1.style.display = 'flex';
          pop_pop1.style.display = 'flex';
        });
      });
  
      function closePopup1() {
        overlay1.style.display = 'none';
        pop_pop1.style.display = 'none';
      }






      document.addEventListener('DOMContentLoaded', function () {
        const overlay1 = document.querySelector('.overlay1');
        const pop_pop1 = document.querySelector('.popup1');
        const popupTitle = document.querySelector('.popup-title');
        const popupDescription = document.querySelector('.Github-text');
        
        const openButtons1 = document.querySelectorAll('.openBtn1');
        const closeButtons1 = document.querySelectorAll('.closeBtn1');
        
        console.log(openButtons1)

        openButtons1.forEach(button => {
            button.addEventListener('click', () => openPopup1(button) );
        });
        
        closeButtons1.forEach(button => {
            button.addEventListener('click', ()=> closePopup1());
        });
        
        function openPopup1(button) {
            const itemId = button.dataset.item_id;
            fetch(`/api/items/${itemId}/`, {
                headers: {
                    'Accept': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                 
                const firstItem = data[0];
                 console.log(firstItem)
                popupTitle.innerText = firstItem.Name;
                popupDescription.innerText = firstItem.Name;
            });
            overlay1.style.display = 'flex';
            pop_pop1.style.display = 'flex';
        }
        
        function closePopup1() {
            overlay1.style.display = 'none';
            pop_pop1.style.display = 'none';
        }
    });
    
    




      // // NAVIGATION-BAR CODE BEGINS
      


      // const toggleMenu = () => {
      //   const navigation = document.querySelector(".navigation");
      
      //   const burgerMenu = document.querySelector(".menu-icon");
      //   const src = burgerMenu.getAttribute("src");
      
      //   const isBurger = src === "static_assets\burger-menu.svg";
      //   const iconName = isBurger ? "static_assets\close.svg" : "static_assets\burger-menu.svg";
      
      //   burgerMenu.setAttribute("src", iconName);
      
      //   if (!isBurger) {
      //     navigation.classList.add("navigation--mobile--fadeout");
      //     setTimeout(() => {
      //       navigation.classList.toggle("navigation--mobile");
      //     }, 300);
      //   } else {
      //     navigation.classList.remove("navigation--mobile--fadeout");
      //     navigation.classList.toggle("navigation--mobile");
      //   }
      // };



      // MENU JS CODE BEGINS

      const toggleMenu = () => {
        const navigation = document.querySelector(".navigation");
      
        const burgerMenu = document.querySelector(".menu-icon");
        const src = burgerMenu.getAttribute("src");

        console.log(burgerMenu)

        const isBurger = src === "static\\static_assets\\burger-menu.svg";
        const iconName = isBurger ? "static\\static_assets\\close.svg" : "static\\static_assets\\burger-menu.svg";

        console.log(isBurger)
      
        burgerMenu.setAttribute("src", iconName);
      
        if (!isBurger) {
          navigation.classList.add("navigation--mobile--fadeout");
          setTimeout(() => {
            navigation.classList.toggle("navigation--mobile");
          }, 300);
        } else {
          navigation.classList.remove("navigation--mobile--fadeout");
          navigation.classList.toggle("navigation--mobile");
        }
      }; 


       // MENU JS CODE ENDS




      /* PRELOADER JS FILES BEGINS */

      document.addEventListener("DOMContentLoaded", function() {
        // Hide the preloader and show the content once the page is fully loaded
        window.addEventListener("load", function() {
            const preloader = document.querySelector(".preloader");
            const content = document.querySelector(".content");

            preloader.style.display = "none";
            content.style.display = "block";
        });
    });


    /* PRELOADER JS FILES */







