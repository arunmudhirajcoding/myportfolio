"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { data } from "@/constants/index";
export function ProjectCard({ project }) {
	const people = [
		{
			id: 1,
			name: "John Doe",
			designation: "Software Engineer",
			image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
		},
		{
			id: 2,
			name: "Robert Johnson",
			designation: "Product Manager",
			image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 3,
			name: "Jane Smith",
			designation: "Data Scientist",
			image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 4,
			name: "Emily Davis",
			designation: "UX Designer",
			image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 5,
			name: "Tyler Durden",
			designation: "Soap Developer",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
		},
		{
			id: 6,
			name: "Dora",
			designation: "The Explorer",
			image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
		},
	];
	return (
		<CardContainer className="inter-var">
			<CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/10 bg-black border-white/20 w-auto sm:max-w-100 h-auto rounded-xl p-6 border group">
				{/* title */}
				<CardItem
					translateZ="50"
					className="text-xl font-bold text-white"
				>
					{project.title}
				</CardItem>
				{/* description */}
				<CardItem
					as="p"
					translateZ="60"
					className=" text-sm max-w-sm mt-2 text-neutral-300"
				>
					{project.shortDesc}
				</CardItem>

				<CardItem translateZ="100" className="w-full mt-4">
					<Image
						src={project.coverImage}
						height="1000"
						width="1000"
						className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
						alt="thumbnail"
					/>
				</CardItem>
				<ul className="list-disc pl-5">
					{project.features.map((feature, idx) => (
						<li
							key={idx}
							className=" text-sm max-w-sm mt-2 text-neutral-300 group-hover:translate-z-20 transition delay-10 duration-300"
						>
							{feature}
						</li>
					))}
				</ul>

				<div className="flex flex-row items-center justify-start mt-5 w-full group-hover:translate-z-20 transition delay-10 duration-300">
					<AnimatedTooltip items={project.techStack} />
				</div>

				<div className="flex justify-between items-center mt-5">
					<CardItem
						translateZ={40}
						as="a"
						href={project.links.live}
						target="__blank"
						className="px-4 py-2 rounded-xl text-xs font-normal text-white border border-white/30 hover:bg-white/10 transition hover:shadow-md shadow-white"
					>
						Try now →
					</CardItem>
					<CardItem
						translateZ={40}
						as="a"
						href={project.links.github}
						target="__blank"
						className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold cursor-pointer"
					>
						GitHub
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
}
