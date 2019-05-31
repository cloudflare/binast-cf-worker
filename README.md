# binast-cf-worker
> Serve BinAST via a Cloudflare Worker

## Installation 

Copy/past the content of the `index.js` file into a Cloudflare Worker, see https://developers.cloudflare.com/workers/writing-workers.

Make sure to route your Worker to an entire subdomain, as path pointing to the root.

## Usage

Define your origin by changing the URL here: https://github.com/xtuc/binast-cf-worker/blob/c7b354bcbc7764faf0df5ee98463df08e453c776/index.js#L2. By default it will serve https://github.com/xtuc/binjs-demo.

The Worker will serve your website and BinAST if supported.
