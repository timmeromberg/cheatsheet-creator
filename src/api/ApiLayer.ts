import {
  KeyboardLayout,
  LayoutKeyHeight,
  LayoutKeyWidth,
} from "../domain/KeyboardLayout";

export default class ApiLayer {
  fetchKeyboardLayout = (): KeyboardLayout => {
    const ONE_FOURTH_OF_A_KEY_DIVIDER_DISTANCE = 4;
    const ONE_KEY_DIVIDER_DISTANCE = 1;

    return {
      layoutColumns: [
        {
          layoutRows: [
            {
              layoutKeys: [
                { id: "Esc", label: "Esc", grow: 2 },
                {},
                { id: "F1", label: "F1" },
                { id: "F2", label: "F2" },
                { id: "F3", label: "F3" },
                { id: "F4", label: "F4" },
                {},
                { id: "F5", label: "F5" },
                { id: "F6", label: "F6" },
                { id: "F7", label: "F7" },
                { id: "F8", label: "F8" },
                {},
                { id: "F9", label: "F9" },
                { id: "F10", label: "F10" },
                { id: "F11", label: "F11" },
                { id: "F12", label: "F12" },
              ],
            },
            {
              layoutKeys: [{ size: ONE_FOURTH_OF_A_KEY_DIVIDER_DISTANCE }],
            },
            {
              layoutKeys: [
                { id: "~", label: "~" },
                { id: "1", label: "1" },
                { id: "2", label: "2" },
                { id: "3", label: "3" },
                { id: "4", label: "4" },
                { id: "5", label: "5" },
                { id: "6", label: "6" },
                { id: "7", label: "7" },
                { id: "8", label: "8" },
                { id: "9", label: "9" },
                { id: "0", label: "0" },
                { id: "-", label: "-" },
                { id: "+", label: "+" },
                {
                  id: "BkS",
                  label: "BkS",
                  grow: 2,
                  width: LayoutKeyWidth.DOUBLE,
                },
              ],
            },
            {
              layoutKeys: [
                { id: "Tab", label: "Tab", grow: 2 },
                { id: "Q", label: "Q" },
                { id: "W", label: "W" },
                { id: "E", label: "E" },
                { id: "R", label: "R" },
                { id: "T", label: "T" },
                { id: "Y", label: "Y" },
                { id: "U", label: "U" },
                { id: "I", label: "I" },
                { id: "O", label: "O" },
                { id: "P", label: "P" },
                { id: "[", label: "[" },
                { id: "]", label: "]" },
                { id: "\\", label: "\\", grow: 2 },
              ],
            },
            {
              layoutKeys: [
                { id: "Caps", label: "Caps", grow: 2 },
                { id: "A", label: "A" },
                { id: "S", label: "S" },
                { id: "D", label: "D" },
                { id: "F", label: "F" },
                { id: "G", label: "G" },
                { id: "H", label: "H" },
                { id: "J", label: "J" },
                { id: "K", label: "K" },
                { id: "L", label: "L" },
                { id: ";", label: ";" },
                { id: "'", label: "'" },
                { id: "Enter", label: "Enter", grow: 2 },
              ],
            },
            {
              layoutKeys: [
                { id: "Left_Shift", label: "Shift", grow: 2 },
                { id: "Z", label: "Z" },
                { id: "X", label: "X" },
                { id: "C", label: "C" },
                { id: "V", label: "V" },
                { id: "B", label: "B" },
                { id: "N", label: "N" },
                { id: "M", label: "M" },
                { id: "<", label: "<" },
                { id: ">", label: ">" },
                { id: "?/", label: "?/" },
                { id: "Right_Shift", label: "Shift", grow: 2 },
              ],
            },
            {
              layoutKeys: [
                { id: "Left_Ctrl", label: "Ctrl", grow: 2 },
                { id: "Left_Opt", label: "\u{263A}" },
                { id: "Left_Alt", label: "Alt", grow: 2 },
                { id: "Spacebar", label: "Spacebar", grow: 20 },
                { id: "Right_Alt", label: "Alt", grow: 2 },
                { id: "Right_Opt", label: "" },
                { id: "RightCtrl", label: "Ctrl", grow: 2 },
              ],
            },
          ],
        },
        {
          layoutRows: [
            {
              layoutKeys: [
                { size: 1 },
                { id: "Prt", label: "Prt" },
                { id: "Scr", label: "Scr" },
                { id: "Ps", label: "Ps" },
                { size: 1 },
              ],
            },
            {
              layoutKeys: [{ size: ONE_FOURTH_OF_A_KEY_DIVIDER_DISTANCE }],
            },
            {
              layoutKeys: [
                { size: 1 },
                { id: "Ins", label: "Ins" },
                { id: "Home", label: "Ho." },
                { id: "Pgu", label: "Pgu" },
                { size: 1 },
              ],
            },
            {
              layoutKeys: [
                { size: 1 },
                { id: "Del", label: "Del" },
                { id: "End", label: "End" },
                { id: "Pgd", label: "Pgd" },
                { size: 1 },
              ],
            },
            {
              layoutKeys: [{ size: ONE_KEY_DIVIDER_DISTANCE }],
            },
            {
              layoutKeys: [
                { size: 1 },
                { id: "ArrowKeys_Up", label: "\u{2191}" },
                { size: 1 },
              ],
            },
            {
              layoutKeys: [
                { size: 1 },
                { id: "ArrowKeys_Left", label: "\u{2190}" },
                { id: "ArrowKeys_Down", label: "\u{2193}" },
                { id: "ArrowKeys_Right", label: "\u{2192}" },
                { size: 1 },
              ],
            },
          ],
        },
        {
          layoutRows: [
            {
              layoutKeys: [{ size: 1 }],
            },
            {
              layoutKeys: [{ size: 4 }],
            },
            {
              layoutKeys: [
                { id: "Num", label: "Num" },
                { id: "/", label: "/" },
                { id: "*", label: "*" },
                { id: "Numpad_-", label: "-" },
              ],
            },
            {
              layoutKeys: [
                { id: "Numpad_7", label: "7" },
                { id: "Numpad_8", label: "8" },
                { id: "Numpad_9", label: "9" },
                { id: "Numpad_+", label: "+", height: LayoutKeyHeight.DOUBLE },
              ],
            },
            {
              layoutKeys: [
                { id: "Numpad_4", label: "4" },
                { id: "Numpad_5", label: "5" },
                { id: "Numpad_6", label: "6" },
              ],
            },
            {
              layoutKeys: [
                { id: "Numpad_1", label: "1" },
                { id: "Numpad_2", label: "2" },
                { id: "Numpad_3", label: "3" },
                {
                  id: "Numpad_Ent",
                  label: "Ent",
                  height: LayoutKeyHeight.DOUBLE,
                },
              ],
            },
            {
              layoutKeys: [
                { id: "Numpad_0", label: "0", width: LayoutKeyWidth.DOUBLE },
                { id: "Numpad_Del", label: "Del" },
              ],
            },
          ],
        },
      ],
    };
  };
}
