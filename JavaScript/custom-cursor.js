let mouseCursor = document.querySelector(".cursor");
let nav = document.querySelectorAll('a');
window.addEventListener("mousemove", cursor);

function cursor(e){
   mouseCursor.style.top = e.pageY +"px";
   mouseCursor.style.left = e.pageX + "px";
}
nav.forEach(link => {   
link.addEventListener('mouseleave', () =>{
mouseCursor.classList.remove("cursor-grow");
});
link.addEventListener('mouseover', () =>{
   mouseCursor.classList.add("cursor-grow");
   });
});



/*let mouseCursor = document.querySelector(".cursor"); = this is needed to get the mouse cursor, the query selector targets the mouse.

let nav = document.querySelectorAll('a'); = i also need to target the nav links = the reason for writing selector all is because it allows me to target all of the nav links.


window.addEventListener("mousemove", cursor);   we can grab the window with an eventlistenr, and write 'mousemoves'. ; which means that whenever the mouse moves we can run a function called cursor , in this case.


function cursor(e ){ we make the function have access to 'e' which allows you to get a mouse event, we need to look for pageX and page Y, this gives our cordinates for where out mouse postion is


 mouseCursor.style.top = e.pageY +"px";
   mouseCursor.style.left = e.pageX + "px"; loop over this


   nav.forEach(link => {   
link.addEventListener('mouseover', () =>{
mouseCursor.classList.remove("cursor-grow");
});  = loop over the link and for each link we run a function in here, bascially looping over every link and for each link wana see when the user moves the mouse over the links and when the mouse leaves. based on that we have to add a class and remove a class

so to make the transition when the user moves away from the link we have to add an event listener and name it 'mouse over. and I ran it with a function and over the mouseCursor. I added a eventlist and named it  'cursor-grow', and added style properties to it, so it takes on different shape when hover away from a link.






*/