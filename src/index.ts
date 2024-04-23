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
		if (request.url == "https://www.cloudflareworkers.com/test") {
			return new Response('Hello Worker!', {
				headers: {
					'content-type': 'text/plain',
				}
			})
		} else {
			return new Response('Error Worker! Wrong URL', {
				headers: {
					'content-type': 'text/plain',
				}
			})
		}
		return new Response('Actual request is from ' + request.url + '. Have a nice day!');
		// Hello from Visual Studio Code!
	},
};
