import { stat } from "fs"
import { cookies, headers } from "next/headers"
import { NextResponse } from "next/server"

// export async function GET () {
//     const reqhHeaders = headers()
//     const Token = reqhHeaders.get("Authorization") //frontend le pathako headers samatera rakheko Token ma
//     console.log({Token})

//     return NextResponse.json({name: "sabin"},
//         { headers: {
//         sabin: "this is custom header",
//     "Content-Type": "multipart/form-data",}
//     })
// }

//localhost:3000/profile ma Get request garda 
//200 status ani headers ma. Response headers ani Header ma sabin value ma this is custom header aaucha.

//to create api route in nextjs . just like creating pages in nextjs,
// we can make folder and route.ts inside the folder, which needs be inside app folder.

//localhost:3000/profile ma Get request garda 
//Response {
//   "name": "sabin"
// }  Api banyo.


//localhost:3000/profile ma hamile headers ma . Authorization  vanera Bearer token pathayem. teslai console.log garera herda aayo.
//Authorization: Bearer sdnbjkfsdnfeo 

export async function GET () {
    const reqhHeaders = headers()
    const hamroookies = cookies()

    hamroookies.set("theme", "dark")

    const Token = reqhHeaders.get("Authorization") //frontend le pathako headers samatera rakheko Token ma

    console.log({hamroookies: hamroookies.get("theme")?.value})
    console.log({Token})

    return  new Response("<h1> HEllo </h1>", {
        status: 200, 
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
}

//cookies le server client bich communication garcha. 
//server bata pathako kura automatically browser ma save garcha. next req ma tyo save vako kura ni jancha.
//most common use Auhorization token pathauda