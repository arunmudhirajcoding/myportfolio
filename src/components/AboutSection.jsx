import Image from "next/image";
import React from "react";
import Heading from "./Heading";

const AboutSection = () => {
	return (
		<div>
			<Heading text="About Me" />

			<div className="w-full min-h-[50vh] flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-20 py-10 justify-center items-center lg:items-center lg:px-5 lg:py-0">
				{/* image */}
				<div className="w-full lg:w-auto p-6 flex flex-row items-center justify-center lg:block gap-6 lg:gap-0">
					<Image
						src={"/AboutProfile.png"}
						width={500}
						height={500}
						alt="About Me Profile pic"
						className="w-32 h-32 sm:w-40 sm:h-40 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-left object-cover rounded-full border-white/50 shadow-xl/40 shadow-white"
					/>
					<div className="text-2xl sm:text-3xl bg-clip-text text-transparent bg-linear-to-b from-neutral-200 to-neutral-600 font-sans font-bold block lg:hidden w-auto">
						Hey!,I’m Arun Kumar Durgollu <br />
						<span className="text-lg sm:text-xl text-neutral-400 font-medium">
							MERN Stack Developer
						</span>
					</div>
				</div>
				{/* intro text */}
				<div className="lg:flex-1 flex flex-col gap-6 justify-center lg:h-auto px-4 lg:px-0">
					<div className="text-2xl text-white leading-tight font-medium ">
						<div className="text-4xl xl:text-5xl bg-clip-text text-transparent bg-linear-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-3 hidden lg:block">
							Hey!,I’m Arun Kumar Durgollu
						</div>
						<span className="hidden lg:inline-block">
							MERN Stack Developer,
						</span>{" "}
						a Computer Science undergraduate student who enjoys
						building modern, intelligent web applications. I’m
						especially interested in combining clean UI, scalable
						backend systems, and emerging AI technologies to solve
						real-world problems.
					</div>
					<p className="text-neutral-400 text-base md:text-lg leading-relaxed">
						I’m currently pursuing B.Tech in Computer Science and
						Engineering at Vaagdevi College of Engineering,
						Warangal. I’ve worked as an Associate Developer Intern
						and participated in national-level hackathons, including
						the NASA International Space Apps Challenge and NIT
						Warangal Hackathon, building secure and scalable
						applications under real constraints.
					</p>
					<p className="text-neutral-400 text-base md:text-lg leading-relaxed">
						At present, I’m focused on learning Cloud Computing and
						AI/ML, with the goal of growing into a software engineer
						who can build and deploy production-ready, AI-driven
						systems. I’m actively seeking internship opportunities
						to learn, contribute, and grow with experienced
						engineering teams.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
