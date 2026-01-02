import { NavbarDemo } from "@/components/NavDemo";
import { ProjectCard } from "@/components/ProjectCard";
import { Button, MovingBorder } from "@/components/ui/moving-border";
import { WobbleCard } from "@/components/ui/wobble-card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
	return (
		<div className="w-screen h-screen bg-white flex justify-center items-center ">
			{/* container */}
 {/* <MovingBorder duration={30000} rx="30%" ry="30%">
		  <div
			className={cn(
			  "h-20 w-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_10%,rgba(255,255,255,0.2)_80%,transparent_50%)] opacity-[0.8]",
			 
			)} />
		</MovingBorder> */}
			<div className="bg-black h-11/12 rounded-4xl px-5 overflow-y-scroll no-scrollbar partial-width shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] ring-2 ring-white/45">
			
				<div className="sticky top-0 z-10">
					<NavbarDemo />
				</div>
				{/* home section */}
				<div className="home-section w-full h-full flex justify-between gap-4  mb-10">
					{/* image */}
					<div className="w-48 flex-1 border">
						<WobbleCard containerClassName="w-1/2 aspect-3/4 mt-24">
							<Image
								src={"/port-pic.png"}
								fill={true}
								alt="profile picture"
								className="object-left object-cover"
							/>
						</WobbleCard>
					</div>

					{/* intro text */}
					<div className="flex-1 self-center p-5 min-h-36 border">
						Welcome to my portfolio! I'm excited to share my work
						and experiences with you. Here, you'll find a collection
						
						of my projects, skills, and achievements that showcase
						my journey as a developer. Feel free to explore and
						reach out if you'd like to connect!
					</div>
				</div>
				{/* about section */}
				<div className=" w-full h-full">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Consequuntur veniam minus accusamus. Voluptatibus, excepturi
					voluptates neque, assumenda cumque ipsa esse itaque culpa
					quam accusamus, magnam quasi natus cupiditate voluptate
					amet! Illo ea delectus voluptas debitis quidem rerum
					perferendis commodi nobis modi non cum aliquid quae
					sapiente, quam praesentium quod. Sunt?
				</div>
				{/* project */}
				<div className="flex gap-10 flex-wrap px-10">
					<ProjectCard/>
					<ProjectCard/>
					<ProjectCard/>
				</div>
			</div>
		</div>
	);
}
