/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.buzzfeed.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 's3.amazonaws.com',
				pathname: '/**',
			}
		]
	}
};

export default nextConfig;
