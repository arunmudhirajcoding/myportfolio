"use client";
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	NavbarButton,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { useState } from "react";
export function NavbarDemo() {
	const navItems = [
		{
			name: "About me",
			link: "#about-me",
		},
		{
			name: "Skills",
			link: "#skills",
		},
		{
			name: "Projects",
			link: "#projects",
		},
		{
			name: "Experience",
			link: "#experience",
		},
		{
			name: "Certificates",
			link: "#certificates",
		},
		{
			name: "Contact",
			link: "#contact",
		},
	];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
		<div className="w-full">
			{/* Navbar */}
			<Navbar className={"bg-black relative"}>
				{/* Desktop Navigation */}
				<NavBody>
					<NavbarLogo />
					<NavItems items={navItems} />
					<div className="flex items-center gap-4">
						<div>
							<NavbarButton
								variant="secondary"
								className={"flex gap-2"}
								as="a"
								href="https://www.linkedin.com/in/arun-kumar-durgollu/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IconBrandLinkedin className="h-5 w-5 text-neutral-300" />
								<span className="text-sm text-neutral-300">
									LinkedIn
								</span>
							</NavbarButton>
						</div>
						<a href="/Arun-kumar-durgollu-resume.pdf" download>
							<NavbarButton variant="primary" as="button">
								Download Resume
							</NavbarButton>
						</a>
					</div>
				</NavBody>

				{/* Mobile Navigation */}
				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
						/>
					</MobileNavHeader>

					<MobileNavMenu
						isOpen={isMobileMenuOpen}
						onClose={() => setIsMobileMenuOpen(false)}
					>
						{navItems.map((item, idx) => (
							<a
								key={`mobile-link-${idx}`}
								href={item.link}
								onClick={() => setIsMobileMenuOpen(false)}
								className="relative"
							>
								<span className="block">{item.name}</span>
							</a>
						))}
						<div className="flex w-full flex-col gap-4">
							<NavbarButton
								as="a"
								href="https://www.linkedin.com/in/arun-kumar-durgollu/"
								variant="primary"
								className="w-full flex items-center justify-center gap-2"
							>
								<IconBrandLinkedin />
								<span className="text-sm">LinkedIn</span>
							</NavbarButton>
							<NavbarButton
								variant="primary"
								as="a"
								href="/Arun-kumar-durgollu-resume.pdf"
								download
								className={"w-full"}
							>
								Download Resume
							</NavbarButton>
						</div>
					</MobileNavMenu>
				</MobileNav>
			</Navbar>
		</div>
	);
}
