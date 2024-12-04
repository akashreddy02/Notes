import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/cards/NoteCard";
import AddEditNotes from "./AddEditNotes";
import { MdAdd } from "react-icons/md";
import Modal from "react-modal";
import axiosInstance from "../../utils/axioInstance";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShow: false,
    type: "add",
    data: null,
  });

  const notes = [
    {
      id: 1,
      title: "Meeting on 7th March",
      date: "2024-11-26",
      content: "I have to attend the meeting on 7th March morning",
      tags: "#meeting",
      isPinned: false,
    },
  ];

  const handleEdit = (id) => console.log(`Editing note with ID: ${id}`);
  const handleDelete = (id) => console.log(`Deleting note with ID: ${id}`);
  const handlePinNote = (id) =>
    console.log(`Toggling pin status for note with ID: ${id}`);

  console.log(openAddEditModal);

  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  //api call get user info

  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getUserInfo();
    return () => {};
  }, []);

  return (
    <div>
      <Navbar userInfo={userInfo} />

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              title={note.title}
              date={note.date}
              content={note.content}
              tags={note.tags}
              isPinned={note.isPinned}
              onEdit={() => handleEdit(note.id)}
              onDelete={() => handleDelete(note.id)}
              onPinNote={() => handlePinNote(note.id)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={() =>
          setOpenAddEditModal({ isShow: true, type: "add", data: null })
        }
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <MdAdd className="text-2xl" />
      </button>

      {openAddEditModal.isShow && (
        <Modal
          isOpen={openAddEditModal.isShow}
          onRequestClose={() =>
            setOpenAddEditModal({ isShow: false, type: "add", data: null })
          }
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.2)",
            },
          }}
          contentLabel="Add/Edit Notes Modal"
        >
          <AddEditNotes
            type={openAddEditModal.type}
            noteData={openAddEditModal.data}
            onClose={() => {
              setOpenAddEditModal({ isShow: false, type: "add", data: null });
            }}
          />
        </Modal>
      )}
    </div>
  );
};

export default Home;
