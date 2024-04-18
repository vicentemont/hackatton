export const start = () => {
    getBodyParts();

    function getBodyParts() {
    let cursor = document.querySelector(".cursor");
    let divs = document.querySelectorAll("map div:not(.cursor)");
    const imageClassNames = ["arms","arms","arms","arms","arms","arms","chest","abdomen","legs","joints","joints","legs","head"]

    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseenter", () => {
          cursor.classList.add(imageClassNames[i]);
        });
      
        divs[i].addEventListener("mouseleave", () => {
          cursor.classList.remove(imageClassNames[i]);
        });
      }

    function cursorControl(e) {
        //tracks the cursors coordinates
          let x = e.clientX;
          let y = e.clientY;
        //places the custom cursor onto the cursor coordinates
          cursor.style.top = `${y}px`;
          cursor.style.left = `${x}px`;
        }
        
        document.addEventListener("mousemove", cursorControl);

        
        divs.forEach((div) =>{
            div.addEventListener("mouseenter", () => {
                cursor.classList.add("cursorGrow");
            });
            div.addEventListener("mouseleave", () => {
                cursor.classList.remove("cursorGrow");
            });
        });


    console.log("Hello");
    $('#leftshoulder').on('click', () => {
        console.log('1')
    }),
    $('#rightshoulder').on('click', () => {
        console.log('2')
    }),
    $('#arm1').on('click', () => {
        console.log('3')
    }),
    $('#arm2').on('click', () => {
        console.log('4')
    }),
    $('#rarm1').on('click', () => {
        console.log('5')
    }),
    $('#rarm2').on('click', () => {
        console.log('6')
    }),
    $('#chest').on('click', () => {
        console.log('7')
    }),
    $('#abdomen').on('click', () => {
        console.log('8')
    }),
    $('#legs').on('click', () => {
        console.log('9')
    }),
    $('#lknee').on('click', () => {
        console.log('10')
    }),
    $('#rknee').on('click', () => {
        console.log('11')
    }),
    $('#feet').on('click', () => {
        console.log('12')
    }),
    $('#head').on('click', () => {
        console.log('13')
    })
}
}
