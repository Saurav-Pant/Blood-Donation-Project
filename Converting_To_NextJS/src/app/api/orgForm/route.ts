import prisma from "@/app/libs/prismadb"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();
        const { OrganisationName, OrganisationPhone, OrganisationEmail, OrganisationAddress, OrganisationState, OrganisationCity } = body;

        const newOrg = await prisma.donorOrg.create({
            data: {
                OrganisationName,
                OrganisationPhone,
                OrganisationEmail,
                OrganisationAddress,
                OrganisationState,
                OrganisationCity
            }
        });
        return NextResponse.json(newOrg);

    } catch (err) {
        return NextResponse.json({ message: "POST Error", err }, { status: 500 })
    }
}

export const GET = async () => {
    try {
        const Donors = await prisma.donorOrg.findMany()
        return NextResponse.json(Donors);
    } catch (err) {
        return NextResponse.json({ message: "GET Error", err }, { status: 500 })
    }
}