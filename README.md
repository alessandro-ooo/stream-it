![](https://i.imgur.com/sRdWs8p.png)
<p align="center">
  <h1 align="center"></h1>
</p>

## About the project
stream-it is a www.streamable.com a-like project that uses Next.js 14.1.0, prisma 5.9.1, OAuth and AWS S3 buckets to store and hand out user uploaded videos. The use-case of this platform is to let end-users upload their videos and clips in a trusted's server owner, and let community managers / founder handle their media with complete freedom. The project main goal is to let little and private communities not to rely on freemium platforms.

## Getting started
Before you set up this project for your community, remember that this is NOT optimized to go in production due to how AWS S3 Buckets cost work, as your bill might become bigger as your users make requests to it. Please consult AWS costs before setting up this project. At your OWN risk.
Setting up this project is relatively easy, though you must be familiar with how NextJS, Prisma and OAuth work. Once you've downloaded the project, create an .env file and fill these self-explanatory variables with your credentials:

```
NEXT_PUBLIC_DOMAIN="http:localhost:3000/"
DATABASE_URL="mysql://YOUR_USER:YOUR_PASSWORD@URL:PORT/stream-it?schema=public"
SECRET = "YOUR SECRET"
GOOGLE_CLIENT_ID = "YOUR GOOGLE CLIENT ID"
GOOGLE_CLIENT_SECRET = "YOUR GOOGLE CLIENT SECRET"
AWS_S3_REGION="YOUR REGION (ex. eu-west-2)"
AWS_S3_ACCES_KEY_ID="YOUR ACCES KEY ID"
AWS_S3_SECRET_ACCESS_KEY="YOUR SECRET ACCESS KEY"
AWS_S3_BUCKET="BUCKET NAME"
```
DO NOT SHARE THIS FILE WITH ANYONE.
