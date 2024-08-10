import { Hono } from "hono";
// as you can see the syntax of the hono is the same as express.js
// but the only difference is that hono is used to make the http server but mainly its primary uses case of hono is to provide the user-friendly syntax to work with the routes and middlwares at that tine of making a server in sererless architecture :)
const app = new Hono(); // its a class instance

// you can even make the middlewares also same as express.js
// you can use ZOD library also to check the client inputs :)

app.post("/how", async (context) => {
  let body = await context.req.text(); // to prese the body into text , json or html or xml :)
  // its context has every thing
  // like body,queryparams,headers,
  // let headers = body.headers("authorization");
  /// .....

  // you can return the response as below also first arg is response body means what you wanna send in the response , 2 arg is status code , 3 rd arg is response headers :)

  // return context.body("Thank you for coming", 201, {  code and headers :)
  //   "X-Message": "Hello!",
  //   "Content-Type": "text/plain",
  // });
  return context.text(body);
});

app.get("/get/headers", async (context) => {
  const headers = context.req.header("authorization");
  context.status(201); // you can either set as above route or set manually as well
  return context.json({ headers });
});

app.get("/get/headers/:name", async (context) => {
  const parameters = context.req.param("name");
  context.status(201); // you can either set as above route or set manually as well
  return context.json({ parameters });
});

export default app;
