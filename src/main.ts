import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
// eslint-disable-next-line
const sanityClient = require("@sanity/client");

export const client = sanityClient({
  projectId: 'feg8mexh',
  dataset: 'production',
  apiVersion: '2021-09-09',
  token:
    'sk0BplbxCdQgzlsf0Fe264SYg4D6YWy3DJ74oi1629KxCLW0VqAJsFJ2p6t9qdHhToVX7ve0gI6jq6ZT2y4klZ8ko3Qie4fpxqBnS3zml193HiFH1Uu87b2M5aAISFaYR1pDsoY9TYMeITdUgAtoHj4jRnmSHmqvl9XzdoJwg50SB5a5sd80', // or leave blank for unauthenticated usage
  useCdn: true,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
