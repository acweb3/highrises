import * as S from 'components/Explorer/Masthead/Dropdown/Dropdown.styled';

export const Dropdown = ({ name, isActive, onClick }) => {
    return (
        <S.Dropdown>
            <S.DropdownName isActive={isActive} onClick={onClick}>
                {name}
            </S.DropdownName>
        </S.Dropdown>
    );
};
