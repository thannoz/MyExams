export const extractTimePortion = (examTime: string): string => {
  try {
    const newExamTimeObj = new Date(examTime);
    const timePortion = newExamTimeObj.toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return timePortion;
  } catch (error: any) {
    // Handle invalid date strings gracefully
    console.error(`Error parsing date: ${error.message}`);
    return "Invalid Time";
  }
};

export const extractDatePortion = (dateString: string): string => {
  const dateObj = new Date(dateString);
  const formattedDate = dateObj
    .toLocaleDateString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, ".");

  return formattedDate;
};
