import { getProviders } from "$lib/services/providerService"

export const load = async () => {
    try {
        const providers = await getProviders();
        return {
            status: 200,
            providers: providers
        }
    } catch (err) {
        return {
            status: 500,
            error: err.message
        }
    };
}