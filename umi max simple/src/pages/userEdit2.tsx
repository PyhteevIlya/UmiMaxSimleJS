//import { request } from '@umijs/max'

import FormElectronicsEdit from "@/components/FormElectronicsEdit";
import request from "@/utils/request";
import { Link } from "@umijs/max";
import { useModel } from "@umijs/max";
import { } from "@umijs/max";
import { Button, Form, Input, Select, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";

const DocsPage = () => {
  const { name, setName } = useModel("useUserModel");
  
  const formNextHandler = () => {
    
  }


  return (
    <div>
      <div>Вы ввели имя {name}</div>
      <Form layout="inline" onFinish={formNextHandler} style={{ marginBottom: '20px' }}>
        <Form.Item name="email">
          <Input placeholder="E-mail" />
        </Form.Item>
        <Button type="primary" htmlType="submit">Далее</Button>
      </Form>
    </div>
  );
};

export default DocsPage;
