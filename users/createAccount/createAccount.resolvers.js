import bcrypt from "bcrypt";
import client from "../../client";

export default {
    Mutation: {
        createAccount: async (
            _, 
            { firstName, lastName, username, email, password}
        ) => {
            try {
                const existingUser = await client.user.findFirst({
                    where: {
                        OR: [
                            {
                                username, 
                            },
                            {
                                email,
                            },
                        ],
                    },
                });
                if(existingUser) {
                    throw new Error("This username/password is already token.");
                }
                const uglyPassword = await bcrypt.hash(password, 10);
                await client.user.create({
                    data: {
                        username,
                        email,
                        firstName,
                        password: uglyPassword,
                    },
                });
                return {
                    ok:true,
                };
            }
            catch (e) {
                return { 
                    ok: false,
                    error: "Cannot create account",
                };
            }
        },
    },
};