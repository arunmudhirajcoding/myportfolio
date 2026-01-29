import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
export function ExperienceSection() {
	const data = [
		{
			title: "2025 – Present",
			content: (
				<div>
					<p className="mb-4 text-lg font-normal md:text-lg md:font-bold text-neutral-200">
						I worked as an Associate Developer Intern at ArchakaOnline, a startup initiative led by a college senior, where I used modern Next.js and the MERN stack to build and deliver a real-time product, while simultaneously building TekyTalk, a personal AI-powered application focused on using AI as a service within software development workflows.
					</p>

					<p className="mb-4 text-xs font-normal md:text-lg md:font-bold text-neutral-200">
						✨Currently expanding my
						skill set by learning DevOps and Machine Learning
						fundamentals.
					</p>

					<div className="mb-8">
						<div className="flex items-center gap-2 text-xs md:text-lg md:font-bold text-neutral-300">
							✅ Worked on real-time startup product development
						</div>
						<div className="flex items-center gap-2 text-xs md:text-lg md:font-bold text-neutral-300">
							✅ Built production features using Next.js and MERN
							stack
						</div>
						<div className="flex items-center gap-2 text-xs md:text-lg md:font-bold text-neutral-300">
							✅ Developed an AI-powered SaaS project (TekyTalk)
						</div>
						<div className="flex items-center gap-2 text-xs md:text-lg md:font-bold text-neutral-300">
							✅ Learning DevOps and Machine Learning fundamentals
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<Image
							src="https://assets.aceternity.com/templates/startup-1.webp"
							alt="startup template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
							unoptimized
						/>
						<Image
							src="/journey/20252.png"
							alt="startup template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
						/>
						<Image
							src="/projects/TEKYTALK.png"
							alt="startup template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
						/>
						<Image
							src="/journey/20251.png"
							alt="startup template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover object-bottom shadow-[...] md:h-44 lg:h-60"
						/>
					</div>
				</div>
			),
		},

		{
			title: "2024-explore",
			content: (
				<div>
					<p className="mb-4 text-xs font-normal md:text-lg md:font-bold text-neutral-200">
						With a growing foundation in web technologies, I
						collaborated with friends to participate in hackathons,
						applying my skills in real-world, time-bound
						environments. These experiences strengthened my
						understanding of full-stack development, teamwork, and
						rapid problem-solving.
					</p>

					<p className="mb-4 text-xs font-normal md:text-lg md:font-bold text-neutral-200">
						Participated in events like the NASA International Space
						Apps Challenge and the NIT Warangal Hackathon, building
						scalable and secure applications using modern web and
						AI-powered tools.
					</p>

					<div className="mb-8">
						<div className="flex items-center gap-2 text-xs md:text-lg md:font-bold text-neutral-300">
							✅ Collaborated in team-based hackathon environments
						</div>
						<div className="flex items-center gap-2 text-xs md:text-lg md:font-bold text-neutral-300">
							✅ Built real-world full-stack applications under
							time pressure
						</div>
						<div className="flex items-center gap-2 text-xs md:text-lg md:font-bold text-neutral-300">
							✅ Applied modern web and AI-driven technologies
						</div>
						<div className="flex items-center gap-2 text-xs md:text-lg md:font-bold text-neutral-300">
							✅ Improved problem-solving and communication skills
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<Image
							src="/journey/20244.png"
							alt="hero template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover object-[50%_20%] shadow-[...] md:h-44 lg:h-60"
						/>
						<Image
							src="/journey/20243.jpg"
							alt="feature template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
						/>
						<Image
							src="/journey/20242.jpg"
							alt="bento template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover object-[center_top] shadow-[...] md:h-44 lg:h-60"
						/>
						<Image
							src="/journey/20241.png"
							alt="cards template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover object-[20%_60%] shadow-[...] md:h-44 lg:h-60"
						/>
					</div>
				</div>
			),
		},

		{
			title: "2023-learning",
			content: (
				<div key="2023-content">
					<p className="mb-4 text-xs font-normal md:text-lg md:font-bold text-neutral-200">
						Began my college journey with a strong curiosity to
						explore technology. Spent this year learning programming
						fundamentals and modern web development, experimenting
						with tools, frameworks, and small practice projects to
						build a solid base.
					</p>
					<div className="mb-8">
						<div key="explored" className="flex items-center gap-2 text-xs md:text-lg md:font-bold text-neutral-300">
							✅ Explored core programming and web fundamentals
						</div>
						<div key="built" className="flex items-center gap-2 text-xs md:text-lg md:font-bold text-neutral-300">
							✅ Built small projects to apply concepts
						</div>
						<div key="discovered" className="flex items-center gap-2 text-xs md:text-lg md:font-bold text-neutral-300">
							✅ Discovered interest in full-stack development
						</div>
						<div key="established" className="flex items-center gap-2 text-xs md:text-lg md:font-bold text-neutral-300">
							✅ Established the foundation for hackathons and
							internships
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<Image
							key="learning1"
							src="/journey/learning1.jpg"
							alt="hero template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
						/>
						<Image
							key="flex"
							src="/journey/flex.jpg"
							alt="feature template"
							width={500}
							height={500}
							className="h-20 w-full rounded-lg object-cover shadow-[...] md:h-44 lg:h-60"
						/>
						
					</div>
				</div>
			),
		},
	];

	return (
		<div className="relative w-full overflow-clip">
			<Timeline data={data} />
		</div>
	);
}
