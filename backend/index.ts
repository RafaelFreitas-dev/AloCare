import { prisma } from "./lib/prisma.js";

async function getUser() {
    const users = await prisma.user.findMany();
    console.log(users);
}

getUser();