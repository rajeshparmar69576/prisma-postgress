import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            email: "varshaparmar@gmail.com",
            name:"Rajesh Parmar"
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
        console.log("done with the query")
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
