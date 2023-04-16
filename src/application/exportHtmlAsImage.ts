import html2canvas from "html2canvas";

const KEYBOARD_SHORTCUTS_CHEATSHEET_IMAGE_FILE_NAME =
  "keyboard-shortcuts-cheatsheet.png";

const exportComponentAsImage = async (componentRef) => {
  try {
    const canvas = await html2canvas(componentRef.current as HTMLDivElement);

    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = KEYBOARD_SHORTCUTS_CHEATSHEET_IMAGE_FILE_NAME;
    link.click();
  } catch (err) {
    console.error(err);
  }
};

export default exportComponentAsImage;
