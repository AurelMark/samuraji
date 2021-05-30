import React, { useState } from "react";
import { Table } from "antd";
import { samurays } from "../data/samurays";
import { Button, Tag, Modal, Input } from "antd";

const { TextArea } = Input;

const Settings = () => {
  const [data, setData] = useState([...samurays]);
  const [values, setValues] = useState({
    name: "",
    descr: "",
    imgUrl: "",
    tags: "",
  });

  const columns = [
    {
      title: "Nazwa",
      dataIndex: "name",
    },
    {
      title: "Opis",
      dataIndex: "descr",
    },
    {
      title: "Tagi",
      dataIndex: "tags",
      render: (tags) => {
        return tags.map((el) => (
          <Tag color="blue" key={el}>
            {el}
          </Tag>
        ));
      },
    },
    {
      title: "działania",
      dataIndex: "actions",
      render: (text, record) => (
        <Button type="danger" onClick={() => deleteItem(record.id)}>
          Kasować
        </Button>
      ),
    },
  ];

  const deleteItem = (e) => {
    setData((oldValue) => oldValue.filter((el) => el.id !== e));
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    const words = values.tags.split(" ");
    setData((oldValue) => [
      ...oldValue,
      { ...values, tags: words, id: oldValue.length },
    ]);
    setIsModalVisible(false);
    setValues({
      name: "",
      descr: "",
      imgUrl: "",
      tags: "",
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const saveValue = (e) => {
    const { name, value } = e.target;
    setValues((oldValue) => ({ ...oldValue, [name]: value }));
  };


  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <Button type="primary" onClick={showModal}>
          Dodaj nowego samuraja
        </Button>
      </div>
      <Table
        columns={columns}
        pagination={{ pageSize: 5 }}
        dataSource={data.map((el, index) => ({ ...el, key: index }))}
      />
      <Modal
        title="Dodaj nowego samuraja"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            disabled={
              values.name.length === 0 ||
              values.descr.length === 0 ||
              values.imgUrl.length === 0 ||
              values.tags.length === 0
            }
            onClick={handleOk}
          >
            Zatwierdź
          </Button>,
          <Button key="back" onClick={handleCancel}>
            Anuluj
          </Button>,
        ]}
      >
        <Input
          placeholder="Nazwa"
          style={{ marginBottom: "10px" }}
          value={values.name}
          name="name"
          onChange={saveValue}
        />
        <TextArea
          placeholder="Opis"
          style={{ marginBottom: "10px" }}
          value={values.descr}
          name="descr"
          onChange={saveValue}
        />
        <Input
          placeholder="Podziel każde słowo na tagi ze spacją"
          style={{ marginBottom: "10px" }}
          value={values.tags}
          name="tags"
          onChange={saveValue}
        />
        <Input
          placeholder="URL obrazu"
          style={{ marginBottom: "10px" }}
          value={values.imgUrl}
          name="imgUrl"
          onChange={saveValue}
        />
      </Modal>
    </>
  );
};

export default Settings;
