import html2canvas from "html2canvas";

const downloadComponentAsImage = async (id: string) => {
  try {
    const KEYBOARD_SHORTCUTS_CHEATSHEET_IMAGE_FILE_NAME =
      "keyboard-shortcuts-cheatsheet.png";
    const targetWidth = 1720;
    const targetHeight = 640;

    const elementToCapture = document.getElementById(id);
    if (!elementToCapture) {
      console.error(`Element with id  not found`);
      return;
    }

    // Clone the element and apply the desired resolution
    const clonedElement = elementToCapture.cloneNode(true) as HTMLElement;
    clonedElement.style.width = `${targetWidth}px`;
    clonedElement.style.height = `${targetHeight}px`;
    clonedElement.style.position = "absolute";
    clonedElement.style.left = "-9999px";

    const keys = Array.from(
      clonedElement.getElementsByClassName("key")
    ) as HTMLElement[];
    keys.forEach((key) => {
      key.style.boxShadow = "none";
    });

    document.body.appendChild(clonedElement);
    const canvas = await html2canvas(clonedElement, {
      windowWidth: targetWidth,
      windowHeight: targetHeight,
    });
    const imgData = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = KEYBOARD_SHORTCUTS_CHEATSHEET_IMAGE_FILE_NAME;
    link.click();

    // Remove the cloned element from the document
    document.body.removeChild(clonedElement);
  } catch (err) {
    console.error(err);
  }
};

export default downloadComponentAsImage;
