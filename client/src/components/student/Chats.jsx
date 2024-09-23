import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'
import api from '../common/server_url';
import TimeAgo from '../common/TimeAgo';
import { io } from 'socket.io-client';


const Chats = () => {

  const { studentId } = useParams();
  const [shortlistedInternships, setShortlistedInternships] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const [selectedRecruiter, setSelectedRecruiter] = useState(null);
  const [selectedInternship, setSelectedInternship] = useState(null);

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketConnection = io(api, {
      query: { userType: 'Student', userId: studentId }
    });
    setSocket(socketConnection);

    socketConnection.on('recruitersActive', ({ userId, isActive }) => {
      console.log('listening to all active recruiters')
      setShortlistedInternships(prevInterns => {
        console.log(isActive);
        return prevInterns.map(intern => intern.recruiterId === userId ? { ...intern, isActive } : intern)
      }
      )
    })

    return () => {
      socketConnection.off('recruitersActive');

      socketConnection.disconnect();
    };

  }, [studentId])

  useEffect(() => {
    console.log('Updated shortlistedInternships:', shortlistedInternships);
  }, [shortlistedInternships]);


  useEffect(() => {
    const fetchShortlistedInternships = async () => {
      try {
        const response = await axios.get(`${api}/student/internship/${studentId}/shortlisted-internships`);
        setShortlistedInternships(response.data);
        console.log(response.data);

      } catch (err) {
        toast.success('some error occured');

      }
    };

    fetchShortlistedInternships();
  }, [studentId]);

  const sendMessage = () => {
    if (newMessage.trim() && socket) {



      const messageData = {
        studentId,  // or studentId depending on who is sending
        recruiterId: selectedRecruiter,
        message: newMessage,
        internshipId: selectedInternship,
        type: 'Student'
      };
      console.log('message Data', messageData);

      // Emit the message event to the backend
      socket.emit('sendMessage', messageData);

      // setChatMessages((prevMessages) => [
      //   ...prevMessages,
      //   { senderId: studentId, messageContent: newMessage },  // Add the message locally for immediate display
      // ]);




      // Optionally clear the message input
      setNewMessage('');
    }
  };

  const handleInternClick = (internshipId, recruiterId) => {
    setSelectedRecruiter(recruiterId);
    setSelectedInternship(internshipId);

    // console.log('this is internship id', internshipId);
    // console.log('this is recruiter id', recruiterId);

    socket.emit('joinChatRoom', { recruiterId, studentId, internshipId, type: 'Student' });

    socket.on('receiveMessages', (message) => {
      console.log('Message received by recruiter', message);
      setChatMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on('chatHistory', (messages) => {
      console.log('Chat history received', messages);
      setChatMessages(messages);
    });


  }
  return (
    <div className="flex justify-end h-[80vh] border border-black mt-20 mx-8 relative">
      {/* Left Column - Shortlisted Students */}
      <div className="fixed left-10 top-30 w-[30%] bg-gray-100 p-4 shadow-lg overflow-y-auto h-[70vh]">
        <h2 className="text-xl font-semibold mb-4">Shortlisted Internships</h2>
        <ul className="space-y-2">
          {shortlistedInternships.map((intern) =>

            <div
              key={`${intern.internshipId}`}
              className="student-internship-entry bg-white shadow-md rounded-lg p-4 mb-4 flex items-start space-x-4 border border-gray-200 hover:cursor-pointer hover:border-blue-300 hover:scale-105 duration-300"
              onClick={() => handleInternClick(intern.internshipId, intern.recruiterId)}
            >
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <span>{intern.companyName}</span>
                  {intern.isActive && (<div className='ml-2 bg-green-500 rounded-full w-3 h-3'> </div>)}
                </h3>
                <p className="text-sm text-gray-600">{intern.internshipName}</p>
                <p>{TimeAgo(intern.statusUpdatedAt)}</p>
                <p>{intern.statusUpdatedAt}</p>
                <p>{intern.isActive}</p>
              </div>
            </div>

          )}
        </ul>
      </div>

      {/* Right Column - Chat Interface */}
      <div className="w-[65%] p-4 flex flex-col">
        <div className="flex-grow bg-white p-4 border rounded-lg shadow-lg overflow-y-auto">
          {/* Chat messages */}
          <div className="flex flex-col space-y-4">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded max-w-md ${msg.senderId === studentId ? 'bg-purple-200 self-end' : 'bg-gray-200'}`}
              >
                <strong>{msg.senderId === studentId ? 'You' : 'Recruiter'}:</strong> {msg.messageContent}
              </div>
            ))}
          </div>
        </div>

        {/* Chat input */}
        <div className="mt-4 flex space-x-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="w-full p-2 border-2 rounded-lg"
            placeholder="Type a message..."
          />
          <button
            className="bg-blue-500 text-white border px-9 py-1 rounded-lg"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chats