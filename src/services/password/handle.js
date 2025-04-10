import chalk from "chalk";
import permitededCharacteres from "./utils/permited-characteres.js";

async function handle() {
    let characters = [];
    let password = "";

    const passwordLength = process.env.PASSWORD_LENGTH;


    characters = await permitededCharacteres();


    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
        
    }
    return password;
}
  
export default handle;