import { NextRequest, NextResponse } from "next/server";
import { comments } from "./data";

export async function GET (request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    // console.log ( {query: searchParams.get("query")})
    //localhost:3000/comments?query=comment console paxi get request gareko. query ma comment aaucha
    const pricegte = searchParams.get("pricegte") // yesari search or filter functionality use garna sakincha

    const q = searchParams.get("query")

    const searchComments = comments.filter((comment) => comment.name.includes(q || ""))
    return NextResponse.json(searchComments)

    //localhost:3000/comments?query=sabin   console paxi get request gareko. query ma name sabin search garem
    //yesari hamile get request search or filter ko lagi use garna sakincha
   

    //database call yeha hun6
    // return Response.json(comments) we can do this way too. But since we r using nextjs we will do nextResponse
    // return NextResponse.json(comments)
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

