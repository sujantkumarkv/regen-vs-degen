/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import Link from "next/link";
import { useMemo } from "react";


type Props = {


  isLink?: boolean;

  id?: string;
};

const GitcoinLogo = ({


  isLink = true,

  id = "",
}: Props) => {

  const markup = useMemo(
    () => (null),
    [ id]
  );

  if (!isLink) return markup;
  return (
    <Link href="/" passHref>
      <a aria-label="logo">{markup}</a>
    </Link>
  );
};

export default GitcoinLogo;
