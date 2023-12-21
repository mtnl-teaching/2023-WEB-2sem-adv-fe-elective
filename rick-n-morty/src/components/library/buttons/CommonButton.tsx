import styles from "./CommonButton.module.css"

export interface CommonButtonProps {
  text: string;
  onClick: () => void;
}

const CommonButton = ({text, onClick}: CommonButtonProps) => {
  return (
      <button onClick={onClick} className={styles.button}>
        {text}
      </button>
  );
};

export default CommonButton;