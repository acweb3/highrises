import theDrakeSrc from 'assets/images/the-drake.png';
import { Drone } from 'components/Intent/Drone';
import { Hero } from 'components/Intent/Hero';
import { How } from 'components/Intent/How';
import * as S from 'components/Intent/Intent.styled';
import { Message } from 'components/Intent/Message';

export const Intent = () => {
    return (
        <S.Intent>
            <Hero />
            <Message />
            <How />
            <Drone />
            <div>
                <S.TheDrake src={theDrakeSrc} />
            </div>
        </S.Intent>
    );
};
