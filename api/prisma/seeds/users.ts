import { PrismaClient, UserCreateInput } from "@prisma/client";

export const USER_1 = "UVRgDAyBCHOEJb0pPhr3PyT2Rtb2";

const users: UserCreateInput[] = [
  {
    id: USER_1,
    email: "mr.tokkino@gmail.com",
  },
];

export async function wipeUsers(prisma: PrismaClient) {
  await prisma.user.deleteMany({});
}

export async function createUsers(prisma: PrismaClient) {
  for (const data of users) {
    await prisma.user.create({
      data,
    });
  }
}
