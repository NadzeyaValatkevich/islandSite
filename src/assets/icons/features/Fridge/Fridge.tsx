import { ContainerForFeatures } from "../ContainerForFeatures";

interface IProps {
  littleIcon?: boolean;
}

export const Fridge = (props: IProps) => {
  return (
    <ContainerForFeatures littleIcon={props.littleIcon}>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.75 0H5.25C4.00912 0 3 1.12125 3 2.5V8.75H7.5V5H9.75V8.75H21V2.5C21 1.12125 19.9909 0 18.75 0ZM9.75 16.25H7.5V10H3V22.5C3 23.8787 4.00912 25 5.25 25H18.75C19.9909 25 21 23.8787 21 22.5V10H9.75V16.25Z" fill="#3F260A"/>
      </svg>
      {/* <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8534 0H8.14678C6.75422 0 5.62134 1.13293 5.62134 2.52549V21.4745C5.62134 22.8671 6.75427 24 8.14678 24H15.8534C17.2459 24 18.3788 22.8671 18.3788 21.4745V2.52549C18.3789 1.13293 17.2459 0 15.8534 0ZM17.6132 21.4745C17.6132 22.4449 16.8238 23.2344 15.8534 23.2344H8.14678C7.17639 23.2344 6.38692 22.4449 6.38692 21.4745V9.75956H17.6132V21.4745ZM17.6132 8.99397H6.38697V2.52549C6.38697 1.55511 7.17644 0.765634 8.14678 0.765634H15.8534C16.8238 0.765634 17.6132 1.55511 17.6132 2.52549V8.99397Z"
          fill="#583711"
        />
        <path
          d="M8.26075 10.8757H7.49512V13.499H8.26075V10.8757Z"
          fill="#583711"
        />
        <path
          d="M8.26075 5.25464H7.49512V7.87787H8.26075V5.25464Z"
          fill="#583711"
        />
      </svg> */}
    </ContainerForFeatures>
  );
};
