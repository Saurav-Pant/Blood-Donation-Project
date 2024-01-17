import prisma from "@/app/libs/prismadb"
import { NextRequest, NextResponse } from "next/server"

export const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

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

        return NextResponse.json(newOrg,{headers:corsHeaders});

    } catch (err) {
        return NextResponse.json({ message: "POST Error", err }, { status: 500 })
    }
}

export const GET = async () => {
    try {
        const Donors = await prisma.donorOrg.findMany()

        const response = NextResponse.json({
            message: "DonorOrgs fetched successfully",
            Donors,
            Headers:corsHeaders
          });
        return response;
    } catch (err) {
        return NextResponse.json({ message: "GET Error", err }, { headers: corsHeaders })
    }
}