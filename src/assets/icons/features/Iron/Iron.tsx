import { ContainerForFeatures } from "../ContainerForFeatures";

interface IProps {
  littleIcon?: boolean;
}

export const Iron = (props: IProps) => {
  return (
    <ContainerForFeatures littleIcon={props.littleIcon}>
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 9L21 17H1C1 12.5815 4.5815 9 9 9H20ZM20 9L19 1H7M7.5 13H8.5M11.5 13H12.5M15.5 13H16.5"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ContainerForFeatures>
  );
};
