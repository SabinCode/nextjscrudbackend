//id ko lagi [id] folder banayera route banauda ramro

import { NextRequest, NextResponse } from "next/server";
import { comments } from "../data";

export async function GET (request: NextRequest,  context: {params: {id: string}}) {
    const {id} = context.params
    const comment = comments.find((comment) => comment.id === Number(id))

    return NextResponse.json(comment)
}

//const {id} = context.params destructuring id. id payepaxi
//kun comment ho , tesko lagi comments.find ((c)=> c.id === Number(id))
//((c) comments ma loop lagayem), comments ko id === hamile pathako id.
//params ma aayepaxi j pani string huncha. But yo id hamile  banako database ma number ho.
//so Number(id) le string id lai  number maconvert garera number banayera compare garum. vetyo vane return garum.

//localhost:3000/comments/5  aba yo url ma hamile single comment ko id pathayera data fetch garna sakem.
//{
//     "id": 5,
//     "name": "sabin",
//     "comment": "this is comment 5"
//   }

//Delete ko Api pani yei banauna paryo.

//patch ma kun comment kun index ma cha khojera partial update garam

export async function PATCH(request: NextRequest,  context: {params: {id: string}}) {
    const {id} = context.params
   const commentIndex = comments.findIndex((comment) => comment.id === Number(id))
//    const commentIndex = comments.findIndex((comment) => comment.id === Number(context.params.id))

   const body = await request.json();
   comments[commentIndex].name = body.name,
   comments[commentIndex].comment = body.comment
   
   return NextResponse.json(comments[commentIndex])
}

//Index nikalera , Id match gareko cha. Mathi hami sabai datalai loop lagayera index khojeko cha. 2 number index lai vetaye pani id 3 cha so 3 update hunxa.


//Delete ma pani comments ko index vetayem, arrayko splice method use garem.
export async function DELETE (request: NextRequest,  context: {params: {id: string}}) {
    const {id} = context.params
    const commentIndex = comments.findIndex((comment) => comment.id === Number(id))

    const commentToDelete = comments[commentIndex]
    comments.splice(commentIndex, 1)
    
    return NextResponse.json(commentToDelete)
}