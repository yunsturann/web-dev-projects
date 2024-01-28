"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const router = useRouter();

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const [formData, setFormData] = useState(startingTicketData);

  // Handle change
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/Tickets", {
      method: "POST",
      "content-type": "application/json",
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      throw new Error("Failed to create Ticket");
    }
    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-3 w-1/2" onSubmit={handleSubmit}>
        <h3>Create Your Ticket</h3>
        {/* title */}
        <label htmlFor="">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required={true}
          value={formData.title}
          onChange={handleChange}
        />
        {/* description */}
        <label htmlFor="">Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required={true}
          value={formData.description}
          onChange={handleChange}
        />
        {/* category */}
        <label htmlFor="">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>
        {/* priority */}
        <label htmlFor="">Priority</label>
        <div>
          {/* priority 1 */}
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label htmlFor="priority-1">1</label>
          {/* priority 2 */}
          <input
            type="radio"
            id="priority-2"
            name="priority"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label htmlFor="priority-2">2</label>
          {/* priority 3 */}
          <input
            type="radio"
            id="priority-3"
            name="priority"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label htmlFor="priority-3">3</label>
          {/* priority 4 */}
          <input
            type="radio"
            id="priority-4"
            name="priority"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label htmlFor="priority-4">4</label>
          {/* priority 5 */}
          <input
            type="radio"
            id="priority-5"
            name="priority"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label htmlFor="priority-5">5</label>
        </div>
        {/* Progress */}
        <label htmlFor="">Progress {formData.progress}</label>
        <input
          type="range"
          id="progress"
          name="progress"
          min="0"
          max="100"
          value={formData.progress}
          onChange={handleChange}
        />
        {/* Status */}
        <label htmlFor="">Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <button type="submit" className="btn">
          Create Ticket
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
