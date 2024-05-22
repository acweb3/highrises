import { MastheadClose } from 'components/Explorer/Masthead/Masthead.styled';
import { StoryCopy } from 'components/Explorer/Masthead/Story/Story.styled';
import { Header } from 'components/ui/Header';
import * as S from 'components/ui/Modal/Modal.styled';
import { StaticImage } from 'gatsby-plugin-image';
import { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'modal';

export const ModalContent = ({ isModal = true }) => {
    return (
        <div>
            <a
                href="https://www.hythacg.com/highrises-store-2/highrisesbook"
                target="_blank"
                rel="noopener noreferrer"
                css={`
                    margin-top: 8px;
                    padding: 0 16px;
                    display: block;
                `}
            >
                <StaticImage
                    src={'../../../assets/images/book.webp'}
                    placeholder="blurred"
                    alt=""
                />
            </a>

            <StoryCopy
                css={
                    isModal
                        ? `
                    text-align: center;
                    font-size: 1.5rem;
                    line-height: 2rem;
                    margin-top: 4px;
                `
                        : `
                    text-align: center;
                `
                }
            >
                {isModal && <p>Available now!</p>}
                {isModal ? (
                    <p>Highrises Art Deco</p>
                ) : (
                    <Header
                        style={{
                            color: '#3b5d78',
                            marginTop: '16px',
                            marginBottom: '8px',
                        }}
                    >
                        Highrises Art Deco
                    </Header>
                )}
                <p>Oversize 10"x15" coffee table book</p>
            </StoryCopy>

            <div
                css={`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                `}
            >
                {isModal && (
                    <a
                        href="https://heyzine.com/flip-book/f867a7dd46.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        css={`
                            margin-bottom: 8px;
                        `}
                    >
                        <S.ModalButton>Preview the book</S.ModalButton>
                    </a>
                )}

                <a
                    href="https://www.hythacg.com/highrises-store-2/highrisesbook"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <S.ModalButton>Order now</S.ModalButton>
                </a>
            </div>
        </div>
    );
};

export const Modal = () => {
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        setIsShowing(!localStorage.getItem(LOCAL_STORAGE_KEY));
    }, []);

    if (!isShowing) {
        return null;
    }

    return (
        <S.ModalBackground>
            <S.Modal>
                <div
                    css={`
                        cursor: pointer;
                        padding: 8px;

                        margin: 0 -8px 0 auto;
                    `}
                    onClick={() => {
                        setIsShowing(false);
                        localStorage.setItem(LOCAL_STORAGE_KEY, true);
                    }}
                >
                    <MastheadClose
                        css={`
                            & {
                                fill: #3b5d78 !important;
                            }
                        `}
                    />
                </div>

                <ModalContent />
            </S.Modal>
        </S.ModalBackground>
    );
};
