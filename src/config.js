import { config } from "dotenv"
config()
//port
export default {
  port : process.env.PORT || 3000
}