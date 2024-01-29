import Ticket from "@/models/ticket";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Can not deleted! ", error },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  const { id } = params;
  try {
    const ticket = await Ticket.findById(id);

    return NextResponse.json(ticket, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get data" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  try {
    const { formData: ticketData } = await req.json();
    await Ticket.findByIdAndUpdate(id, ticketData);
    return NextResponse.json(
      { message: "Updated succesfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Can not updated", error },
      { status: 500 }
    );
  }
}
