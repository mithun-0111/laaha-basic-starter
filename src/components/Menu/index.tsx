import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

const Menu: FC = () => {

  const t = useTranslations();

  return (
    <ul className="flex items-center">
      <li>
        <Link href="/">{'HOME'}</Link>
      </li>
      <li>
        <Link href="/about">{'ABOUT'}</Link>
      </li>
    </ul>
  );
};

export default Menu;
