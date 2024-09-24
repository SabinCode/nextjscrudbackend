import { match } from "assert";
import { removeRequestMeta } from "next/dist/server/request-meta";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    // console.log(request.nextUrl.pathname, "middleware bata aako ")

    // if(request.nextUrl.pathname === "/time") {
    //     return NextResponse.redirect(new URL("/profile", request.url))
        // return NextResponse.rewrite(new URL("/profile", request.url)) }



    const response = NextResponse.next()
    response.cookies.set("name", "sabin")
    response.headers.set("custom-header", "sabin")
    return response
}

// export const config = {
//     matcher: "/profile", 

// }  yesari header ra cookies set garna sakincha  junjun thauma chahincha teha or mathi if condition lekhera garna sakincha.

//middleware ma cookies set garna milyo, headers pani set garna milyo

//mathi redirect le , time ko url ma handa profileko url and data ma puraune vayo.
//rewrite le chai , url time mai rakhera , data matra profile ko dekhaune vayo. 

//kun url bata aairacha vanera herna milcha. yo case ma hamile Get request profile ma garda. 
//profile ko pathname dine vo
//bichama rokera k bigryo vanera log garera herna milncha middleware le garda