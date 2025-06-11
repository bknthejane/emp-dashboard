import { createStyles, css} from 'antd-style';

export const useStyles = createStyles({
    Title: css`
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);

    `,
    Container: css`
        background-color: #f2f2f2;
        border: 1px solid gray;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 5rem;
    `,
    Form: css`
        align-items: center;
        justify-content: center;
        margin-top: 2.5rem;
        margin-right: 1rem;
    `,
    Button: css`
        background-color: gray;
        postion: absolute;
        top: 50%;
        left: 30%;
        transform: translate(-50%, -50%);
        margin-top: 1.5rem;
    `,
})