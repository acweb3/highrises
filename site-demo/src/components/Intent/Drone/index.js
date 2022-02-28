import { ViewScroll } from '../../ui/ViewScroll';
import droneSrc from 'assets/images/drone.png';
import * as S from 'components/Intent/Drone/Drone.styled';

export const Drone = () => {
    return (
        <S.DroneContainer
            threshold={0.4}
            animation={{
                before: `
                    transform: translateY(-50px);
                    transition: transform 1s, opacity 1s;
                `,
                after: `
                    transform: translateY(0);
                    opacity: 1;
                `,
            }}
        >
            <S.DroneRelative>
                <S.DroneSticky>
                    <S.Drone src={droneSrc} />
                </S.DroneSticky>
            </S.DroneRelative>
        </S.DroneContainer>
    );
};
