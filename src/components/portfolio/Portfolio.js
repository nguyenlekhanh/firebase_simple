import React, { useEffect, useState } from "react";

const Portfolio = () => {
    var [script, setScript] = useState("");
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    //link.href = "./portfolio/stylePortfolio.css";
    link.href = "./stylePortfolio.css";
    link.media = "all";
    document.body.appendChild(link);

    const script = document.createElement("script");

    script.src = "./scriptPortfolio.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
        document.body.removeChild(link);
        document.body.removeChild(script);
    };
  }, [script]);

  const myHTMLContent = `
    <header class="header">
        <a href="/" class="logo">Khanh Nguyen.<span class="animate" style="--i:1;"></span></a>

        <div class="bx bx-menu" id="menu-icon">
            <span class="animate" style="--i:2;"></span>
        </div>

        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#home">About</a>
            <!-- <a href="#education">Education</a> -->
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>

            <span class="active-nav"></span>
            <span class="animate" style="--i:2;"></span>
        </nav>
    </header>

    <section class="home show-animate" id="home">
        <div class="home-content">
            <h1>Hi, I'm <span>Khanh Le Nguyen</span><span class="animate" style="--i:2;"></span></h1>
            <div class="text-animate">
                <h3>Web Application Development</h3>
                <span class="animate" style="--i:3;"></span>
            </div>
            <p>I am a highly organized individual committed to delivering excellence in every project I undertake. My skill set encompasses a wide range of technologies, including HTML, CSS, JavaScript, React/Redux, React-Native, PHP/Codeigniter, C#, ASP.NET MVC, Node/Express, SQL, and MongoDB. I have a deep passion for continuous learning and eagerly embrace new technologies and challenges as opportunities for growth.
                <span class="animate" style="--i:4;"></span>
            </p>

            <div class="btn-box">
                <a href="/" class="btn">Hire Me</a>
                <a href="/" class="btn">Let's Talk</a>
                <span class="animate" style="--i:5;"></span>
            </div>
        </div>

        <div class="home-sci">
            <!-- <a href="/"><i class="bx bxl-facebook"></i></a>
            <a href="/"><i class="bx bxl-twitter"></i></a> -->
            <a href="https://www.linkedin.com/in/nguyen-le-khanh-4aa9a2a9/"><i class="bx bxl-linkedin"></i></a>
            <span class="animate" style="--i:6;"></span>
            <a href="https://github.com/nguyenlekhanh"><i class="bx bxl-github"></i></a>
            <span class="animate" style="--i:6;"></span>
        </div>

        <div class="home-imgHover">
        </div>
    </section>

    <section class="about" id="about">
        <h2 class="heading">About <span>Me</span><span class="animate scroll" style="--i:1;"></span></h2>

        <div class="about-img">
            <img src="images/about.jpg" alt=""/>
            <span class="circle-spin"></span>
            <span class="animate scroll" style="--i:2;"></span>
        </div>

        <div class="about-content">
            <h3>Computer Programming!<span class="animate scroll" style="--i:3;"></span></h3>
            <p>I am a highly organized individual committed to delivering excellence in every project I undertake. My skill set encompasses a wide range of technologies, including HTML, CSS, JavaScript, React/Redux, React-Native, PHP, C#, ASP.NET MVC, Node/Express, SQL, and MongoDB. I have a deep passion for continuous learning and eagerly embrace new technologies and challenges as opportunities for growth.
                <span class="animate scroll" style="--i:4;"></span>
            </p>

            <!-- <div class="btn-box btns">
               <a href="/" class="btn">Read More</a> 
               <span class="animate scroll" style="--i:5;"></span>
            </div> -->
        </div>
    </section>

    <section class="skills" id="skills">
        <h2 class="heading">My <span>Skills</span><span class="animate scroll" style="--i:1;"></span></h2>

        <div class="skills-row">
            <div class="skills-column">
                <h3 class="title">Coding Skills<span class="animate scroll" style="--i:2;"></span></h3>

                <div class="skills-box">
                    <div class="skills-content">
                        <div class="progress">
                            <h3>HTML/CSS/JS/PHP <span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>

                        <div class="progress">
                            <h3>SQL <span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>

                        <div class="progress">
                            <h3>React/React-Native <span>80%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>C#/.NET/BLAZOR <span>80%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                    </div>
                    <span class="animate scroll" style="--i:3;"></span>
                </div>
            </div>

            <div class="skills-column">
                <h3 class="title">Professional Skills<span class="animate scroll" style="--i:5;"></span></h3>

                <div class="skills-box">
                    <div class="skills-content">
                        <div class="progress">
                            <h3>Web Development <span>99%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>

                        <div class="progress">
                            <h3>Software Development <span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>

                        <div class="progress">
                            <h3>Project Management <span>80%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>

                        <div class="progress">
                            <h3>SEO Marketing <span>80%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        
                    </div>
                    <span class="animate scroll" style="--i:6;"></span>
                </div>
            </div>
        </div>
    </section>

    <section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me!</span><span class="animate scroll" style="--i:1;"></span></h2>

        <form action="#">
            <div class="input-box">
                <div class="input-field">
                    <input type="text" placeholder="Full Name" required />
                    <span class="focus"></span>
                </div>
                <div class="input-field">
                    <input type="text" placeholder="Email" required />
                    <span class="focus"></span>
                </div>

                <span class="animate scroll" style="--i:3;"></span>
            </div>

            <div class="input-box">
                <div class="input-field">
                    <input type="number" placeholder="Mobile Number" required />
                    <span class="focus"></span>
                </div>
                <div class="input-field">
                    <input type="text" placeholder="Email Subject" required />
                    <span class="focus"></span>
                </div>
                <span class="animate scroll" style="--i:5;"></span>
            </div>

            <div class="textarea-field">
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                <span class="focus"></span>

                <span class="animate scroll" style="--i:7;"></span>
            </div>

            <div class="btn-box btns">
                <button type="submit" class="btn">Submit</button>

                <span class="animate scroll" style="--i:9;"></span>
            </div>
        </form>
    </section>

    <footer class="footer">
        <div class="footer-text">
            <p>Copyright &copy; 2023 | All Rights Reserved.</p>

            <span class="animate scroll" style="--i:1;"></span>
        </div>

        <div class="footer-iconTop">
            <a href="/"><i class="bx bx-up-arrow-alt"></i></a>
            <span class="animate scroll" style="--i:3;"></span>
        </div>
    </footer>
  `;

  return <>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"></link>
    <div dangerouslySetInnerHTML={{__html: myHTMLContent}}></div>
  </>;
};

export default Portfolio;
