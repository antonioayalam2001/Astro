import { newXataClientWithViteEnv } from "../../../../xata";


const client = newXataClientWithViteEnv();
export async function GET({ params }) {
    try {
        const {id} = params;
        return new Response(
            JSON.stringify(({ parametro: id })), {
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