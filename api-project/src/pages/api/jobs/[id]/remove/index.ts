import { newXataClientWithViteEnv } from "../../../../../xata";

type Params = {
    id: string
}
const client = newXataClientWithViteEnv();
export const DELETE = async ({ params }: { params: Params }) => {
    try {
        const { id } = params;
        const deleted = await client.db.job.delete(id);
        return new Response(
            JSON.stringify(({ result: deleted })), {
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