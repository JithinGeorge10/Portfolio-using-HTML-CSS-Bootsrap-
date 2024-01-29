
// window.onscroll=()=>{
//     let header=document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100)
// }

// toggle icon and nav bar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//Contact-Me form submission

$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxQK-BwNklb8-5ojajplhwbnqwWS0uloEUBH1lioGuGw8x01i-7-6BDHt2rmwG9pj_vAw/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },  
        error:function (err){
            alert("Something Error")
        }
    })
})
