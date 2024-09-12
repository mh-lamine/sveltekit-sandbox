import { addProvider } from '$lib/services/providerService.js';

export const actions = {
    create : async (request) => {
        const {name} = await request.formData();
        await addProvider(name);
    }
}