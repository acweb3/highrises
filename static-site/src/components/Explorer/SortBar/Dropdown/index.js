import * as S from 'components/Explorer/SortBar/Dropdown/Dropdown.styled';

export const Dropdown = ({ name, isActive, onClick }) => {
    return (
        <S.Dropdown>
            <S.DropdownName isActive={isActive} onClick={onClick}>
                {name}
            </S.DropdownName>
        </S.Dropdown>
    );
};
