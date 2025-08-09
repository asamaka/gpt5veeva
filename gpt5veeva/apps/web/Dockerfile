FROM node:20-alpine
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
COPY package.json pnpm-lock.yaml* turbo.json ./
COPY apps/web/package.json apps/web/package.json
COPY packages/core/package.json packages/core/package.json
COPY packages/llm/package.json packages/llm/package.json
COPY packages/templates/package.json packages/templates/package.json
COPY packages/ats/package.json packages/ats/package.json
RUN pnpm install --frozen-lockfile=false
COPY . .
EXPOSE 3000
CMD ["pnpm", "--filter", "web", "dev"]