import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from './app/api/auth/[...nextauth]/route';
import { getUser } from './app/libs/prisma-user';

const middleware = async (request: NextRequest) => { 
}
export default middleware