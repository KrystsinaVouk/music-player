import React, { ReactNode, useRef } from "react";
import { useFileUpload } from "./useFileUpload";

interface FileUploadProps {
  setFile: Function;
  accept: string;
  children: ReactNode;
}

const FileUpload: React.FC<FileUploadProps> = ({setFile, accept, children}) => {

  const {ref, onChange} = useFileUpload(setFile);

  return (
    <div onClick={()=> ref.current.click()}>
      <input
        ref={ref}
        accept={accept}
        type={'file'}
        style={{display:'none'}}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default FileUpload;