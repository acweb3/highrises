import droneSrc from 'assets/images/drone.png';
import * as S from 'components/Intent/How/Drone/Drone.styled';

export const Drone = ({ className }) => {
    return (
        <S.DroneContainer
            className={className}
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
