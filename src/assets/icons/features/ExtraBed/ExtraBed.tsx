import { ContainerForFeatures } from "../ContainerForFeatures";

interface IProps {
  littleIcon?: boolean;
}

export const ExtraBed = (props: IProps) => {
  return (
    <ContainerForFeatures littleIcon={props.littleIcon}>
      <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 21" width="25" height="21">
	
	<path id="форма 1" fill="#3f260a" d="m6 11c0 0-2.5-5.7-5-3-2.5 2.7 2.2 8.5 3 9 0.8 0.5 13 0.7 17 0 4-0.7 4-7.5 4-9 0-1.5-4.2-1-5 3-1.5-1-8.8-2.3-14 0z"/>
	<path id="форма 2" fill="#3f260a" d="m18 9l5-5c0 0-0.9-2.5-4-3-3.1-0.5-12.6-0.5-13 0-0.4 0.5-1.3-0.6-4 4 1.2 1.8 2.9 2.1 5 4 4.3 0.5 11 0 11 0z"/>
	<path id="Слой 5" fill="#3f260a" d="m20 20c-0.2-0.9 0.1-1.6 1-2 0.4-0.2 0.6-0.2 1 0 0.6 0.2 0.8 0.4 1 1 0.2 0.4 0.2 0.6 0 1-0.2 0.6-0.4 0.8-1 1-0.4 0.2-0.6 0.2-1 0-0.6-0.2-0.8-0.4-1-1z"/>
	<path id="Слой 5 copy" fill="#3f260a" d="m2 20c-0.2-0.9 0.1-1.6 1-2 0.4-0.2 0.6-0.2 1 0 0.6 0.2 0.8 0.4 1 1 0.2 0.4 0.2 0.6 0 1-0.2 0.6-0.4 0.8-1 1-0.4 0.2-0.6 0.2-1 0-0.6-0.2-0.8-0.4-1-1z"/>
</svg>
    </ContainerForFeatures>
  );
};
