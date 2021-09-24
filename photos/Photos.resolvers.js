export default {
    Photo: {
        user: ({userId})
        => {
            return client.user.findUnique({ where: {id: userId} });
        },
    },
};  