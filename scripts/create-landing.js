import { existsSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const { Pool } = pg;

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

async function generateLanding(landingId) {

    const {metadata:landingSchema, path:landingPath} = await getLanding(landingId)
    console.log({landingSchema, landingPath})
    removeDirectories(landingPath)
    createDirectories(landingPath);
    createSchemaFile(landingSchema, landingPath);
    createComponentFile(landingPath)
}


async function getLanding(landingId) {

    const pool = new Pool({
        user: process.env.PG_USER || 'postgres.gywksvselpfvmefrtmxo',
        host: process.env.PG_HOST || 'aws-0-eu-west-2.pooler.supabase.com',
        database: process.env.PG_NAME ||'postgres',
        password: process.env.PG_PASSWORD || "",
        port: 5432, 
    });

    const client = await pool.connect();

    try {
        const query = 'SELECT * FROM landings WHERE id = $1';
        const values = [landingId];

        const res = await client.query(query, values);

        if (res.rows.length > 0) {
            return res.rows[0];
        } else {
            throw Error(`no landing found with ${landingId}`); 
        }
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err; // rethrow the error
    } finally {
        client.release();
    }
}


(async () => {
    try {
        const args = process.argv.slice(2);
        if (args.length === 0) {
            console.error('Please provide a landing ID as an argument');
            process.exit(1);
        }
        await generateLanding(args[0]);
    } catch (err) {
        console.error('Error fetching landing', err);
    }
  })();



