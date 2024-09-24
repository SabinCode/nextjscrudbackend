import { NextResponse } from "next/server";


export const dynamic = "force-dynamic"
export async function GET () {
    return NextResponse.json({time: new Date().toLocaleTimeString()})
}

//local time dincha get Request garda. localhost:3000/time
//cache: "force-cache" cacheing roknalai force dynamic garna sakincha. aba force-dynamic garepaxi prod server ma refresh garda new time dincha. cache vako vaye new time didaina
//get bahek aru ma cache hudaina.
//get garna pare post ma get matrai garda huncha.

