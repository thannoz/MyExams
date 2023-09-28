import UploadContent from "components/Upload/UploadContent";
import NavbarHeader from "./NavbarHeader";

const Upload = () => {
  return (
    <div>
      <NavbarHeader content={<UploadContent />} />
    </div>
  );
};

export default Upload;
