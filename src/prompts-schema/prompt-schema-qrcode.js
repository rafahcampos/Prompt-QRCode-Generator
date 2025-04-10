import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        descripton: chalk.yellow("Digite o link para gerar o QR CODE"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo de QRCODE (1- NORMAL) ou (2- TERMINAL)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required:true
    },

];

export default promptSchemaQRCode;