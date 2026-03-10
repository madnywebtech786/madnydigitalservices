import { NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    await connectDB();

    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const token = signToken({ email, role: user.role });

    return NextResponse.json({
      token,
      user: { email, role: user.role },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}
