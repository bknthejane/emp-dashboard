'use client'
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useStyles } from './style/style';
import { useUserActions } from '@/providers/authProvider';
import { IUser } from '@/providers/authProvider/context';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
    const { styles } = useStyles();
    const {loginUser} = useUserActions();
    // const {isPending, isSuccess, user} = useUserState();
    const router = useRouter();


    const onFinish: FormProps<IUser>['onFinish'] = (values) => {
        console.log('Success:', values);

        const userDetails: IUser = {
            username: values.username,
            password: values.password
        }

        loginUser(userDetails);
        router.push('/')
    };

    const onFinishFailed: FormProps<IUser>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className={styles.Container}>
                <h1 className={styles.Title}>Login</h1>
                <Form
                    className={styles.Form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<IUser>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<IUser>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button className={styles.Button} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default Login;