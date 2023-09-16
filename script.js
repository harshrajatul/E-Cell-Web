let changeIcon = function(icon) {
    icon.classList.toggle('fa-times')
}

// const colorBoxes = document.querySelectorAll(".box");

//         colorBoxes.forEach(box => {
//             box.addEventListener("click", function () {
//                 const currentColor = box.style.backgroundColor;
//                 if (currentColor === "rgb(0, 64, 122)") { 
//                     box.style.backgroundColor = "#7A0000";
//                 } else {
//                     box.style.backgroundColor = "#00407A";
//                 }
//             });
//         });




let clickedCount = 0;

        const colorBoxes = document.querySelectorAll(".box");

        colorBoxes.forEach(box => {
            box.addEventListener("click", function () {
                const currentColor = box.style.backgroundColor;
                    box.style.backgroundColor = "#7A0000";
                    clickedCount++;
                    changeColor();
            });
        });

        function resetColors() {
            while(clickedCount != 0)
            {
                const boxes = document.querySelectorAll('.box');
                boxes.forEach(box => {
                    box.style.backgroundColor = "#00407A";
                });
                clickedCount--;
            }
        }

        function changeColor(element) {

            if (clickedCount === 9) {
                 setTimeout(() => {
                    resetColors();
                }, 1000);
            }
        }
