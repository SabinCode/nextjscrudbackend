import { NextRequest, NextResponse } from "next/server";
import { comments } from "./data";

export async function GET () {
    //database call yeha hun6
    // return Response.json(comments) we can do this way too. But since we r using nextjs we will do nextResponse
    return NextResponse.json(comments)
}

//post ma request vanne argument aaucha , yo request lai json ma convert garepaxi data paincha.
//data body ma pathaencha like in postman, thunderClient hamile use gariraacham
export async function POST (request: NextRequest) {
    const body = await request.json();

    //payload ma  request.json garepaxi text, name, comments haru body ma aaucha. so body.name, body.comment gareko.
    const comment = {
        id: comments.length + 1,
        name: body.name,
        comment: body.comment,
    }
    comments.push(comment)
    return NextResponse.json(comment, {status: 201}) // k kura push vayo vanera userslai dekhaunalai, create huda 201 is standard. so object banayera status 201 pathayem
}

