import dotenv from "dotenv"
import Path from "path"

dotenv.config({
    path:Path.join(process.cwd(),".env")
});

export default {
    database_url:process.env.DATABAE_URL,
    port:process.env.PORT,
    default_password:process.env.DEFAULT_PASSWORD,
}