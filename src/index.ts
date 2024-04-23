/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		if (request.method == 'POST') {
			return new Response('Look at you, POSTing stuff!', {
				headers: {
					'content-type': 'application/json',
				}
			})
		} else {
			return new Response('ERROR Will Robinson! Please use the right method!  Your method was ' + request.method + ' request.  Try again.', {
				headers: {
					'content-type': 'application/json'
				}
			})
		}
	},
};
