const baseURL = "https://api.themoviedb.org/3/movie";
const API_KEY = process.env.API_KEY;

module.exports = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/old/:path*",
				destination: "/new/:path*",
				permanent: false,
			},
		];
	},
	async rewrites() {
		return [
			{
				source: "/api/movies",
				destination: `${baseURL}/popular?api_key=${API_KEY}`,
			},
			{
				source: "/api/movies/:id",
				destination: `${baseURL}/:id?api_key=${API_KEY}`,
			},
		];
	},
};
