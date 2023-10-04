import type { APIRoute } from "astro";
import { newXataClientWithViteEnv, type Job } from "../../../xata";

const client = newXataClientWithViteEnv();
export async function GET({ params }) {
    try {
        const jobs = await client.db.job.getAll({});
        return new Response(
            JSON.stringify(({ data: [...jobs] })), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        return new Response(
            JSON.stringify(({ msg: 'Something went wrong sorry' })), {
            status: 400,
            headers: {
                "Content-Type": "application/json"
            }
        }
        )
    }
}

export const POST: APIRoute = async ({ request }) => {
    // Recibimos toda la información del request
    // console.log(request);
    // Obtenemos el body del request
    const body: Job = await request.json();
    // console.log(body);
    const response = await client.db.job.create(body);
    // console.log(response);
    return new Response(
        JSON.stringify((response)), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}