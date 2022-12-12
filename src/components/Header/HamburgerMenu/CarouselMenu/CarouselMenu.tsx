import {
    Arrow,
    Button,
    CarouselContainer,
    CarouselContent,
    CarouselGroup,
    CarouselGroups,
    CarouselList,
    Navigation,
    Title
} from '@components/Header/HamburgerMenu/CarouselMenu/CarouselMenu.styles';
import { useCallback, useContext, useEffect, useState } from 'react';
import { HeaderContext } from '@contexts/HeaderContext';
import { ListElement } from '@components/Header/HamburgerMenu/CarouselMenu/ListElement/ListElement';

type DropdownProps = {
    name: string;
    to?: string;
    isDisabled?: boolean;
    note?: string;
};

type CarouselMenuProps = {
    title: string;
    width: string;
    groups: Array<DropdownProps[]>;
    isDisabled?: boolean;
};

const CarouselMenu = ({
    title,
    width: divWidth,
    groups,
    isDisabled: isDisabledCarousel = false
}: CarouselMenuProps) => {
    const { state } = useContext(HeaderContext);
    const [slide, setSlide] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        const onResize = () => {
            const windowWidth = window.innerWidth;
            setWidth(windowWidth);
        };

        onResize();
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    const changeSlide = useCallback((slide: number) => {
        setSlide((prev) => prev + slide);
    }, []);

    useEffect(() => {
        if (!state.isSelectedDropdown) setTimeout(() => setSlide(0), 200);
    }, [state.isSelectedDropdown]);

    return (
        <CarouselContainer style={{ width: divWidth, display: isDisabledCarousel ? 'none' : 'block' }}>
            <Navigation>
                <Button isDisabled={slide <= 0} onClick={() => changeSlide(-1)}>
                    <Arrow direction={90} />
                </Button>
                <Title>{title}</Title>
                <Button isDisabled={slide >= groups.length - 1} onClick={() => changeSlide(1)}>
                    <Arrow direction={-90} />
                </Button>
            </Navigation>
            <CarouselContent>
                <CarouselGroups style={{ transform: `translateX(${-(slide * width)}px)` }}>
                    {groups.map((group, i) => {
                        return (
                            <CarouselGroup style={{ width: `${width}px` }} key={i}>
                                <CarouselList>
                                    {group.map((item) => {
                                        const itemTo = item.to !== undefined ? item.to : undefined;
                                        return (
                                            <ListElement
                                                name={item.name}
                                                to={itemTo}
                                                note={item.note}
                                                isDisabled={item.isDisabled}
                                                key={item.name}
                                            />
                                        );
                                    })}
                                </CarouselList>
                            </CarouselGroup>
                        );
                    })}
                </CarouselGroups>
            </CarouselContent>
        </CarouselContainer>
    );
};

export { CarouselMenu };
