import type { APISpaceXResponse, Doc } from "../types/types";
export const getLatestLaunches = async () => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc",
                },
                limit: 10,
            },
        }),
    };
    const response = await fetch(
        "https://api.spacexdata.com/v5/launches/query",
        options
    );
    const { docs } = (await response.json()) as APISpaceXResponse;
    return docs;
}

export const getLaunchById = async (id: string) => {
    const response = await fetch(
        `https://api.spacexdata.com/v5/launches/${id}`
    );
    const launch = await response.json() as Doc;
    return launch;
}