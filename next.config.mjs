/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	reactCompiler: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "w7.pngwing.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "assets.aceternity.com",
			},
		],
	},
};

export default nextConfig;
