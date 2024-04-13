import * as S from "./styles";

interface PageProps {
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children }) => (
  <S.Container>{children}</S.Container>
);
