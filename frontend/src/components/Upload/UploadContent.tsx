import { useEffect, useState } from "react";
import { IUploadCSV } from "./interfaces/IUpload";
import { parse } from "papaparse";
import { useMutation, useQuery } from "@tanstack/react-query";
import { sendApiRequest } from "../../helpers/sendApiRequest";

const UploadContent = () => {
  const [isHightlighted, setIsHighlighted] = useState<boolean>(false);
  const [teachers, setTeachers] = useState<IUploadCSV[]>([]);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const onDropFileHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHighlighted(false);
    Array.from(e.dataTransfer.files)
      .filter((file) => file.type === "text/csv")
      .forEach(async (file) => {
        const content = await file.text();
        const result = parse(content, { header: true });
        const parsedData: IUploadCSV[] = result.data.map((i: any) => ({
          firstname: i.firstname,
          lastname: i.lastname,
          password: i.password,
          emailAddress: i.emailAdress,
        }));
        setTeachers((existing) => [...existing, ...parsedData]);
      });

    console.log(teachers);
  };

  const createTeachers = useMutation((data: IUploadCSV[]) =>
    sendApiRequest<IUploadCSV[]>("http://localhost:3200/users", "POST", data)
  );

  useEffect(() => {
    if (teachers.length > 1) {
      // console.log(teachers.length);
      createTeachers.mutate(teachers);
      setShowSuccess(true);
    }

    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 5000);

    return () => {
      clearTimeout(successTimeout);
    };
  }, [teachers]);

  const CSVContent = () => {
    return (
      <div
        className="bg-green-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold"></strong>
        <span className="block sm:inline text-center">
          The CSV file was uploaded successfully.
        </span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    );
  };

  return (
    <div className="flex-1 p-4 w-full md:w-1/2">
      <div className="relative max-w-md w-full">
        <div className="absolute top-1 left-2 inline-flex items-center p-2"></div>
      </div>
      <div className="bg-slate-300 border rounded shadow-2xl col-span-6 md:col-span-6 p-4">
        <h1 className="text-center text-3xl mb-4">
          You can upload your csv file here
        </h1>
        {/* Form for file upload begins here */}

        {showSuccess && <CSVContent />}
        <div
          className={`flex items-center justify-center w-full ${
            isHightlighted ? "border-green-600 bg-green-600" : "border-red-800"
          }`}
          onDragEnter={() => {
            setIsHighlighted(true);
          }}
          onDragLeave={() => {
            setIsHighlighted(false);
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={onDropFileHandler}
        >
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-200 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        {/* Form for file upload ends here */}
      </div>
    </div>
  );
};

export default UploadContent;
