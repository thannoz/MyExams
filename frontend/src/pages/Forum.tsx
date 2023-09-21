<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css"; 
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import logo from "../img/logo.png";



const Forum = () => {
  const [examData, setExamData] = useState({
    subject: "",
    course: "",
    date: null,
    formattedDate: "",
    time: null,
    room: "",
  });



  const handleSubjectChange = (e) => {
    setExamData({ ...examData, subject: e.target.value });
  };

  const handleCourseChange = (e) => {
    setExamData({ ...examData, course: e.target.value });
  };

  const handleDateChange = (date) => {
    const formattedDate = formatSelectedDate(date); // Datum formatieren
    setExamData({ ...examData, date: date, formattedDate}); // Datum und formatiertes Datum speichern
  };

  const handleTimeChange = (time) => {
    setExamData({ ...examData, time });
  };

  const handleRoomChange = (e) => {
    setExamData({ ...examData, room: e.target.value });
  };

  const formatSelectedDate = (date) => {
    const options = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('de-DE', options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Klausurdaten:", examData); // Hier kannst du die Klausurdaten verwenden, um die Klausur zu erstellen oder speichern
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <a href="#" className="inline-flex flex-row items-center">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">myExams</span>
                  <img className="h-14 w-auto" src={logo} alt="" />
                </Link>
              </a>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Erstellen Sie jetzt einen Klausurtermin!</h2>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit}>
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">Klausurfach</label>
                    <input
                      type="text"
                      value={examData.subject}
                      onChange={handleSubjectChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Kursbezeichnung</label>
                    <input
                      type="text"
                      value={examData.course}
                      onChange={handleCourseChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder=""
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label className="leading-loose">Datum</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <DatePicker // Hier fügen wir den DatePicker ein
                            selected={examData.date}
                            onChange={handleDateChange}
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholderText="dd/mm/yyyy"
                          />
                        <div className="absolute left-3 top-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Uhrzeit</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <TimePicker
                          
                          onChange={handleTimeChange}
                          value={examData.time}
                          disableClock={true}
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          format="HH:mm" // Format für die Uhrzeit (24-Stunden-Format)
                          clearIcon={null}
                        />
                        <div className="absolute left-3 top-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Raum</label>
                    <input
                      type="text"
                      value={examData.room}
                      onChange={handleRoomChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="pt-4 flex items-center space-x-4">
                  <Link to="/" className="-m-1.5 p-1.5">
                    <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                      <svg
                        className="w-6 h-6 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>{" "}
                      Abbrechen
                    </button>
                  </Link>
                  <button
                    type="submit"
                    className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >
                    Erstellen
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
=======
import { useUser } from "@clerk/clerk-react";
import { Wrapper } from "components/Wrapper";
import ForumWrapper from "../components/ForumContent";
import NavbarHeader from "./NavbarHeader";
import ForumContent from "../components/ForumContent";

const Forum = () => {
  const user = useUser();

  return (
    <div>
      <NavbarHeader content={<ForumContent />} />;
>>>>>>> 7442db54c40f4ec293f853edb92eb774f86f9f9b
    </div>
  );
};

export default Forum;

