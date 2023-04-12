import { KeyboardLayout } from "../domain/KeyboardLayout";

export default class ApiLayer {
  fetchKeyboardLayout = (): KeyboardLayout => {
    return {
      layoutRows: [
        {
          layoutKeys: [
            { label: "Esc", grow: 2 },
            {},
            { label: "F1" },
            { label: "F2" },
            { label: "F3" },
            { label: "F4" },
            {},
            { label: "F5" },
            { label: "F6" },
            { label: "F7" },
            { label: "F8" },
            {},
            { label: "F9" },
            { label: "F10" },
            { label: "F11" },
            { label: "F12" },
          ],
        },
        {
          layoutKeys: [{ grow: 1 }],
        },
        {
          layoutKeys: [
            { label: "~" },
            { label: "1" },
            { label: "2" },
            { label: "3" },
            { label: "4" },
            { label: "5" },
            { label: "6" },
            { label: "7" },
            { label: "8" },
            { label: "9" },
            { label: "0" },
            { label: "-" },
            { label: "+" },
            { label: "BkS", grow: 2 },
          ],
        },
        {
          layoutKeys: [
            { label: "Tab", grow: 2 },
            { label: "Q" },
            { label: "W" },
            { label: "E" },
            { label: "R" },
            { label: "T" },
            { label: "Y" },
            { label: "U" },
            { label: "I" },
            { label: "O" },
            { label: "P" },
            { label: "[" },
            { label: "]" },
            { label: "\\", grow: 2 },
          ],
        },
        {
          layoutKeys: [
            { label: "Caps", grow: 2 },
            { label: "A" },
            { label: "S" },
            { label: "D" },
            { label: "F" },
            { label: "G" },
            { label: "H" },
            { label: "J" },
            { label: "K" },
            { label: "L" },
            { label: ";" },
            { label: "'" },
            { label: "Enter", grow: 2 },
          ],
        },
        {
          layoutKeys: [
            { label: "Shift", grow: 2 },
            { label: "Z" },
            { label: "X" },
            { label: "C" },
            { label: "V" },
            { label: "B" },
            { label: "N" },
            { label: "M" },
            { label: "<" },
            { label: ">" },
            { label: "?/" },
            { label: "Shift", grow: 2 },
          ],
        },
        {
          layoutKeys: [
            { label: "Ctrl", grow: 2 },
            { label: "" },
            { label: "Alt", grow: 2 },
            { label: "Spacebar", grow: 20 },
            { label: "Alt gr", grow: 2 },
            { label: "" },
            { label: "Ctrl", grow: 2 },
          ],
        },
      ],
    };
  };
}
