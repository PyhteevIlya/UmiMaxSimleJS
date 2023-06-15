//import { request } from '@umijs/max'

import FormElectronicsEdit from "@/components/FormElectronicsEdit";
import request from "@/utils/request";
import { Link, history } from "@umijs/max";
import { useModel } from "@umijs/max";
import { } from "@umijs/max";
import { Button, Form, Input, Select, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";

const DocsPage = () => {


  const { name, setName } = useModel("useUserModel");

  const formNextHandler = (data: any) => {
    setName(data.name);
    history.push('/userEdit2');

  }

  return (
    <div>
      <Form layout="inline" onFinish={formNextHandler} style={{ marginBottom: '20px' }}>
        <Form.Item name="name">
          <Input placeholder="Имя" />
        </Form.Item>
        <Button type="primary" htmlType="submit">Далее</Button>
      </Form>
    </div>
  );
};

export default DocsPage;
