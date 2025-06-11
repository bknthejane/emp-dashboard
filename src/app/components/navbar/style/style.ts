import { createStyles, css } from 'antd-style';

export const useStyles = createStyles({
  Navbar: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 2rem;        /* internal space (pushes content down inside the navbar) */
    height: 80px;                /* sets the height of the navbar */
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: #fff;
    border-bottom: 1px solid #e8e8e8;
    position: relative;          /* or 'fixed' if you want it to stay on top while scrolling */
  `,
  Logo: css`
    flex: 1;
    li {
      list-style: none;
      font-weight: bold;
      font-size: 20px;
    }
  `,
  Tabs: css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `,
});
