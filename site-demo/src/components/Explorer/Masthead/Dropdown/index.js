import * as S from 'components/Explorer/Masthead/Dropdown/Dropdown.styled';
import { useEffect, useState } from 'react';

export const Dropdown = ({
    activeSort,
    setActiveSort,
    name,
    sortKey,
    options,
}) => {
    const [activeOption, setActiveOption] = useState(name);

    useEffect(() => {
        if (activeSort?.sortKey !== sortKey) {
            setActiveOption(name);
        }
    }, [activeSort, sortKey, name]);

    return (
        <S.Dropdown
            isActive={sortKey === activeSort?.sortKey}
            defaultValue={name}
            key={name}
            value={activeOption}
            onChange={(e) => {
                const option = options[e.target.value];
                setActiveOption(e.target.value);
                setActiveSort({
                    sortKey,
                    sort: option.sort,
                });
            }}
        >
            <option value={name} disabled>
                {name}
            </option>

            {Object.entries(options).map(([optionKey, option]) => (
                <option key={option.value} value={optionKey}>
                    {option.value}
                </option>
            ))}
        </S.Dropdown>
    );
};
