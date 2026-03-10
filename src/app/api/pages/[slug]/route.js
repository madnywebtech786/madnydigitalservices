import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import PageContent from '@/models/PageContent';
import { authenticateRequest } from '@/lib/auth';

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const { slug } = await params;
    const page = await PageContent.findOne({ slug }).lean();

    if (!page) {
      return NextResponse.json(
        { error: 'Page not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(page);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch page content' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const user = authenticateRequest(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await dbConnect();
    const { slug } = await params;
    const body = await request.json();

    const page = await PageContent.findOneAndUpdate(
      { slug },
      {
        $set: {
          ...(body.meta && { meta: body.meta }),
          ...(body.sections && { sections: body.sections }),
        },
      },
      { new: true, upsert: true }
    ).lean();

    return NextResponse.json(page);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update page content' },
      { status: 500 }
    );
  }
}
