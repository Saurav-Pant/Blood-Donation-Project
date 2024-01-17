import prisma from "@/app/libs/prismadb"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest, response: NextResponse) => {
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
        response.headers.set("Access-Control-Allow-Origin", "*");
        response.headers.set("Access-Control-Allow-Methods", "*");
        response.headers.set("Access-Control-Allow-Headers", "*");

        return NextResponse.json(newOrg);

    } catch (err) {
        response.headers.set("Access-Control-Allow-Origin", "*");
        response.headers.set("Access-Control-Allow-Methods", "*");
        response.headers.set("Access-Control-Allow-Headers", "*");

        return NextResponse.json({ message: "POST Error", err }, { status: 500 })
    }
}

export const GET = async (response: NextResponse) => {
    try {
        const Donors = await prisma.donorOrg.findMany()
        response.headers.set("Access-Control-Allow-Origin", "*");
        response.headers.set("Access-Control-Allow-Methods", "*");
        response.headers.set("Access-Control-Allow-Headers", "*");

        return NextResponse.json(Donors);
    } catch (err) {
        response.headers.set("Access-Control-Allow-Origin", "*");
        response.headers.set("Access-Control-Allow-Methods", "*");
        response.headers.set("Access-Control-Allow-Headers", "*");

        return NextResponse.json({ message: "GET Error", err }, { status: 500 })
    }
}