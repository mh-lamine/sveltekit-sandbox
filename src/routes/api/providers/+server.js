import prisma from "$lib/prisma/client";
import { json } from '@sveltejs/kit';

export async function POST({request}) {
    const { name }  = await request.json();
    const response = await prisma.provider.create({
        data: {
            name
        }
    });
    return json(response);
}