import prisma from "$lib/prisma/client";

export async function getProviders() {
    return await prisma.provider.findMany();
}

export async function addProvider(name) {
    return await prisma.provider.create({
        data: {
            name
        }
    });
}

export async function updateStatus(id) {
    return await prisma.provider.update({
        where: {
            id
        },
        data: {
            hasPaid: true
        }
    });
}

export async function deleteProvider(id) {
    return await prisma.provider.delete({
        where: {
            id
        }
    });
}