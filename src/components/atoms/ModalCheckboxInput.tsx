import { makeStyles } from "../../styles/theme";
import { base } from "../../styles/base";
import { Tooltip } from "react-tooltip";
import { ColorHex } from "../../styles/colors.ts";

interface ModalCheckboxInputProps {
  value: boolean;
  onChange: (value: boolean) => void;
  tooltipText?: string;
  onImage: string;
  offImage: string;
}

const ModalCheckboxInput = ({
  value,
  onChange,
  tooltipText,
  onImage,
  offImage,
}: ModalCheckboxInputProps) => {
  const { cx, classes } = useStyles();

  const tooltipId = "checkbox_" + Math.random().toString(36).substr(2, 9);

  return (
    <div>
      <div
        data-tooltip-delay-show={300}
        data-tooltip-id={tooltipId}
        data-tooltip-content={tooltipText}
      >
        <img
          className={cx(classes.modalCheckboxInput)}
          src={value ? onImage : offImage}
          alt="checkbox"
          onClick={() => onChange(!value)}
        />
      </div>
      <Tooltip
        style={{ backgroundColor: ColorHex.MIDNIGHT_BLUE }}
        id={tooltipId}
      />
    </div>
  );
};

const useStyles = makeStyles()(() => ({
  modalCheckboxInput: {
    width: base(0.66),
    height: base(0.66),
  },
}));

export default ModalCheckboxInput;
