import Image from "next/image";

import * as S from "./styles";

export const HomeCover: React.FC = () => (
  <S.Container>
    <Image
      src="/images/backgrounds/cover.png"
      alt="Dedica, Vet Blur Cover"
      fill
    />
    <S.ImageBlur />
  </S.Container>
);
