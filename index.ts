import fastify from "fastify";

const server = fastify();

console.log(process.env)

server.get("/", async (request, reply) => {
  reply.code(200).send({ message: "Hello world!", env: process.env });
});

server.listen(process.env.PORT || 8080, "0.0.0.0", (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
