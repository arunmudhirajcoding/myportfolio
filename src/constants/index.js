export const data = [
	{
		id: "ak-meet-zoom-clone",
		title: "AK Meet",
		shortDesc:
			"Real-time video conferencing platform with video calls, chat, and meeting history.",

		coverImage: "/projects/AK-meet.png", // replace with actual image path

		overview: {
			problem:
				"Remote communication platforms require reliable real-time video, chat, and meeting management with low latency.",
			solution:
				"AK Meet replicates core Zoom functionality using WebRTC and Socket.io to enable secure, real-time video meetings and messaging.",
			targetUsers:
				"Remote teams, students, and individuals needing real-time video communication.",
		},

		features: [
			"Real-time video calls using WebRTC",
			"Live chat & signaling with Socket.io",
			"Auth users with meeting history tracking",
		],

		techStack: [
			{
				id: 1,
				name: "React",
				role: "Frontend framework",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			},
			{
				id: 2,
				name: "Node.js",
				role: "Backend runtime",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
			},
			{
				id: 3,
				name: "Express.js",
				role: "Backend framework",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
			},
			{
				id: 4,
				name: "MongoDB",
				role: "Database",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
			},
			{
				id: 5,
				name: "Socket.io",
				role: "Real-time communication",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
			},
			{
				id: 6,
				name: "WebRTC",
				role: "Peer-to-peer video streaming",
				icon: "https://w7.pngwing.com/pngs/430/932/png-transparent-webrtc-full-logo-tech-companies.png",
			},
			{
				id: 7,
				name: "Material UI",
				role: "UI components",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
			},
		],

		links: {
			github: "https://github.com/arunmudhirajcoding/AK-Meet", // add repo link if public
			live: "https://ak-meet.vercel.app/", // add live link if deployed
		},
	},
	{
		id: "ak-resorts-booking-platform",
		title: "AK Resorts",
		shortDesc:
			"Full-stack resort booking platform with reviews, maps, and secure authentication.",

		coverImage: "/projects/AK_resort.png", // replace with actual image path

		overview: {
			problem:
				"Travelers need a reliable platform to discover, review, and book resorts, while owners need tools to manage listings securely.",
			solution:
				"AK Resorts provides a full-stack booking system with search, reviews, maps, image uploads, and secure session-based authentication.",
			targetUsers:
				"Travelers looking to book resorts and resort owners who want to showcase and manage their properties.",
		},

		features: [
			"Search resorts with maps & image galleries",
			"Auth, reviews, ratings, and user sessions",
			"Listing management with uploads & alerts",
		],

		techStack: [
			{
				id: 1,
				name: "Node.js",
				role: "Backend runtime",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
			},
			{
				id: 2,
				name: "Express.js",
				role: "Backend framework",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
			},
			{
				id: 3,
				name: "MongoDB",
				role: "Database",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
			},
			{
				id: 4,
				name: "Mongoose",
				role: "MongoDB ODM",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
			},
			{
				id: 5,
				name: "Passport.js",
				role: "Authentication",
				icon: "https://www.passportjs.org/images/logo.svg",
			},
			{
				id: 6,
				name: "Cloudinary",
				role: "Image storage",
				icon: "https://res.cloudinary.com/cloudinary/image/upload/v1/logo/for_white_bg/cloudinary_icon_for_white_bg.png",
			},
			{
				id: 7,
				name: "Mapbox",
				role: "Maps integration",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mapbox/mapbox-original.svg",
			},
			{
				id: 8,
				name: "EJS",
				role: "Server-side templating",
				icon: "/logos/ejs.webp",
			},
			{
				id: 9,
				name: "Bootstrap",
				role: "UI styling",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
			},
		],

		links: {
			github: "https://github.com/arunmudhirajcoding/AkResorts",
			live: "https://ak-resorts.vercel.app/listings",
		},
	},
	{
		id: "tekytalk-ai-teaching-platform",
		title: "Tekytalk",
		shortDesc:
			"AI-powered voice-based learning platform with customizable virtual tutors.",

		coverImage: "/projects/TEKYTALK.png", // replace with your actual cover image path

		overview: {
			problem:
				"Traditional online learning lacks personalization, real-time interaction, and natural conversational engagement.",
			solution:
				"Tekytalk enables users to build personalized AI tutors and learn through real-time voice conversations powered by modern voice AI.",
			targetUsers:
				"Students, self-learners, and professionals seeking interactive and personalized learning experiences.",
		},

		features: [
			"Create custom AI tutors with voice & style",
			"Real-time voice learning with AI tutors",
			"Track sessions with auth & subscriptions",
		],

		techStack: [
			{
				id: 1,
				name: "Next.js",
				role: "Full-stack framework",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
			},
			{
				id: 2,
				name: "Supabase",
				role: "Database & backend services",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
			},
			{
				id: 3,
				name: "Clerk",
				role: "Authentication & user management",
				icon: "/logos/clerk.webp",
			},
			{
				id: 4,
				name: "VAPI AI",
				role: "Real-time voice AI orchestration",
				icon: "/logos/vapi-logo.webp",
			},
			{
				id: 5,
				name: "Stripe",
				role: "Subscription & payment handling",
				icon: "/logos/stripe.webp",
			},
		],

		links: {
			github: "https://github.com/arunmudhirajcoding/ai_saas",
			live: "https://ai-saas-sand-one.vercel.app/",
			caseStudy: "",
		},
	},
];
