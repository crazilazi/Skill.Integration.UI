import {
  Alert,
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  Modal,
} from "antd";
import React, { useEffect, useState } from "react";
import { getSkillById } from "./skillApi";

interface SkillDetailProps {
  id: string;
  close: () => void;
}

interface SkillType {
  id: string;
  name: string;
}

interface SkillData {
  id: string;
  name: string;
  infoUrl: string;
  isLanguage: boolean;
  isSoftware: boolean;
  type: SkillType;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const SkillDetail: React.FC<SkillDetailProps> = ({ id, close }) => {
  const [form] = Form.useForm();
  const [skillData, setSkillData] = useState<SkillData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if(skillData != null) return;
      setLoading(true);
      setError(null); // Reset the error state
      try {
        const response = await getSkillById(id);
        setSkillData(response.data.data);
      } catch (err) {
        setError("Failed to fetch item.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (skillData != null) {
      form.setFieldsValue({
        ...skillData,
        typeId: skillData.type.id,
        typeName: skillData.type.name,
      });
    }
  }, [skillData]);

  return (
    <>
      <Modal
        title={<p>Skill - {id}</p>}
        footer={
          <Button type="primary" onClick={() => close()}>
            Close
          </Button>
        }
        loading={loading}
        open={true}
        onCancel={() => close()}
        width={750}
      >
        <Divider />
        {error && (
          <Alert message="Error" description={error} type="error" showIcon />
        )}

        <Form
          {...formItemLayout}
          variant={"borderless"}
          form={form}
          style={{ maxWidth: 800 }}
          disabled={true}
        >
          <Form.Item label="Id" name="id">
            <Input />
          </Form.Item>

          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="InfoUrl" name="infoUrl">
            <a
              href={skillData?.infoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {skillData?.infoUrl}
            </a>
          </Form.Item>

          <Form.Item label="Language" name="isLanguage" valuePropName="checked">
            <Checkbox></Checkbox>
          </Form.Item>

          <Form.Item label="Software" name="isSoftware" valuePropName="checked">
            <Checkbox></Checkbox>
          </Form.Item>

          <Form.Item label="Skill Id" name="typeId">
            <Input />
          </Form.Item>

          <Form.Item label="Skill Type" name="typeName">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default SkillDetail;
