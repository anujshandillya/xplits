import Connection from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

Connection();

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    console.log(reqBody);
    const { firstName, lastName, username, emailAddress, password } = reqBody;
    const user = await User.findOne({ emailAddress });
    if (user) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPass = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      firstName,
      lastName,
      emailAddress,
      password: hashPass,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
        savedUser
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
