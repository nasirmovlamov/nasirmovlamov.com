import {
  StyledHeader,
  StyledSideParagraph,
  StyledSubHeader,
} from '@styled-components/styled-components/styled-micro-components';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import nasirmovlamov3 from '../../../styles/media/images/nasirmovlamov3.jpg';
import { StyledPersonImage } from './aboutme.styled';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '@store/context/global.context';

type Props = {};

export const AboutMe = (props: Props) => {
  const { t } = useTranslation();
  const { lang } = useContext(GlobalContext);
  useEffect(() => {
    console.log(t);
  }, [lang]);

  return (
    <div className="flex flex-wrap  max-w-270 gap-5 justify-center sm:justify-between">
      <div className="flex flex-col flex-wrap max-w-lg md:order-1 order-2 ">
        <h1 className="mb-1 text-black dark:text-white text-5xl">{t('myName')}</h1>
        <h4 className="mb-1 text-black dark:text-white text-[18px]">{t('myJob')}</h4>
        <p className="text-black dark:text-white text-xs">
          <em>
            {/* {t('myEnthusiasm')} <br /> */}
            {t('hobby')} <br />
            <br />
          </em>
        </p>
      </div>

      <div className="flex md:order-2 order-1">
        <StyledPersonImage>
          <Image src={nasirmovlamov3} alt="image of Nasir Movlamov" />
        </StyledPersonImage>
      </div>
    </div>
  );
};
