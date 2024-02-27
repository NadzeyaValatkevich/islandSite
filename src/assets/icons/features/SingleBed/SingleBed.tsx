import { ContainerForFeatures } from "../ContainerForFeatures";

interface IProps {
  littleIcon?: boolean;
}

export const SingleBed = (props: IProps) => {
  return (
    <ContainerForFeatures littleIcon={props.littleIcon}>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1034_24869)">
        <g clipPath="url(#clip1_1034_24869)">
        <path d="M22.4375 2.20831H1.9375V12.4583H-0.625V18.8646V20.1458V22.7083H1.9375V20.1458H22.4375V22.7083H25V20.1458V18.8646V12.4583H22.4375V2.20831ZM7.0625 11.1771C7.0625 10.4705 7.63714 9.89581 8.34375 9.89581H16.0312C16.7379 9.89581 17.3125 10.4705 17.3125 11.1771C17.3125 11.8837 16.7379 12.4583 16.0312 12.4583H8.34375C7.63714 12.4583 7.0625 11.8837 7.0625 11.1771ZM4.5 4.77081H19.875V11.1771C19.875 9.05723 18.1511 7.33331 16.0312 7.33331H8.34375C6.22392 7.33331 4.5 9.05723 4.5 11.1771V4.77081Z" fill="#3F260A"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_1034_24869">
        <rect width="25" height="24" fill="white"/>
        </clipPath>
        <clipPath id="clip1_1034_24869">
        <rect width="25" height="25" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </ContainerForFeatures>
  );
};