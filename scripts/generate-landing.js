import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import schemaTemplate from './schema-template.json' assert { type: "json" };
import { fileURLToPath } from 'url';
import OpenAiHttpClient from './OpenAiHttpClient.js';

function createDirectories(route) {
    const directories = route.split('/');
    let currentPath = 'src/pages';

    for (let directory of directories) {
        currentPath = join(currentPath, directory);
        if (!existsSync(currentPath)) {
            mkdirSync(currentPath);
        }
    }
}

function createSchemaFile(schema) {
    const schemaFileName = 'schema.json';
    const schemaFilePath = join('src', 'pages', route, schemaFileName);
    writeFileSync(schemaFilePath, JSON.stringify(JSON.parse(schema), null, 2));
}

function createComponentFile(route) {
    const filename = fileURLToPath(import.meta.url);
    const componentFileName = 'index.astro'
    const componentFile = readFileSync(join(dirname(filename), componentFileName));
    writeFileSync(
        join('src', 'pages', route, componentFileName), 
        componentFile
    );
}

function generateLanding(route, schema) {
    createDirectories(route);
    createSchemaFile(schema);
    createComponentFile(route)
}


async function getRoute(openAiClient, insuranceType){

    const prompt = `
Genera un path optimizado para SEO para una landing de venta de un seguro de "${insuranceType}".

Response solo con el path.
No respondads con ningun otro comentario o información adicional.
`
    const route = await openAiClient.getCompletion([{
        role: 'user',
        content: prompt
    }])

    console.log({route})

    return route
}

async function getSchema(openAiClient, insuranceType){

    const json = JSON.stringify(schemaTemplate)

    const prompt = `
Tomando como ejemplo el JSON generado para un seguro de responsabilidad civil para estudios de tatuajes que se muestra en comillas tripes.

\`\`\`${json}\`\`\`

Tu tarea consiste en:

- Generar un JSON con los mismos campos que el JSON de ejemplo pero modificando los textos, titulos, descripciones, .etc para un seguro de "${insuranceType}".
- La respuesta debe ser en formato JSON correcto.
- NO debes modificar enlaces o imágenes, solo texto.
- NO debes modificar el nombre de las keys o campos del JSON.
- SOLO DEBES modificar el valor de los campos del JSON para adaptarlos al nuevo tipo de seguro de "${insuranceType}".
`

    const jsonString = await openAiClient.getCompletion([{
        role: 'user',
        content: prompt
    }])

    console.log({jsonString})

    return jsonString
}

const insuranceType = "responsabilidad civil para Asociación o club de ajedrez y juegos de mesa"
const openAiClient = new OpenAiHttpClient("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")

const route = await getRoute(openAiClient, insuranceType);
const schema = await getSchema(openAiClient, insuranceType);

generateLanding(route, schema);
