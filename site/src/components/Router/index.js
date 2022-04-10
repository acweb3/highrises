import { ContextFAB } from 'components/ContextFAB';
import { Countdown } from 'components/Countdown';
import { Nav } from 'components/Nav';
import { Paths } from 'components/Router/Paths';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Countdown />
            <ContextFAB />
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
