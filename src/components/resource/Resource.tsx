// Employee.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { Table, Tag, Spin, Alert } from "antd";
import { fetchResources } from "./resourceSlice";

const Resource: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { resources, loading, error } = useSelector(
    (state: RootState) => state.resource
  );
  console.log(resources);
  useEffect(() => {
    // Only fetch Resources if they haven't been fetched yet
    if (resources.length === 0) {
      dispatch(fetchResources());
    }
  }, [dispatch, resources]);

  // Columns for Ant Design Table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Current Position",
      dataIndex: "currentPosition",
      key: "currentPosition",
    },
    {
      title: "Skills",
      key: "skills",
      dataIndex: "skills",
      render: (skills: string[]) => (
        <>
          {skills.map((skill) => (
            <Tag color="blue" key={skill}>
              {skill}
            </Tag>
          ))}
        </>
      ),
    },
  ];

  // Loading state
  if (loading) {
    return <Spin tip="Loading..." />;
  }

  // Error state
  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  return <Table columns={columns} dataSource={resources} rowKey="id" />;
};

export default Resource;
