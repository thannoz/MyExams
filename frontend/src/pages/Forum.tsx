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
    </div>
  );
};

export default Forum;
