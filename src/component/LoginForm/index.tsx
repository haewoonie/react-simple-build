import React from "react";
import { Form, Input, Button } from "antd";
import { LoginUser } from "../../model/admin";
import { useGlobalStore } from "../../store";

const { Item } = Form;
const { Password } = Input;

interface LoginProps {
  nextStep: string; // 登陆成功跳转地址
  onLogin: (valuse: LoginUser) => boolean; // 登录事件
}

// 用户登录数据持久化

const LoginFormComponent = (props: LoginProps) => {
  const { nextStep, onLogin } = props;

  const [form] = Form.useForm<LoginUser>();

  const onSubmit = async () => {
    form.validateFields().then((value) => {
      const flag: boolean = onLogin(value);
      if (flag) {
        useGlobalStore.getState().login(value);
        window.location.href = nextStep;
      }
    });
  };

  return (
    <>
      <Form form={form}>
        <Item name="username" label="用户名" rules={[{ required: true }]}>
          <Input></Input>
        </Item>
        <Item name="password" label="密码" rules={[{ required: true }]}>
          <Password></Password>
        </Item>
      </Form>
      <div>
        <Button
          type="primary"
          style={{
            marginTop: "10px",
            width: "100%",
          }}
          onClick={onSubmit}
        ></Button>
      </div>
    </>
  );
};

const LoginForm = React.memo(LoginFormComponent);
export default LoginForm;
