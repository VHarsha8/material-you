function About(){
    return(
        <div className="container mx-auto py-10 gap-6 md:px-20 px-6 flex flex-col">
            <div className="flex gap-2 items-center ">
                <img src="about.svg"  className="md:w-16 w-12" />
                <h1 className="font-poppins font-semibold text-2xl md:text-4xl "> About Epistemicon</h1>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-poppins md:block hidden   text-gray-500 ">Epistemicon is an exciting inter-collegiate event that celebrates innovation, creativity, and talent. Organized by, <a href=" https://www.aliet.ac.in/" target="_blank" rel="refnoreferrer"> <div className="inline-flex text-wrap flex-wrap items-center text-green-600 font-poppins "> Andhra Loyola Institute of Engineering and Technology</div> </a>  this event offers a platform for students from various colleges to come together, participate in a wide range of competitions, and showcase their skills across multiple domains. Whether you're passionate about technology, arts, literature, or science, Epistemicon has something for everyone.</h1>
                <h1 className="font-poppins md:hidden block  text-sm  text-gray-500 ">Epistemicon is an exciting inter-collegiate event that celebrates innovation, creativity, and talent. Organized by, <a href=" https://www.aliet.ac.in/" target="_blank" rel="refnoreferrer"> <div className="inline-flex text-wrap flex-wrap items-center text-green-600 font-poppins font-semibold"> ALIET</div> </a>  this event offers a platform for students from various colleges to come together, participate in a wide range of competitions, and showcase their skills across multiple domains. Whether you're passionate about technology, arts, literature, or science, Epistemicon has something for everyone.</h1>
                <h1 className="font-poppins md:block hidden text-gray-500 ">Our aim is to foster collaboration, inspire learning, and provide a space for young minds to connect, compete, and create lasting memories. With a diverse lineup of events, expert-led workshops, and exciting prizes, Epistemicon 2024 promises to be an unforgettable experience.</h1>
                <h1 className="font-poppins text-gray-500 text-xl font-medium">Join us on <div className="inline-flex text-green-600 text-xl font-poppins font-semibold items-center">September 28 2024</div>  and be a part of this celebration of talent and knowledge!</h1>

            </div>
            <img src="Epistemicon1.1.jpg" alt="2023 Epistemicon" className="w-full md:h-[500px] h-[400px] rounded-2xl"/>
            <h1 className="font-poppins text-center text-gray-400">Photograph clicked from Epistemicon-2023</h1>
            
        </div>
    );
}
export default About;