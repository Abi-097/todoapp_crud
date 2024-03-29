import connectMongoDB from "@/libs/MongoDB";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  //   const { title, description } = await request.json();
  const { title: title, description: description } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json(
    { message: "Updated Successfully" },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;

  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
