import { ContainerForFeatures } from "../ContainerForFeatures";

interface IProps {
  littleIcon?: boolean;
}

export const Terrace = (props: IProps) => {
  return (
    <ContainerForFeatures littleIcon={props.littleIcon}>
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.46606 13.7891H6.37443" stroke="#583711" strokeWidth="1.2749" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.25098 13.7891L3.07568 17.3535" stroke="#583711" strokeWidth="1.2749" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.44629 15.438L7.57776 17.297" stroke="#583711" strokeWidth="1.2749" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.637451 10.8875L2.86056 15.438" stroke="#583711" strokeWidth="1.2749" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.8606 15.438H7.8088" stroke="#583711" strokeWidth="1.2749" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.5339 13.7891H13.6255" stroke="#583711" strokeWidth="1.2749" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.749 13.7891L16.9243 17.3535" stroke="#583711" strokeWidth="1.2749" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.5536 15.438L12.4221 17.297" stroke="#583711" strokeWidth="1.2749" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.3625 10.8875L17.1394 15.438" stroke="#583711" strokeWidth="1.2749" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.1394 15.438H12.1912" stroke="#583711" strokeWidth="1.2749" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.99194 17.0867V6.9834" stroke="#583711" strokeWidth="1.2749" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99205 0.646729C14.3905 0.646729 17.9602 2.82095 17.9602 5.4963C17.9602 6.32073 14.3905 6.9835 9.99205 6.9835C5.59365 6.9835 2.02393 6.32073 2.02393 5.4963C2.02393 2.82095 5.59365 0.646729 9.99205 0.646729ZM8.11909 3.53801C7.96427 3.52819 7.75856 3.55067 7.49625 3.64515C6.862 3.88641 6.31712 4.46425 5.94872 4.96759C5.74079 5.25168 5.34193 5.31342 5.05784 5.10549C4.77375 4.89757 4.71201 4.49871 4.91993 4.21461C5.33163 3.65212 6.0601 2.82497 7.04962 2.45103L7.05782 2.44793L7.05784 2.44799C7.46287 2.30126 7.84544 2.2432 8.19976 2.26566C8.55111 2.28794 8.81787 2.59082 8.7956 2.94217C8.77332 3.29351 8.47044 3.56028 8.11909 3.53801Z" fill="#583711"/>
      </svg>

      {/* <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6987 20.0361V10.1812"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.16699 8.73039C3.16699 6.12079 6.98917 4 11.6986 4C16.4081 4 20.2303 6.12079 20.2303 8.73039"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.2303 8.73022C20.2303 9.53439 16.4081 10.1809 11.6986 10.1809C6.98917 10.1809 3.16699 9.53439 3.16699 8.73022"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.8186 7.84735C7.23665 7.32701 7.91919 6.6411 8.78942 6.34151C9.14775 6.22325 9.46342 6.18383 9.73643 6.1996"
          stroke="#583711"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M6.85278 16.5552H7.82539"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.62236 16.5552L4.29321 20.3176"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.9021 18.2954L9.11359 20.2577"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.68262 13.4922L4.06295 18.2955"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.06299 18.2954H9.36115"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5617 16.5552H15.5891"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.792 16.5552L19.1211 20.3176"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5125 18.2954L14.301 20.2577"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.7319 13.4922L19.3516 18.2955"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.3516 18.2954H14.0535"
          stroke="#583711"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg> */}
    </ContainerForFeatures>
  );
};
