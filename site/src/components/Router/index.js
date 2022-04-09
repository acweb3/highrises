import { Paths } from 'components/Router/Paths';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Paths.Root />} />
                <Route path="/building/:tokenID" element={<Paths.Building />} />
                <Route
                    path="/building/:tokenID/*"
                    element={<Navigate to="/" />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};
