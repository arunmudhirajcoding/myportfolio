"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { AnimatedTooltip } from "./ui/animated-tooltip";
export function ProjectCard({ project }) {
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
						alt={project.id}
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
