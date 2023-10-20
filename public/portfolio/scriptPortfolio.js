window.onload = function(e){ 
  // toggle icon navbar
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
  }

  //scroll sections
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
      sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 100;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if(top >= offset && top < offset + height) {
              // active navbar links
              navLinks.forEach(link => {
                  link.classList.remove('active');

                  const element = document.querySelector('header nav a[href*=' + id + ']');
                  console.log(element);
                  if (element !== null) {
                    // Element exists, so you can safely access its properties
                    const href = element.classList.add('active');
                    // Do something with href
                  }
                  // console.log(typeof(document.querySelector('header nav a[href*=' + id + ']').classList));
                  //document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
              });
              // active sections for animation on scroll
              sec.classList.add('show-animate');
          }
          // if want to use animation that repeats on scroll use this
          else {
              sec.classList.remove('show-animate');
          }
      });

      // sticky header
      let header = document.querySelector('header');

      header.classList.toggle('sticky', window.scrollY > 100);

      // remove toggle icon and navbar when click navbar links (scroll7)

      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');

      //animation footer on scroll
      let footer = document.querySelector('footer');

      footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
      
  }
}

// window.document.onload = function(e) { 
//   // toggle icon navbar
//   let menuIcon = document.querySelector('#menu-icon');
//   let navbar = document.querySelector('.navbar');

//   menuIcon.onclick = () => {
//       menuIcon.classList.toggle('bx-x');
//       navbar.classList.toggle('active');
//   }

//   //scroll sections
//   let sections = document.querySelectorAll('section');
//   let navLinks = document.querySelectorAll('header nav a');

//   window.onscroll = () => {
//       sections.forEach(sec => {
//           let top = window.scrollY;
//           let offset = sec.offsetTop - 100;
//           let height = sec.offsetHeight;
//           let id = sec.getAttribute('id');

//           if(top >= offset && top < offset + height) {
//               // active navbar links
//               navLinks.forEach(link => {
//                   link.classList.remove('active');
//                   document.querySelector('header nav a[data-id*=' + id + ']').classList.add('active');
//               });
//               // active sections for animation on scroll
//               sec.classList.add('show-animate');
//           }
//           // if want to use animation that repeats on scroll use this
//           else {
//               sec.classList.remove('show-animate');
//           }
//       });

//       // sticky header
//       let header = document.querySelector('header');

//       header.classList.toggle('sticky', window.scrollY > 100);

//       // remove toggle icon and navbar when click navbar links (scroll7)

//       menuIcon.classList.remove('bx-x');
//       navbar.classList.remove('active');

//       //animation footer on scroll
//       let footer = document.querySelector('footer');

//       footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
      
//   }

// }