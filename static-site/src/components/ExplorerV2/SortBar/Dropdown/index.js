import * as S from 'components/ExplorerV2/SortBar/Dropdown/Dropdown.styled';

export const Dropdown = ({ name, isActive, onClick }) => {
    return (
        <S.Dropdown>
            <S.DropdownName isActive={isActive} onClick={onClick}>
                {name}
            </S.DropdownName>
        </S.Dropdown>
    );
};
