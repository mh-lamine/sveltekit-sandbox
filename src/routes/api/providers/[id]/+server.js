import prisma from "$lib/prisma/client";

export async function DELETE({ params }) {
    await prisma.provider.delete({
        where: {
            id: parseInt(params.id)
        }
    });
    return new Response(null, { status: 200 })
}