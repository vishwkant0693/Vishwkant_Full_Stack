import { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
    window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.reveal');

        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 100;

            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }

    }


    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);


    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        message: '',
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await Axios.post('https://', formData);
            console.log(response.data);
            // Additional actions based on the server response
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };


    return (
        <>
            <header style={{
                position: 'fixed',
                top: '0',
                width: '100%',
                color: 'white',
                padding: '20px 0',
                zIndex: '1000',
                transform: visible ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.3s ease-in-out',
            }}>
                <nav className="navbar navbar-expand-lg bg-black" id='navbar' data-bs-theme="dark">
                    <div className="container-fluid fixed-top header_box">
                        <a className="navbar-brand" href='#'><span style={{ color: "rgb(165, 139, 213)" }}>V</span>ishwkant.</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                <a className="nav-link" href="#about">About</a>
                                <a className="nav-link" href="#qualification">Qualification</a>
                                <a className="nav-link" href="#projects">Projects</a>
                                <a className="nav-link" href="#skills">Skills</a>
                                <a className="nav-link" href="#getintouch">GetInTouch</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Background */}
            <div class="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>


            {/* <!-- Main --> */}
            <section className="container main d-flex justify-content-around" style={{ height: "48vh" }} id="">
                <div className="row">
                    <h2 className="col-md-8 m-auto p-3 revealmainleft">
                        Hi, My name is <br /><span style={{ color: "purple" }}>Vishwkant,</span>
                        <div>and I am a Passionate</div>
                        <span id="element">
                            <TypeAnimation
                                sequence={['Web Developer,',
                                    1000,
                                    'Full Stack Developer.',
                                    1000
                                ]}
                                wrapper='span'
                                speed={250}
                                deletionSpeed={180}
                            />
                        </span>
                    </h2>
                    <div className="col-md-4 m-auto p-3">
                        <img src="images/home.png" className="revealmainright" style={{ width: "100%" }} alt="" />
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="bg_1"></div>
                <div className="icons-div mt-3 revealmainbottom">
                    <a href="https://in.linkedin.com/in/vishw-kant-1855011a4"><i className='icons bx bxl-linkedin-square'
                        style={{ color: "white" }}></i></a>
                    <a href="https://github.com/vishwkant0693"><i className='icons bx bxl-github' style={{ color: "white" }}></i></a>
                    <a href="https://twitter.com/vishwkant0693?lang=bn"><i className='icons bx bxl-twitter'
                        style={{ color: "white" }}></i></a>
                    <button className="btn btn-info">Download Resume</button>
                </div>
            </div>



            {/* <!-- About --> */}
            <hr style={{ marginTop: "142px" }} id="about" />
            <section className="section">
                <h2 className="text-center mb-5">About Me</h2>
                <div className="container">
                    <div className="row mt-5">
                        <p className="col-md-6">Hello, I'm <b>Vishwkant</b> from Delhi, India. <br /> An aspiring full stack
                            developer.
                            Currently student @ DUCAT Pitampura,
                            I'm passionate about crafting web experiences
                            and thrive on problem-solving. When I'm not coding, I love to play/watch cricket and play FPS games
                            like CS,
                            Valorant. Let's connect and create something remarkable together.
                        </p>
                        <div className="col-md-6 text-center">
                            <img src="images/profile.png" style={{ width: "10rem" }} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Qualification --> */}
            <hr style={{ marginTop: "142px" }} id="qualification" />
            <section className="section">
                <h2 className="text-center mb-5">Qualification</h2>
                <div className="container mt-5">
                    <h4 className="col-md-12 mt-4">Python Full Stack <i className='bx bxs-school'></i></h4>
                    <h5 className="row">
                        <div className="qual-title col-md-6">DUCAT Pitampura</div>
                        <div className="qual-year col-md-6">2022-2023</div>
                        <hr style={{ textAlign: "center" }} />
                    </h5>
                    <h4 className="col-md-12 mt-4">Graduation<i className='bx bxs-graduation'></i></h4>
                    <h5 className="row qual">
                        <div className="qual-title col-md-6">B.tech (Mechatronics) - DITE OKHLA PHASE - II, DELHI [IP University]
                        </div>
                        <div className="qual-year col-md-6">2018-2023</div>
                        <hr style={{ textAlign: "center" }} />
                    </h5>
                    <h4 className="col-md-12 mt-4">Class XII <i className='bx bxs-school'></i></h4>
                    <h5 className="row">
                        <div className="qual-title col-md-6">CBSE BOARD - RSBV Kalyanpuri</div>
                        <div className="qual-year col-md-6">2018</div>
                        <hr style={{ textAlign: "center" }} />
                    </h5>
                    <h4 className="col-md-12 mt-4">Class X <i className='bx bxs-school'></i></h4>
                    <h5 className="row">
                        <div className="qual-title col-md-6">CBSE BOARD - RSBV Kondli</div>
                        <div className="qual-year col-md-6">2015</div>
                        <hr style={{ textAlign: "center" }} />
                    </h5>
                    <div className="bg_2"></div>
                </div>
            </section>

            {/* <!-- Projects --> */}
            <hr style={{ marginTop: "142px" }} id="projects" />
            <section className="section">
                <h2 className="text-center mb-5">Projects</h2>
                <div className="container">
                    <div className="row projects_box my-5 reveal">
                        <div className="col-md-9">
                            <h4>Knight Notes App - ReactJS, NodeJS</h4>
                            <p><span style={{ color: 'crimson' }}>Knight Notes App :</span> Your digital platform for organizing, capturing, and sharing your thoughts effortlessly.
                                 We understand the importance of keeping your ideas, inspirations, and to-dos organized in one accessible place. Whether you're a student, professional, creative thinker, or simply someone who loves jotting down ideas, our platform is designed to empower you to capture and curate your notes seamlessly.</p>
                            <a href="https://github.com/vishwkant0693/knight"><i className='bx bx-code-alt'></i>Code</a>
                        </div>
                        <div className="col-md-3"
                            style={{ background: "url(images/knight.png)", backgroundSize: "cover", borderRadius: "10px", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}>
                        </div>
                    </div>
                    <div className="row projects_box my-5 reveal">
                        <div className="col-md-3"
                            style={{ background: "url(images/chart.png)", backgroundSize: "cover", borderRadius: "10px", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}>
                        </div>
                        <div className="col-md-9">
                            <h4>Admin Panel - React JS, ChartJS</h4>
                            <p><span style={{ color: 'crimson' }}>Admin Panel :</span> In an admin panel, Chart.js serves as a powerful tool for visualizing data and providing insights into various metrics and trends. Here's a description highlighting its key aspects: Data Visualization, Interactive Charts, Customization Options, Responsive Design.</p>
                            <a href="https://github.com/vishwkant0693/rqchart"><i className='bx bx-code-alt'></i>Code</a>
                        </div>
                    </div>
                    <div className="row projects_box my-5 reveal">
                        <div className="col-md-9">
                            <h4>NewsApp - ReactJs, API</h4>
                            <p><span style={{ color: 'crimson' }}>NewsApp :</span> It is a ReactJS web application that fetches and
                                displays real-time news data using APIs. It
                                provides a user-friendly interface for browsing and staying updated with the latest news from
                                various sources. Users can filter, and view detailed articles, offering a seamless news
                                consumption experience.</p>
                            <a href="https://github.com/vishwkant0693/NewsApp"><i className='bx bx-code-alt'></i>Code</a>
                        </div>
                        <div className="col-md-3"
                            style={{ background: "url(images/newsapp1.png)", backgroundSize: "cover", borderRadius: "10px", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}>
                        </div>
                    </div>
                    <div className="row projects_box my-5 reveal">
                        <div className="col-md-3"
                            style={{ background: "url(images/chatapp1.png)", backgroundSize: "cover", borderRadius: "10px", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}>
                        </div>
                        <div className="col-md-9">
                            <h4>ChatApp - NodeJS</h4>
                            <p><span style={{ color: 'crimson' }}>ChatApp :</span> Build a feature-rich chat app using Node.js with Express.js for server-side management. Employ
                                Axios for efficient external API interactions, and integrate ChatEngine.io for real-time
                                messaging. Enhance data storage and retrieval with a RESTful server, enabling seamless chat
                                functionalities and offering a comprehensive solution for modern communication needs.</p>
                            <a href="https://github.com/vishwkant0693/React-CRUD-Operations"><i className='bx bx-code-alt'></i>Code</a>
                        </div>
                    </div>
                    <div className="row projects_box my-5 reveal">
                        <div className="col-md-9">
                            <h4>FabWallpaper - ReactJS, JSON API</h4>
                            <p><span style={{ color: 'crimson' }}>FabWallpaper :</span> ReactJS app leverages Json/APIs to deliver a
                                visually captivating experience. It allows
                                users to access a vast library of high-quality wallpapers, dynamically updating with fresh
                                content. Users can browse, select, and set wallpapers as backgrounds, customizing their devices
                                with ease through an intuitive and responsive interface.</p>
                            <a href="https://github.com/vishwkant0693/FabWallpaper"><i className='bx bx-code-alt'></i>Code</a>
                        </div>
                        <div className="col-md-3"
                            style={{ background: "url(images/fabwall1.png)", backgroundSize: "cover", borderRadius: "10px", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}>
                        </div>
                    </div>
                    <div className="row projects_box my-5 reveal">
                        <div className="col-md-3"
                            style={{ background: "url(images/reactcrud1.png)", backgroundSize: "cover", borderRadius: "10px", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}>
                        </div>
                        <div className="col-md-9">
                            <h4>ReactJs CRUD Operations</h4>
                            <p>CRUD operations in ReactJS enable the creation, reading, updating, and deletion of data within
                                web applications. They allow users to interact with data via a user-friendly interface.
                                Developers implement these operations to manage and manipulate data in databases or APIs,
                                ensuring efficient and seamless data management.</p>
                            <a href="https://github.com/vishwkant0693/React-CRUD-Operations"><i className='bx bx-code-alt'></i>Code</a>
                        </div>
                    </div>
                    <div className="row projects_box my-5 reveal">
                        <div className="col-md-9">
                            <h4>Django CRUD Operations</h4>
                            <p>CRUD operations in Django, a Python web framework, enable the creation, reading, updating, and
                                deletion of data in databases. Developers use Django's powerful ORM (Object-Relational Mapping)
                                to simplify data management. It ensures secure and efficient data handling for web applications,
                                making it a popular choice for building robust backends.</p>
                            <a href="https://github.com/vishwkant0693/Django-CRUD-Operations"><i className='bx bx-code-alt'></i>Code</a>
                        </div>
                        <div className="col-md-3"
                            style={{ background: "url(images/djangocrud1.png)", backgroundSize: "cover", borderRadius: "10px", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Skills --> */}
            <div className="bg_3"></div>
            <hr style={{ marginTop: "142px" }} id="skills" />
            <section className="section">
                <h2 className="text-center mb-5">Skills</h2>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-3 skill_front">
                            <h3>FrontEnd</h3>
                            <hr />
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>BootStrap</p>
                            <p>ReactJS</p>

                        </div>
                        <div className="col-md-3 skill_back">
                            <h3>BackEnd</h3>
                            <hr />
                            <p>Python</p>
                            <p>Django</p>
                            <p>NodeJS</p>
                            <p>ExpressJS</p>

                        </div>
                        <div className="col-md-3 skill_data">
                            <h3>Databases</h3>
                            <hr />
                            <p>MySQL</p>
                            <p>MongoDB</p>
                        </div>
                        <div className="col-md-3 skill_tech">
                            <h3>Technologies</h3>
                            <hr />
                            <p>VS Code</p>
                            <p>Git Bash</p>
                            <p>GitHub</p>

                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Get in touch --> */}
            <hr style={{ marginTop: "142px" }} id="getintouch" />
            <section className="section">
                <h2 className="text-center mb-5">Get In Touch</h2>
                <div className="container git_box bg-black">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="FormControlInput1" className="form-label">Full Name</label>
                            <input type="fullname" name='fullname' className="form-control" value={formData.fullname} onChange={handleInputChange}
                                style={{ background: 'rgb(25, 25, 29)', color: 'white' }} id="FormInput1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="FormControlInput2" className="form-label">Email address</label>
                            <input type="email" name='email' className="form-control" value={formData.email} onChange={handleInputChange}
                                style={{ background: 'rgb(25, 25, 29)', color: 'white' }} id="FormInput2" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" name='message' id="FormMessage" value={formData.message} onChange={handleInputChange}
                                style={{ background: 'rgb(25, 25, 29)', color: 'white' }} rows="5"></textarea>
                        </div>
                        <div className="d-grid gap-2 mt-4">
                            <button className="btn btn-outline-info">Send</button>
                        </div>
                    </form>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <hr style={{ marginTop: "142px" }} id="getintouch" />
            <section>
                <div className="container-fluid text-center footer_box">
                    <h2 className="title">Vishwkant</h2>
                    <p>Full Stack Developer</p>
                    <div>
                        <a href="https://in.linkedin.com/in/vishw-kant-1855011a4" style={{ color: "white" }}><i
                            className='icons bx bxl-linkedin-square'></i></a>
                        <a href="https://github.com/vishwkant0693" style={{ color: "white" }}><i className='icons bx bxl-github'></i></a>
                        <a href="https://twitter.com/vishwkant0693?lang=bn" style={{ color: "white" }}><i
                            className='icons bx bxl-twitter'></i></a>
                        <a href="https://www.instagram.com/vishwkant0693/" style={{ color: "white" }}><i
                            className='icons bx bxl-instagram'></i></a>
                    </div>
                    <p>@vishwkant0693</p>
                    <hr />
                    <div className="design">&#169; Designed by : Vishwkant</div>
                </div>
            </section>
        </>
    )
}

export default Main