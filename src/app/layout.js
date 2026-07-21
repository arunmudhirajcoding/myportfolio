import { Varela_Round } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
// import { Toaster } from "sonner";
const Varela = Varela_Round({
	weight: "400",
	subsets: ["latin"],
});

export const metadata = {
	metadataBase: new URL("https://arun-kumar-durgollu.vercel.app"),

	title: {
		default:
			"Arun Kumar Durgollu | MERN Stack Developer | Next.js Portfolio | Full Stack & AI Developer",
		template: "%s | Arun Kumar Durgollu",
	},

	description:
		"Arun Kumar Durgollu is a MERN Stack Developer and Computer Science student passionate about building scalable full-stack web applications using React, Next.js, Node.js, Express.js, MongoDB, and modern AI technologies.",

	applicationName: "Arun Kumar Portfolio",
	alternates: {
		canonical: "/",
	},

	authors: [
		{
			name: "Arun Kumar Durgollu",
			url: "https://arun-kumar-durgollu.vercel.app",
		},
	],

	creator: "Arun Kumar Durgollu",

	publisher: "Arun Kumar Durgollu",

	keywords: [
		"Arun Kumar Durgollu",
		"Arun Kumar",
		"MERN Stack Developer",
		"Full Stack Developer",
		"React Developer",
		"Next.js Developer",
		"Node.js",
		"Express.js",
		"MongoDB",
		"JavaScript",
		"AI Developer",
		"Portfolio",
	],

	openGraph: {
		type: "website",

		locale: "en_US",

		url: "/",

		title: "Arun Kumar Durgollu | MERN Stack Developer | Next.js Portfolio",

		description:
			"Arun Kumar Durgollu is a MERN Stack Developer and Computer Science student passionate about building scalable full-stack web applications using React, Next.js, Node.js, Express.js, MongoDB, and modern AI technologies.",

		siteName: "Arun Kumar Portfolio",

		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Arun Kumar Durgollu Portfolio",
			},
		],
	},

	twitter: {
		card: "summary_large_image",

		title: "Arun Kumar Durgollu | MERN Stack Developer | Next.js Portfolio",

		description:
			"Computer Science student and MERN Stack Developer building scalable web applications with React, Next.js, Node.js, Express.js, MongoDB, and AI.",

		creator: "@ArunDurugu3542",

		images: ["/og-image.png"],
	},

	icons: {
		icon: [{ url: "/favicon.ico" }],

		apple: "/apple-touch-icon.png",

		shortcut: "/favicon.ico",
	},

	manifest: "/site.webmanifest",

	category: "Technology",
};

export const viewport = {
	themeColor: "#000000",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${Varela.className} antialiased text-white`}>
				<Toaster />
				{children}
			</body>
		</html>
	);
}
