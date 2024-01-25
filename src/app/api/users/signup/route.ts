import { connect } from "@/dbConfig/dbConfig";
import User from "@/userModel/userSchema";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password, username } = reqBody;

    // Check if all fields are filled
    if (!email || !password || !username) {
      return NextResponse.json(
        { message: "Please fill in all fields" },
        { status: 400 }
      );
    }
    const user = await User.findOne({ email });
    // Check if user already exists
    if (user) {
      return NextResponse.json({
        message: "User already exists",
        success: false,
      });
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    // Create new user
    const newUser = await new User({
      email,
      password: hashedPassword,
      username,
    });
    const savedUser = await newUser.save();
    console.log("NEW USER CREATED. NEWUSER:", savedUser);
    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
        savedUser,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("ERROR IN POST /api/users/signup/route.ts: ", error);
    return NextResponse.json({
      error: error.message,
    });
  }
}
