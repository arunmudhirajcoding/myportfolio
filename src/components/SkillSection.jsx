"use client";
import { motion } from "framer-motion";
import {
	SiReact,
	SiNextdotjs,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiTailwindcss,
	SiBootstrap,
	SiNodedotjs,
	SiExpress,
	SiStripe,
	SiPython,
	SiOpenai,
	SiMongodb,
	SiPostgresql,
	SiSupabase,
	SiDocker,
	SiGithub,
	SiGit,
	SiSentry,
	SiChainlink,
} from "react-icons/si";
import EC2Icon from "react-aws-icons/dist/aws/logo/EC2";
import BucketWithObjectsIcon from "react-aws-icons/dist/aws/storage/BucketWithObjects";
import LambdaFunctionIcon from "react-aws-icons/dist/aws/compute/LambdaFunction";

import { FaBrain, FaCogs, FaLink, FaProjectDiagram, FaServer, FaShieldAlt } from "react-icons/fa";

import { FloatingDock } from "./ui/floating-dock";
import Heading from "./Heading";
const skills = [
	{
		group: "Core Web Development",
		items: [
			{
				icon: <SiReact className="h-full w-full text-neutral-300" />,
				name: "React",
				desc: "Building interactive UI components",
			},
			{
				icon: (
					<SiNextdotjs className="h-full w-full text-neutral-300" />
				),
				name: "Next.js",
				desc: "Full-stack React framework with SEO",
			},
			{
				icon: (
					<SiJavascript className="h-full w-full text-neutral-300" />
				),
				name: "JavaScript",
				desc: "Core application logic (ES6+)",
			},
			{
				icon: <SiHtml5 className="h-full w-full text-neutral-300" />,
				name: "HTML5",
				desc: "Semantic and accessible markup",
			},
			{
				icon: <SiCss3 className="h-full w-full text-neutral-300" />,
				name: "CSS3",
				desc: "Responsive layouts and styling",
			},
			{
				icon: (
					<SiTailwindcss className="h-full w-full text-neutral-300" />
				),
				name: "Tailwind CSS",
				desc: "Utility-first CSS framework",
			},
			{
				icon: (
					<SiBootstrap className="h-full w-full text-neutral-300" />
				),
				name: "Bootstrap",
				desc: "Component-based CSS framework",
			},
		],
	},

	{
		group: "Backend & APIs",
		items: [
			{
				icon: (
					<SiNodedotjs className="h-full w-full text-neutral-300" />
				),
				name: "Node.js",
				desc: "Server-side JavaScript runtime",
			},
			{
				icon: <SiExpress className="h-full w-full text-neutral-300" />,
				name: "Express.js",
				desc: "REST API framework for Node.js",
			},
			{
				icon: <FaServer className="h-full w-full text-neutral-300" />,
				name: "REST APIs",
				desc: "Designing scalable API architectures",
			},
			{
				icon: (
					<FaShieldAlt className="h-full w-full text-neutral-300" />
				),
				name: "Clerk Auth",
				desc: "Authentication and role-based access",
			},
			{
				icon: <SiStripe className="h-full w-full text-neutral-300" />,
				name: "Stripe",
				desc: "Payments and subscriptions",
			},
		],
	},

	{
		group: "AI / Machine Learning",
		items: [
			{
				icon: <SiPython className="h-full w-full text-neutral-300" />,
				name: "Python",
				desc: "AI and backend scripting",
			},
			{
				icon: <FaBrain className="h-full w-full text-neutral-300" />,
				name: "Machine Learning",
				desc: "Core ML concepts and workflows",
			},
			{
				icon: <SiOpenai className="h-full w-full text-neutral-300" />,
				name: "OpenAI API",
				desc: "AI-powered features and automation",
			},
			{
				icon: (
					<FaLink className="h-full w-full text-neutral-300" />
				),
				name: "LangChain",
				desc: "Building agentic AI workflows",
			},
			{
				icon: (
					<FaProjectDiagram className="h-full w-full text-neutral-300" />
				),
				name: "LangGraph",
				desc: "Multi-agent orchestration and control",
			},
		],
	},

	{
		group: "Databases",
		items: [
			{
				icon: <SiMongodb className="h-full w-full text-neutral-300" />,
				name: "MongoDB",
				desc: "NoSQL document database",
			},
			{
				icon: (
					<SiPostgresql className="h-full w-full text-neutral-300" />
				),
				name: "PostgreSQL",
				desc: "Relational SQL database",
			},
			{
				icon: <SiSupabase className="h-full w-full text-neutral-300" />,
				name: "Supabase",
				desc: "Backend-as-a-Service platform",
			},
		],
	},

	{
		group: "Tools & Platforms",
		items: [
			{
				icon: <SiGit className="h-full w-full text-neutral-300" />,
				name: "Git",
				desc: "Version control system",
			},
			{
				icon: <SiGithub className="h-full w-full text-neutral-300" />,
				name: "GitHub",
				desc: "Code hosting and collaboration",
			},
			{
				icon: <SiSentry className="h-full w-full text-neutral-300" />,
				name: "Sentry",
				desc: "Error tracking and monitoring",
			},
		],
	},

{
	group: "Cloud & DevOps",
	items: [
		{
			icon: (
				<BucketWithObjectsIcon
					size={40}
					className="h-full w-full"
				/>
			),
			name: "AWS S3",
			desc: "Cloud storage and object management",
		},
		{
			icon: (
				<LambdaFunctionIcon
					size={40}
					className="h-full w-full"
				/>
			),
			name: "AWS Lambda",
			desc: "Serverless application functions",
		},
		{
			icon: (
				<SiDocker className="h-full w-full text-neutral-300" />
			),
			name: "Docker",
			desc: "Containerization and deployment",
		},
		{
			icon: (
				<FaCogs className="h-full w-full text-neutral-300" />
			),
			name: "CI/CD",
			desc: "Continuous integration and deployment",
		},
	],
},
];

export default function SkillSection() {
	return (
		<section className="m-auto md:max-w-3/4 px-6 py-24">
			<Heading text={"Skills & Technologies"} />
			<p className="text-neutral-300 text-lg text-center max-w-lg mx-auto mb-10">
				Technologies I use to build scalable, modern, and AI-powered web
				applications.
			</p>

			<div className="space-y-5 md:grid lg:grid-cols-2 md:place-items-center flex flex-wrap space-x-5 gap-y-5 justify-center">
				{skills.map((group, i) => (
					<motion.div
						key={group.group}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.1 }}
						viewport={{ once: true }}
					>
						<h3 className="text-lg text-gray-300 mb-6 text-center">
							{group.group}
						</h3>

						<div className="flex flex-wrap gap-6">
							<FloatingDock
								items={group.items}
								desktopClassName="justify-start"
								mobileClassName=""
							/>
						</div>
					</motion.div>
				))}
			</div>
			<div className="mt-16 text-gray-400 text-center">
				<span className="text-gray-300 font-bold">
					Currently learning
				</span>{" "}
				<div>Core Artificial Intelligence and Machine Learning concepts</div>
			</div>
		</section>
	);
}
