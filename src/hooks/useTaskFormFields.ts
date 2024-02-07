import { useRef, useState } from "react";

export const useTaskFormFields = () => {
  const [title, setTitle] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isValidImage, setIsValidImage] = useState<boolean>(false);
  const [fileTouched, setFileTouched] = useState<boolean>(false);
  const imageRef = useRef<HTMLInputElement>();

  const validExtensions = ["image/png", "image/jpg", "image/jpeg"];

  const handleImageChange = () => {
    setFileTouched(true);
    const file = imageRef.current?.files?.[0];
    if (file) {
      if (!validExtensions.includes(file.type)) {
        setIsValidImage(false);
        setImageUrl("");
        return;
      }
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
      setIsValidImage(true);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };


  const handleDueDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDueDate(e.target.value);
  };


  return { title, dueDate, handleTitleChange, handleDueDateChange, imageRef, imageUrl, isValidImage, fileTouched, handleImageChange };
}