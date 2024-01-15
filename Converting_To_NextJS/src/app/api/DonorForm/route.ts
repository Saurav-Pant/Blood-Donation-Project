import prisma from "@/app/libs/prismadb"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();
        const { id, userLoginemail, firstName, lastName, phone, email, bloodGroup, age, address, state, city, gender } = body;

        const newDonor = await prisma.donor.create({
            data: {
                id,
                userLoginemail,
                firstName,
                lastName,
                phone,
                email,
                bloodGroup,
                age,
                address,
                state,
                city,
                gender
            }
        })

        return NextResponse.json(newDonor);

    } catch (err) {
        return NextResponse.json({ message: "POST Error", err }, { status: 500 })
    }
}

export const GET = async () => {
    try {

        const Donors = await prisma.donor.findMany()

        return NextResponse.json(Donors);

    } catch (err) {
        return NextResponse.json({ message: "GET Error", err }, { status: 500 })
    }
}