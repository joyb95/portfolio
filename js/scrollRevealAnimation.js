// Right, Left, Up And Bottom Window Scroll Animation " Start "
function windowScroll(){

    window.addEventListener('scroll', reveal);

    function reveal(){

        // Adding ClassName In Html File Class="reveal"
        let reveals = document.querySelectorAll('.reveal');

        for(let i = 0; i < reveals.length; i++){

            let windowheight = window.innerHeight;
            let revealtop = reveals[i].getBoundingClientRect().top;
            let revealpoint = 150;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }

            else{
                reveals[i].classList.remove('active');
            }
        }

    }

}windowScroll();
// Right, Left, Up And Bottom Window Scroll Animation " End "