import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";
import { IconBrandGithub } from "@tabler/icons-react";

const HomeSection = () => {
	return (
		<div
			id="Home"
			className="home-section w-full min-h-[80vh] flex flex-col-reverse lg:flex-row-reverse gap-10 lg:gap-20 py-10 items-center justify-center lg:p-5 mb-10"
		>
			{/* Intro Text */}
			<div className="flex-1 flex flex-col items-start gap-6 z-20 max-w-2xl pl-5">
				<div className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900/50 px-3 text-sm text-neutral-300 backdrop-blur-sm">
					<span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
					Welcome to my portfolio
				</div>

				<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
					Building <br />
					<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
						Intelligent
					</span>{" "}
					Web Systems
				</h1>

				<p className="text-lg text-neutral-400 leading-relaxed max-w-lg">
					Hey, I'm{" "}
					<span className="text-white font-semibold">
						Arun Durgollu
					</span>
					. A Student MERN Stack Developer & Internship Seeker,
					developing AI-powered web apps with Next.js, LangChain &
					LangGraph. Learning Cloud & AI/ML.
				</p>

				<div className="flex flex-wrap gap-4 mt-2">
					<a
						href="#projects"
						className="px-8 py-3 rounded-lg bg-white text-black font-bold hover:bg-neutral-200 transition-transform hover:-translate-y-1"
					>
						View Projects
					</a>
					<a
						href="https://github.com/arunmudhirajcoding"
						target="_blank"
						rel="noopener noreferrer"
						className="px-8 py-3 rounded-lg border border-neutral-700 text-white font-medium hover:bg-neutral-800 transition-transform hover:-translate-y-1 flex gap-2"
					>
						<IconBrandGithub/>
						GitHub
					</a>
					<a
						href="#contact"
						className="px-8 py-3 rounded-lg border border-neutral-700 text-white font-medium hover:bg-neutral-800 transition-transform hover:-translate-y-1"
					>
						Contact Me
					</a>
				</div>

				<div className="text-sm text-neutral-500 mt-4 flex gap-4">
					<span>📍 Warangal, India</span>
					<span>•</span>
					<span>🚀 Open to Remote/on-site</span>
				</div>
			</div>

			{/* Visual Content */}
			<div className="w-full lg:w-1/3 max-w-md relative z-10  aspect-square">
				<WobbleCard containerClassName="w-10/12 h-full bg-neutral-900/10 border-none shadow-2xl">
					<div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 to-purple-500/10 rounded-2xl mix-blend-overlay z-0" />
					<Image
						src={"/port-pic.png"}
						fill={true}
						alt="Arun Durgollu"
						className="object-cover object-center rounded-2xl z-0"
						priority
					/>

					{/* Floating Buttons inside WobbleCard for effect */}
					{/* <button className="absolute bottom-6 left-6 z-20 inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-size-[200%_100%] px-6 font-medium text-slate-400 shadow-xl transition-all hover:scale-105 focus:outline-none">
						LangChain
					</button> */}
					{/* <button className="absolute top-6 right-6 z-20 inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-size-[200%_100%] px-6 font-medium text-slate-400 shadow-xl transition-all hover:scale-105 focus:outline-none">
						MERN
					</button> */}
				</WobbleCard>
			</div>
		</div>
	);
};

export default HomeSection;
