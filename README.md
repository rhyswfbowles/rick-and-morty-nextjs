This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Before we can get this started, we will need to do a few things:

```bash
  npm install
```

Initialise Redis:
```bash
  docker-compose up -d redis
```
### Development version
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

### Production version (npm)
Additionally it will need some environment variables set
`.env.local`
```bash
  NODE_ENV=production
  REDIS_URL=localhost:6379
  HOSTNAME=localhost
  PORT=3000
  NEXT_PUBLIC_HOST=https://$HOSTNAME:$PORT
```

then, run the server:

```bash
  npm run start
```

### Production version (Docker)
```bash
  docker-compose up --build
```