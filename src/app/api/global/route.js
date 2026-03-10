import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import GlobalContent from '@/models/GlobalContent';
import { authenticateRequest } from '@/lib/auth';

export async function GET() {
  try {
    await dbConnect();
    const global = await GlobalContent.findOne({ key: 'global' }).lean();

    if (!global) {
      return NextResponse.json(
        { error: 'Global content not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(global);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch global content' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const user = authenticateRequest(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await dbConnect();
    const body = await request.json();

    const global = await GlobalContent.findOneAndUpdate(
      { key: 'global' },
      { $set: body },
      { new: true, upsert: true }
    ).lean();

    return NextResponse.json(global);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update global content' },
      { status: 500 }
    );
  }
}
