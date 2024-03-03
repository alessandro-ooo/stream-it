import { NextRequest, NextResponse } from 'next/server';


const middleware = async (request: NextRequest) => { 
    console.log(request.url);
}
export default middleware