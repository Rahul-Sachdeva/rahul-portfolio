import { sendEmail } from "@/helpers/mailer/mailer";
import { NextRequest, NextResponse } from "next/server";

interface MessageRequest{
    name: string;
    email: string;
    message: string;
}

export async function POST(request:NextRequest){
    try{
        const reqBody:MessageRequest = await request.json();
        const {name, email, message}:MessageRequest = reqBody;
        await sendEmail({name, email, message});
        
        return NextResponse.json({
            message: "Message Sent Succesfully",
            success: true,
        })
    } catch (error: unknown) {
        let errorMessage = "An unknown error occurred";

        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}