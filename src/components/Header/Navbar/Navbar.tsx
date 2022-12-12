import { Menu, NavbarContainer } from '@components/Header/Navbar/Navbar.styles';
import { Dropdown } from '@components/Header/Dropdown/Dropdown';
import NavbarData from '@constants/Navbar';
import { MenuItem } from '@components/Header/Navbar/MenuItem/MenuItem';

const Navbar = () => {
    return (
        <NavbarContainer>
            <Menu>
                {NavbarData.map((item) => {
                    if (item.groups !== undefined) {
                        return (
                            <Dropdown
                                name={item.name}
                                to={item.to}
                                groups={item.groups}
                                note={item.note ? item.note : undefined}
                                key={item.name}
                            />
                        );
                    }
                    return <MenuItem {...item} key={item.name} />;
                })}
            </Menu>
        </NavbarContainer>
    );
};

export { Navbar };
