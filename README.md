This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

`The site must run on https to allow the fetch library to work`

### Docker version
```bash
  docker-compose up --build
```

### NPM version
Before we can get this started, we will need to do a few things:

```bash
  npm install
```

Initialise Redis:
```bash
  docker-compose up -d redis
```

Additionally it will need some environment variables set
`.env.local`
```bash
  REDIS_URL=localhost:6379
  HOSTNAME=localhost
  PORT=3000
  NEXT_PUBLIC_HOST=https://$HOSTNAME:$PORT
```

then, run the development server:

```bash
  npm run dev
```