import profileImg from "../../assets/profile.jpg";

export const Home = () =>{
    return(
    <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="w-full flex flex-row items-center justify-center">
            <div className="w-2/3 flex block md:inline">
                <div className="z-10 px-4 flex flex-col">
                    <h1 className="pl-20  text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-300 bg-clip-text text-transparent  leading-right">Hi, I'm <br/>Minindu Madhushan</h1>
                    <br/>
                    <p className="p-10 text-lg"><span className="font-bold text-xl">Full-Stack Developer | UI/UX Enthusiast | Graphic Designer</span> <br/>
                    I work across full-stack development, UI/UX design, and graphic designing, with a growing interest in data analytics. I enjoy building visually appealing, user-friendly, and functional digital solutions.</p>
                </div>
            </div>
            <div className="w-1/3 flex items-center justify-center ">
                <img src={profileImg}  className="rounded-3xl pr-20"/>
            </div>
        </div>
    </section>
    ) 
}