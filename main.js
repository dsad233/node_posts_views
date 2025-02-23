import express from "express";
import cookieParser from "cookie-parser";
import postsRouter from "./src/posts/posts.router.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.set("trust proxy", true);
app.use(cookieParser());

app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(port, "서버로 실행 중.");
});

