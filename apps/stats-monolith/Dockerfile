FROM node:20-alpine AS base



FROM node:20-alpine AS builder
WORKDIR /app

RUN npm install -g pnpm
RUN apk add --no-cache libc6-compat

COPY . .
COPY package.json pnpm-lock.yaml* ./
COPY ./prisma ./prisma
COPY .env .env
RUN pnpm install && pnpm run build
CMD npm run pushDB


FROM node:20-alpine AS runner
WORKDIR /app

RUN \
  addgroup --system --gid 1001 nodejs; \
  adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
# COPY --from=builder ./app .

# RUN npm run generateDB
# RUN npm run pushDB

USER nextjs
EXPOSE 5520
ENV PORT 5520

CMD node server.js
