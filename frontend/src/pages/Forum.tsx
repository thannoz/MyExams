import { useUser } from "@clerk/clerk-react";
import ForumWrapper from "../components/Forum/ForumContent";
import NavbarHeader from "./NavbarHeader";
import ForumContent from "../components/Forum/ForumContent";

const Forum = () => {
  const user = useUser();

  return (
    <div>
      <NavbarHeader content={<ForumContent />} />;
    </div>
  );
};

export default Forum;
