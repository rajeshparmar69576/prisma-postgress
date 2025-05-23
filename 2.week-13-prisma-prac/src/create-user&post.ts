import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            email: "bharatsolanki@gmail.com",
            name: "Bharat",
            posts: {
                create: [
                    {
                        title:'raj title 1'
                    },
                    {
                        title:'raj title 2'
                    }
                ]
            }
            
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
        console.log("done")
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })