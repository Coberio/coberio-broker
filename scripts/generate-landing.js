import { existsSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import schemaHeroTemplate from './hero-template.json' assert { type: "json" };
import schemaSeoTemplate from './seo-template.json' assert { type: "json" };
import schemaInfo1Template from './info1-template.json' assert { type: "json" };
import schemaInfo2Template from './info2-template.json' assert { type: "json" };
import schemaProductsTemplate from './products-template.json' assert { type: "json" };
import schemaFaqTemplate from './faq-template.json' assert { type: "json" };
import schemaWhyTemplate from './whyus-template.json' assert { type: "json" };
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

function removeDirectories(route) {
    const currentPath = join('src', 'pages', route ?? 'unknown');
    if (existsSync(currentPath)) {
        rmSync(currentPath, {
            force: true,
            recursive: true
        });
    }
}

function createSchemaFile(schema, route) {
    const schemaFileName = 'schema.json';
    const schemaFilePath = join('src', 'pages', route, schemaFileName);
    writeFileSync(schemaFilePath, JSON.stringify(schema, null, 2));
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
    removeDirectories(route)
    createDirectories(route);
    createSchemaFile(schema, route);
    createComponentFile(route)
}


async function getRoute(openAiClient, insuranceType){

    const prompt = `
Genera un path optimizado para SEO para una landing de venta de un seguro de "${insuranceType}".

Response solo con el path.
El path debe ser corto y fácil de memorizar.
No respondas con ningun otro comentario o información adicional.
`
    const route = await openAiClient.getCompletion([{
        role: 'user',
        content: prompt
    }])

    console.log({route})

    return route
}

async function getSeoSchema(openAiClient, insuranceType){

    const json = JSON.stringify(schemaSeoTemplate)

    const prompt = `
Ejemplo de fichero JSON generado para un seguro de "responsabilidad civil para estudios de tatuajes":

${json}

SOLO DEBES responder con un fichero JSON sintácticamente correcto.
Optimiza los textos para SEO 
Modifica el campo "title" y "description" para un seguro de "${insuranceType}".
`

    const jsonString = await openAiClient.getCompletion([{
        role: 'user',
        content: prompt
    }])

    return JSON.parse(jsonString)
}


async function getHeroSchema(openAiClient, insuranceType){

    const json = JSON.stringify(schemaHeroTemplate)

    const prompt = `
Ejemplo de fichero JSON generado para un seguro de "responsabilidad civil para estudios de tatuajes":

${json}

SOLO DEBES responder con un fichero JSON sintácticamente correcto.
DEBES modificar el campo "title" y "description" para un seguro de "${insuranceType}".
DEBES utilizar un título atractivo y fácil de leer 
NO debes modificar enlaces o imágenes, solo texto.
NO debes modificar el nombre de las keys o campos del JSON.
DEBES modificar el valor de los campos del JSON para adaptarlos al nuevo tipo de seguro de "${insuranceType}".
`

    const jsonString = await openAiClient.getCompletion([{
        role: 'user',
        content: prompt
    }])

    return JSON.parse(jsonString)
}


async function getInfo1Schema(openAiClient, insuranceType){

    const json = JSON.stringify(schemaInfo1Template)

    const prompt = `
Ejemplo de fichero JSON generado para un seguro de "responsabilidad civil para estudios de tatuajes":

${json}

SOLO DEBES responder con un fichero JSON sintácticamente correcto.
DEBES modificar el campo "title", "description" y "listItems" para un seguro de "${insuranceType}".
NO debes modificar enlaces o imágenes, solo texto.
NO debes modificar el nombre de las keys o campos del JSON.
DEBES modificar el valor de los campos del JSON para adaptarlos al nuevo tipo de seguro de "${insuranceType}".
`

    const jsonString = await openAiClient.getCompletion([{
        role: 'user',
        content: prompt
    }])

    return JSON.parse(jsonString)
}


async function getInfo2Schema(openAiClient, insuranceType){

    const json = JSON.stringify(schemaInfo2Template)

    const prompt = `
Ejemplo de fichero JSON generado para un seguro de "responsabilidad civil para estudios de tatuajes":

${json}

SOLO DEBES responder con un fichero JSON sintácticamente correcto.
DEBES modificar el campo "title", "description" y "listItems" para un seguro de "${insuranceType}".
No debes modificar enlaces o imágenes, solo texto.
No debes modificar el nombre de las keys o campos del JSON.
DEBES modificar el valor de los campos del JSON para adaptarlos al nuevo tipo de seguro de "${insuranceType}".
`

    const jsonString = await openAiClient.getCompletion([{
        role: 'user',
        content: prompt
    }])

    return JSON.parse(jsonString)
}


async function getProductsSchema(openAiClient, insuranceType){

    const json = JSON.stringify(schemaProductsTemplate)

    const prompt = `
Ejemplo de fichero JSON generado para un seguro de "responsabilidad civil para estudios de tatuajes":

${json}

SOLO DEBES responder con un fichero JSON sintácticamente correcto.
DEBES modificar el campo "title", "description", "subtitle", .etc para un seguro de "${insuranceType}".
NO debes modificar enlaces o imágenes, solo texto.
NO debes modificar el nombre de las keys o campos del JSON.
DEBES modificar el valor de los campos del JSON para adaptarlos al nuevo tipo de seguro de "${insuranceType}".
`

    const jsonString = await openAiClient.getCompletion([{
        role: 'user',
        content: prompt
    }])

    return JSON.parse(jsonString)
}


async function getFaqSchema(openAiClient, insuranceType){

    const json = JSON.stringify(schemaFaqTemplate)

    const prompt = `
Ejemplo de fichero JSON generado para un seguro de "responsabilidad civil para estudios de tatuajes":

${json}

SOLO DEBES responder con un fichero JSON sintácticamente correcto.
DEBES modificar los campos "title" y "description" para un seguro de "${insuranceType}".
NO debes modificar enlaces o imágenes, solo texto.
NO debes modificar el nombre de las keys o campos del JSON.
DEBES modificar el valor de los campos del JSON para adaptarlos al nuevo tipo de seguro de "${insuranceType}".
`

    const jsonString = await openAiClient.getCompletion([{
        role: 'user',
        content: prompt
    }])

    return JSON.parse(jsonString)
}



async function getSchema(openAiClient, insuranceType, route){

    const jsonSchema = {
        "lang": "es",
        route: route,
        design: 'design1',
        "header": {
            "companyName": "Coberio", 
            "companyLogoLink": "./images/logo.png",
            "ctaText": "¿Hablamos?",
            "ctaLink": "http://localhost:4321/rc-sanitaria/estudio-tatuajes"
        }
    }

    jsonSchema.seo = await getSeoSchema(openAiClient, insuranceType)
    jsonSchema.hero = await getHeroSchema(openAiClient, insuranceType)
    jsonSchema.infoLeft = await getInfo1Schema(openAiClient, insuranceType)
    jsonSchema.infoRight = await getInfo2Schema(openAiClient, insuranceType)
    jsonSchema.products = await getProductsSchema(openAiClient, insuranceType)
    jsonSchema.faq = await getFaqSchema(openAiClient, insuranceType)
    jsonSchema.whyus = schemaWhyTemplate

    return jsonSchema
}

const insuranceType = "responsabilidad civil para Asociaciones o Clubes deportivos no profesionales de equitación"
const openAiClient = new OpenAiHttpClient("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")

const route = await getRoute(openAiClient, insuranceType);
const schema = await getSchema(openAiClient, insuranceType, route);

generateLanding(route, schema);
