"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import dynamic from "next/dynamic";

import {
	IconBrandGithub,
	IconBrandGmail,
	IconBrandLinkedin,
} from "@tabler/icons-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/validations/contactSchema";
import { toast } from "sonner";
import Heading from "./Heading";

const SplineScene = dynamic(() => import("./SplineScene"), {
	ssr: false,
	loading: () => (
		<div className="h-75 bg-neutral-900 animate-pulse rounded-xl" />
	),
});
export default function SignupFormDemo() {
	const socialMedia = [
		{
			icon: IconBrandGithub,
			link: "https://github.com/arunmudhirajcoding",
		},
		{
			icon: IconBrandLinkedin,
			link: "https://www.linkedin.com/in/arun-kumar-durgollu/",
		},
		{
			icon: IconBrandGmail,
			link: "mailto:duruguarun@gmail.com",
		},
	];
	const [loading, setLoading] = useState(false);
	const [showThankYou, setShowThankYou] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(contactSchema),
	});

	const onSubmit = async (data) => {
		setLoading(true);

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!res.ok) throw new Error("Mail failed");

			toast.success("Message sent Successfully✔️", {
				position: "top-right",
			});
			reset();
			setShowThankYou(true);
		} catch (error) {
			toast.error(`Something went wrong❌ ${error.message}`, {
				position: "top-right",
			});
		}
	};

	return (
		<div className="shadow-input mx-auto w-full rounded-none p-4 md:rounded-2xl md:p-8 bg-black">
			{showThankYou ? (
				<ThankYou />
			) : (
				<div className="w-full flex flex-col justify-center items-center">
					<div>
						<Heading text="Let's Connect" />

						<p className="mt-2 max-w-sm text-lg font-semibold text-neutral-300">
							Interested in working together or hiring me?
						</p>
					</div>
					<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-5 md:px-20 ">
						<div className="w-full">
							<form
								className="my-8"
								onSubmit={handleSubmit(onSubmit)}
							>
								<div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
									<LabelInputContainer>
										<Label htmlFor="firstname">
											First name
										</Label>
										<Input
											id="firstname"
											{...register("firstname")}
										/>
										{errors.firstname && (
											<p className="text-xs text-red-500">
												{errors.firstname.message}
											</p>
										)}
									</LabelInputContainer>
									<LabelInputContainer>
										<Label htmlFor="lastname">
											Last name
										</Label>
										<Input
											id="lastname"
											{...register("lastname")}
										/>
										{errors.lastname && (
											<p className="text-xs text-red-500">
												{errors.lastname.message}
											</p>
										)}
									</LabelInputContainer>
								</div>
								<LabelInputContainer className="mb-4">
									<Label htmlFor="email">Email Address</Label>
									<Input
										id="email"
										type="email"
										{...register("email")}
									/>
									{errors.email && (
										<p className="text-xs text-red-500">
											{errors.email.message}
										</p>
									)}
								</LabelInputContainer>
								<LabelInputContainer className="mb-4">
									<Label>Message</Label>
									<div className="textarea-wrapper">
										<textarea
											{...register("message")}
											className="glow-textarea"
										/>
									</div>
									{errors.message && (
										<p className="text-xs text-red-500">
											{errors.message.message}
										</p>
									)}
								</LabelInputContainer>
								<button
									type="submit"
									disabled={loading}
									className={cn(
										"group/btn relative block h-10 w-full rounded-md font-medium text-white",
										loading
											? "opacity-50 cursor-not-allowed"
											: "bg-zinc-900",
									)}
								>
									{loading ? "Sending..." : "Submit →"}
									<BottomGradient />
								</button>
							</form>
							<div className="my-8 h-px w-full bg-linear-to-r from-transparent via-neutral-700 to-transparent" />
							{/* social media buttons */}
							<div className="w-full px-3 flex space-x-4 justify-center items-center">
								{socialMedia.map((l) => (
									<button
										key={l.link}
										className="group/btn shadow-input relative flex h-10 items-center justify-start space-x-2 rounded-md px-4 font-medium text-black bg-zinc-900 shadow-[0px_0px_1px_0px_#262626] cursor-pointer"
										onClick={() =>
											window.open(l.link, "_blank")
										}
									>
										<l.icon className="h-4 w-4 text-neutral-300" />
										<span className="text-sm text-neutral-300 capitalize">
											{l.icon === IconBrandGithub
												? "GitHub"
												: l.icon === IconBrandLinkedin
													? "LinkedIn"
													: "Gmail"}
										</span>
										<BottomGradient />
									</button>
								))}
							</div>
						</div>
						<div className="hidden lg:block h-full p-10">
							<img
								src="logos/undraw_connection_ts3f.svg"
								alt="connection"
								sizes="(max-width: 768px) 100vw, 50vw"
								className=" rounded-lg object-cover shadow-[...]  "
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
const ThankYou = () => {
	return (
		<section className="flex w-full items-center justify-center bg-black px-6">
			<div className="flex flex-row-reverse self-baseline text-center max-w-4/5">
				<div className="hidden lg:block h-full p-10 flex-1">
					<img
						src="logos/undraw_handshake-deal_nwk6.svg"
						alt="connection"
						width={500}
						height={500}
						className=" rounded-lg object-cover shadow-[...]"
					/>
				</div>
				<div className="flex-1 p-4">
					<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
						THANKS FOR
						<br />
						<span className="text-cyan-400">REACHING OUT.</span>
					</h1>

					<p className="mt-6 text-lg md:text-xl text-neutral-400">
						Looking forward to connecting with you.
					</p>

					<div className="mt-10 text-sm md:text-base text-neutral-300">
						<p>For any additional info, please contact me at</p>
						<a
							href="mailto:duruguarun@gmail.com"
							className="mt-2 inline-block font-semibold text-white underline underline-offset-4 hover:text-cyan-400 transition"
						>
							duruguarun@gmail.com
						</a>
					</div>
					{/* social media buttons */}
					<div className="flex space-x-4 justify-center mt-5">
						<button
							className="group/btn shadow-input relative flex h-10 items-center justify-start space-x-2 rounded-md px-4 font-medium text-black bg-zinc-900 shadow-[0px_0px_1px_0px_#262626]"
							type="submit"
						>
							<IconBrandGithub className="h-4 w-4 text-neutral-300" />
							<span className="text-sm text-neutral-300">
								GitHub
							</span>
							<BottomGradient />
						</button>
						<button
							className="group/btn shadow-input relative flex h-10 items-center justify-start space-x-2 rounded-md px-4 font-medium text-black bg-zinc-900 shadow-[0px_0px_1px_0px_#262626]"
							type="submit"
						>
							<IconBrandLinkedin className="h-4 w-4 text-neutral-300" />
							<span className="text-sm text-neutral-300">
								LinkedIn
							</span>
							<BottomGradient />
						</button>
						<button
							className="group/btn shadow-input relative flex h-10 items-center justify-start space-x-2 rounded-md px-4 font-medium text-black bg-zinc-900 shadow-[0px_0px_1px_0px_#262626]"
							type="submit"
						>
							<IconBrandGmail className="h-4 w-4 text-neutral-300" />
							<span className="text-sm text-neutral-300">
								Gmail
							</span>
							<BottomGradient />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

const BottomGradient = () => {
	return (
		<>
			<span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
			<span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
		</>
	);
};

const LabelInputContainer = ({ children, className }) => {
	return (
		<div className={cn("flex w-full flex-col space-y-2", className)}>
			{children}
		</div>
	);
};
