import { Button, Form, Input } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import { message } from "antd";

export const Cadastro = () => {
  const [tag, setTag] = useState("");
  const [placa, setPlaca] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [cadastro, setCadastro] = useState([]);

  const onFinish = async () => {
    try {
      const response = await axios.post("http://localhost:5000/cadastro", {
        responsavel,
        placa,
        tag,
      });

      message.success("Cadastrado com sucesso!");
    } catch (error) {
      console.log("erro ao cadastrar o responsável", error);
    }
  };

  return (
    <>
      <h1>Cadastrar</h1>
      <Form name="Cadastro dos carros" onFinish={onFinish} layout="vertical">
        <Form.Item label="Responsável" name="responsavel">
          <Input
            placeholder="Digite o nome do responsável"
            style={{ width: "50%" }}
            value={responsavel}
            onChange={(e) => setResponsavel(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Placa do carro"
          name="placa"
          rules={[
            { required: true, message: "Por favor, digite a placa do carro!" },
          ]}
          style={{ width: "50%" }}
        >
          <Input
            placeholder="Digite a placa do carro"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Código da tag"
          name="tag"
          rules={[{ required: true, message: "Por favor, digite a TAG!" }]}
          style={{ width: "50%" }}
        >
          <Input
            placeholder="Digite a TAG"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Cadastrar
        </Button>
      </Form>
    </>
  );
};
