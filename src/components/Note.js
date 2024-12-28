import React, { useState } from "react";

const Note = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    noteId: "", // This can be generated programmatically if required
    title: "",
    content: "",
    subject: "",
    createdBy: "",
    lastEditedBy: "",
    lastEditedAt: "",
    createdAt: "",
    collaborators: "",
  });

  // Open Modal
  const openModal = () => setIsModalOpen(true);

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      noteId: "",
      title: "",
      content: "",
      subject: "",
      createdBy: "",
      lastEditedBy: "",
      lastEditedAt: "",
      createdAt: "",
      collaborators: "",
    });
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate Required Fields
    const {
      noteId,
      title,
      content,
      subject,
      createdBy,
      lastEditedBy,
      lastEditedAt,
      createdAt,
      collaborators,
    } = formData;

    if (
      !noteId ||
      !title ||
      !content ||
      !subject ||
      !createdBy ||
      !lastEditedBy ||
      !lastEditedAt ||
      !createdAt
    ) {
      alert("All fields are required!");
      return;
    }

    // Parse collaborators
    const collaboratorsArray = collaborators
      .split(",")
      .map((email) => email.trim());

    const noteData = {
      ...formData,
      collaborators: collaboratorsArray,
    };

    console.log("Form submitted:", noteData);

    // Submit data to backend or handle logic here
    closeModal();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-pink-200 relative">
      {/* Center Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="https://i.pinimg.com/736x/15/26/f5/1526f58f5d6529af82bbcfe412087d91.jpg"
          alt="Centered Illustration"
          className="max-w-full max-h-[400px] object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Add Note Button */}
      <div className="absolute top-4 left-4 z-10">
        <button
          className="flex items-center px-4 py-2 bg-[#e2526d] text-white font-medium rounded-lg shadow hover:bg-[#bc343e]"
          onClick={openModal}
        >
          <span className="text-lg mr-2">+</span>
          <span>Add Note</span>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Add Note</h2>
              <button
                className="text-gray-400 hover:text-gray-600"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>

            <hr className="mb-4" />

            {/* Modal Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="noteId"
                  placeholder="Note ID"
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e2526d]"
                  value={formData.noteId}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  id="title"
                  placeholder="Add Title..."
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e2526d]"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <textarea
                  id="content"
                  placeholder="Add Content..."
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e2526d]"
                  value={formData.content}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  id="subject"
                  placeholder="Add Subject..."
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e2526d]"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  id="createdBy"
                  placeholder="Created By..."
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e2526d]"
                  value={formData.createdBy}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  id="lastEditedBy"
                  placeholder="Last Edited By..."
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e2526d]"
                  value={formData.lastEditedBy}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <input
                  type="datetime-local"
                  id="lastEditedAt"
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e2526d]"
                  value={formData.lastEditedAt}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <input
                  type="datetime-local"
                  id="createdAt"
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e2526d]"
                  value={formData.createdAt}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  id="collaborators"
                  placeholder="Collaborators (comma-separated emails)"
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e2526d]"
                  value={formData.collaborators}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700 font-medium"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#e2526d] text-white font-medium rounded-lg shadow hover:bg-[#bc343e]"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
