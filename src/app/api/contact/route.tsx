import { sendEmail } from "@/helpers/mailer/mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json();
        const {name, email, message} = reqBody;
        console.log("name: ",name, ", email: ", email, ", message: ",message);
        await sendEmail({name, email, message});
        
        return NextResponse.json({
            message: "Message Sent Succesfully",
            success: true,
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}