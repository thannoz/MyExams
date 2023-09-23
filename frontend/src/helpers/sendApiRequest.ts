type Method = "GET" | "POST" | "PUT" | "DELETE";

const returnCorrectRequest = (method: Method, data: unknown): RequestInit => {
  if (method === "GET") {
    return {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  return {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const sendApiRequest = async <T>(
  url: string,
  method: Method,
  data?: T
): Promise<T> => {
  const response = await fetch(url, returnCorrectRequest(method, data));

  if (!response.ok) {
    const message = `An error has occurred ${response.status}`;
    throw new Error(message);
  }

  return (await response.json()) as Promise<T>;
};
