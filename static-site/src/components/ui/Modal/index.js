import { DesktopMastheadClose } from 'components/Explorer/Masthead/Masthead.styled';
import { StoryCopy } from 'components/Explorer/Masthead/Story/Story.styled';
import { BlurLoader } from 'components/ui/BlurLoader';
import * as S from 'components/ui/Modal/Modal.styled';
import { useActiveHighriseContext } from 'contexts/ActiveHighrise';
import { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'modal';

export const Modal = () => {
    const [isShowing, setIsShowing] = useState(false);
    const { highrises } = useActiveHighriseContext();
    const exampleHighrise = highrises[0];
    const book = exampleHighrise.products[0];

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
                    <DesktopMastheadClose
                        css={`
                            & {
                                fill: #3b5d78 !important;
                            }
                        `}
                    />
                </div>

                <S.ModalImageWrapper>
                    <BlurLoader blurSrc={book.blurSrc} src={book.productSrc} />
                </S.ModalImageWrapper>
                {/* 
                <S.ModalImageWrapper noShowMobile>
                    <BlurLoader
                        blurSrc={book.blur2Src}
                        src={book.product2Src}
                    />
                </S.ModalImageWrapper> */}

                <StoryCopy
                    css={`
                        text-align: center;
                        font-size: 1.5rem;
                        line-height: 2rem;
                        margin-top: 4px;
                    `}
                >
                    <p>Available now!</p>
                    <p>Highrises Art Deco</p>
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
                    <a
                        href="https://heyzine.com/flip-book/f867a7dd46.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <S.ModalButton>Preview the book</S.ModalButton>
                    </a>

                    <a
                        href="https://www.hythacg.com/highrises-store-2/highrisesbook"
                        target="_blank"
                        rel="noopener noreferrer"
                        css={`
                            margin-top: 8px;
                        `}
                    >
                        <S.ModalButton>Order now</S.ModalButton>
                    </a>
                </div>
            </S.Modal>
        </S.ModalBackground>
    );
};
