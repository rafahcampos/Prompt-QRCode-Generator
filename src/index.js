import prompt from "prompt";
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js"
import createQRCode from "./services/qr-code/create.js";
import createPassaword from "./services/password/create.js";

async function main() {
    prompt.get(promptSchemaMain, async (err, result) => {

        if(err) console.log(err);

        result.select == 1 ? await createQRCode() : await createPassaword();
        //if (result.select == 1) console.log("Escolheu a opção 1 - QRCode");
        // if (result.select == 2) console.log("Escolheu a opção 2 - Passworld");
    });

    prompt.start();
}

main();
