import TicketForm from "@/components/TicketForm";
import React from "react";

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Failed to get ticket!");
  }
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id !== "new" ? true : false;
  let updateTicketData = {};

  // condition for ticket data
  EDITMODE
    ? (updateTicketData = await getTicketById(params.id))
    : (updateTicketData = { _id: "new" });

  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
