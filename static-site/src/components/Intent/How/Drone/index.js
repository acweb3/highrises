import * as S from 'components/Intent/How/Drone/Drone.styled';
import { StaticImage } from 'gatsby-plugin-image';

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
                    <StaticImage
                        src={'../../../../assets/images/drone.webp'}
                        alt=""
                    />
                </S.DroneSticky>
            </S.DroneRelative>
        </S.DroneContainer>
    );
};
