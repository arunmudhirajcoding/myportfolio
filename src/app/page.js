import AboutSection from "@/components/AboutSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import HomeSection from "@/components/HomeSection";
import { NavbarDemo } from "@/components/NavDemo";
import { ProjectCard } from "@/components/ProjectCard";
import SkillSection from "@/components/SkillSection";
import { data } from "@/constants/index";

const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",

    "@id": "https://arunkumardurgollu.me/#profile",

    url: "https://arunkumardurgollu.me/",

    name: "Arun Kumar Durgollu | Full Stack & AI Developer",

    description:
        "Portfolio of Arun Kumar Durgollu, a Full Stack and AI Developer building modern web applications and AI-powered solutions.",

    mainEntity: {
        "@type": "Person",

        "@id": "https://arunkumardurgollu.me/#person",

        name: "Arun Kumar Durgollu",

        url: "https://arunkumardurgollu.me/",

        jobTitle: "Full Stack & AI Developer",

        description:
            "Full Stack and AI Developer building modern web applications and AI-powered solutions.",

        image: "https://arunkumardurgollu.me/profile.png",
		
		knowsAbout: [
            "Full Stack Web Development",
            "React",
            "Next.js",
            "Node.js",
            "Artificial Intelligence",
        ],

        sameAs: [
            "https://github.com/arunmudhirajcoding",
            "https://www.linkedin.com/in/arun-kumar-durgollu/",
        ],
    },
};

export default function Home() {
	return (
		<>
		<script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(profileSchema),
                }}
            />
		<div className="w-screen h-screen bg-white flex justify-center items-center">
			{/* container */}
			<div className="bg-black h-11/12 rounded-4xl overflow-y-scroll no-scrollbar partial-width shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] ring-2 ring-white/45 overflow-x-hidden">
				<div className="sticky top-0 z-50">
					<NavbarDemo />
				</div>
				<main>
				{/* home section */}
				<section id="Home">
					<HomeSection />
				</section>
				{/* about section */}
				<section id="about-me">
					<AboutSection />
				</section>
				{/* skill section */}
				<section id="skills">
					<div className=" w-full">
						<SkillSection />
					</div>
				</section>
				{/* project */}
				<section id="projects">
		<Heading text={"Projects"}/>
					<div className="flex flex-wrap sm:gap-10 justify-center lg:justify-around xl:gap-5 xl:justify-center xl:flex-nowrap items-center">
						<ProjectCard project={data[0]} />
						<ProjectCard project={data[1]} />
						<ProjectCard project={data[2]} />
					</div>
				</section>
				{/* experience section */}
				<section id="experience">
					<ExperienceSection />
				</section>
				<section id="certificates">
					<CertificatesSection />
				</section>
				{/* contact section */}
				<section id="contact">
					<ContactSection />
				</section>	
				
				</main>
				
				{/* footer */}
				<Footer />
			</div>
		</div>
		</>
	);
}
