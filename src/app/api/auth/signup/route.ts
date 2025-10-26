import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectToDatabase } from '@/app/lib/mongodb';
import User from '@/app/models/User';
import { generateToken } from '@/app/lib/jwt';
import { isPasswordValid } from '@/app/utils/passwordValidation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password, confirmPassword } = body;

    // Validate required fields
    if (!name || !email || !password || !confirmPassword) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: 'Passwords do not match' },
        { status: 400 }
      );
    }

    // Validate password strength
    if (!isPasswordValid(password)) {
      return NextResponse.json(
        { error: 'Password does not meet security requirements' },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Create new user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password, // Password will be hashed by the User model pre-save hook
    });

    // Generate JWT token
    const userId = (user._id as mongoose.Types.ObjectId).toString();
    const token = generateToken({
      userId,
      email: user.email,
      name: user.name,
    });

    return NextResponse.json(
      {
        message: 'User created successfully',
        token,
        user: {
          id: userId,
          name: user.name,
          email: user.email,
          profileImage: user.profileImage,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
