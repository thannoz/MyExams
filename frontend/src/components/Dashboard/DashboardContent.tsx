import React, { FC, useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

import { Teacher } from "../Teacher/Teacher";
import { Student } from "../Student/Student";
import { UnknownUser } from "../UnknowUser/UnknownUser";
import { StatusChangeContext } from "../../context";
import { IExamAPI } from "components/ExamArea/interfaces/IExamAPI";
import { useQuery } from "@tanstack/react-query";
import { sendApiRequest } from "../../helpers/sendApiRequest";

interface SearchProps {
  searchInput?: string;
}

export const DashboardContent: FC<SearchProps> = ({ searchInput }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  searchInput = searchQuery;
  const taskUpdatedContext = useContext(StatusChangeContext);
  const user = useUser();
  const { error, isLoading, data, refetch } = useQuery(["exams"], async () => {
    console.log("Data from api:", data);
    return await sendApiRequest<IExamAPI[]>(
      "http://localhost:3200/exams",
      "GET"
    );
  });

  useEffect(() => {
    refetch();
  }, [taskUpdatedContext.updated]);

  return (
    <div className="bg-slate-300 flex-1 p-4 w-full md:w-1/2">
      <div className="relative max-w-md w-full">
        <div className="absolute top-1 left-2 inline-flex items-center p-2">
          <i className="fas fa-search text-gray-400"></i>
        </div>
        <input
          className="w-full md:max-w-xl h-10 pl-10 pr-4 py-1 text-base 
          placeholder-gray-500 border rounded focus:shadow-outline"
          type="search"
          placeholder="Suche nach Fächer..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="bg-slate-300 mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
        {user.user?.publicMetadata.role === "teacher" && (
          <Teacher searchValue={searchInput} />
        )}
        {user.user?.publicMetadata.role === "student" && (
          <Student searchValue={searchInput} />
        )}
        {!user.user?.publicMetadata.role && <UnknownUser />}
      </div>
    </div>
  );
};
