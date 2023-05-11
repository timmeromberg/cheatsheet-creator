import Button, { ButtonSize } from "./Button";
import { Cheatsheet } from "../../domain/Cheatsheet";

interface SaveCheatsheetDataButtonProps {
  cheatsheet: Cheatsheet;
}

const CHEATSHEET_FILE_NAME = "cheatsheet.json";

const SaveCheatsheetDataButton = ({
  cheatsheet,
}: SaveCheatsheetDataButtonProps): JSX.Element => {
  const saveCheatsheetData = () => {
    const jsonString = JSON.stringify(cheatsheet);
    const data = new Blob([jsonString], {
      type: "application/json;charset=utf-8",
    });
    const url = URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.download = CHEATSHEET_FILE_NAME;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      size={ButtonSize.BIG}
      onClick={() => saveCheatsheetData()}
      label={"Save cheatsheet"}
    />
  );
};

export default SaveCheatsheetDataButton;
