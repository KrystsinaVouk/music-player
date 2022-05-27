import React, { ReactNode, useRef } from "react";

interface FileUploadProps {
  setFile: Function;
  accept: string;
  children: ReactNode;
}

const FileUpload: React.FC<FileUploadProps> = ({setFile, accept, children}) => {
 const ref = useRef<HTMLInputElement>();
 const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files[0]);
 }

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