import { useToggle } from '@uidotdev/usehooks';
import { Outlet } from 'react-router-dom';
import { useDeviceSize } from 'src/common/hooks/useDeviceSize';
import { Header } from 'src/layout/header/Header';
import { MobileHeader } from 'src/layout/header/MobileHeader';
import { SideNav } from 'src/layout/header/components/SideNav';
import cx from 'classnames';
import {
  mainContent,
  navOpen,
  mainWrapper
} from 'src/layout/layout.module.css';

export const Layout = () => {
  const { isSmallDevice } = useDeviceSize();
  const [on, toggle] = useToggle(false);

  return (
    <>
      {isSmallDevice ? <MobileHeader onToggle={toggle} /> : <Header />}
      <SideNav isOpen={on} onClose={toggle} />
      <main className={cx(mainWrapper, on && navOpen)}>
        <div className={mainContent}>
          <Outlet />
        </div>
      </main>
    </>
  );
};
