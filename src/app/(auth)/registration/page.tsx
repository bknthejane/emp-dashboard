'use client';
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useStyles } from './style/style';
import { useUserActions, useUserState } from '@/providers/authProvider';
import { IUser } from '@/providers/authProvider/context';



const Registration: React.FC = () => {
    const { styles } = useStyles();
    const {registerUser} = useUserActions()
    const {isPending, isError} = useUserState();

    if(isPending){
        return( <div>Loading...</div>)
    }
    if(isError){
        return( <div>Error registering user</div>)
    }

    const onFinish: FormProps<IUser>['onFinish'] = (values) => {
        console.log('Success:', values);
        const newUser:IUser = {
            username: values.username,
            email: values.email,
            password: values.password,
        }
        registerUser(newUser)
        
        
    };

    const onFinishFailed: FormProps<IUser>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className={styles.Container}>
                <h1 className={styles.Title}>Registration</h1>
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
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder='Enter your username'/>
                    </Form.Item>

                    <Form.Item<IUser>
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder='Enter your email'/>
                    </Form.Item>

                    <Form.Item<IUser>
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder='Choose a password'/>
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

export default Registration;