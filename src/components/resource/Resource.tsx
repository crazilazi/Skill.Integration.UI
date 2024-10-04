// Employee.tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { Table, Tag, Spin, Alert, Button, Card, List } from "antd";
import {
  fetchResourceRecommendSkills,
  fetchResources,
  IRecommendedSkill,
} from "./resourceSlice";
import Title from "antd/es/typography/Title";

const Resource: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { resources, loading, error, recommendedSkills } = useSelector(
    (state: RootState) => state.resource
  );
  const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([]);
  useEffect(() => {
    // Only fetch Resources if they haven't been fetched yet
    if (resources.length === 0) {
      dispatch(fetchResources());
    }
  }, [dispatch, resources]);

  // Handle fetching recommended skills when expanding a row
  const handleExpand = (expanded: boolean, record: any) => {
    const resourceId = record.id;

    if (expanded) {
      dispatch(fetchResourceRecommendSkills(resourceId));
      setExpandedRowKeys([resourceId]);
    } else {
      setExpandedRowKeys([]);
    }
  };

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

  // Expanded row content: List of recommended skills
  const expandedRowRender = (record: any) => {
    const resourceId = record.id;

    // Show loading spinner when fetching recommended skills
    if (loading) {
      return <Spin tip="Loading recommended skills..." />;
    }

    const skills = recommendedSkills[resourceId];

    return (
      <>
        <Title level={4}>Recommended Skills</Title>
        {skills && skills.length > 0 ? (
          <List
            itemLayout="horizontal"
            dataSource={skills}
            renderItem={(item: { skill: string; score: number }) => (
              <List.Item>
                <List.Item.Meta
                  title={<Tag color="green">{item.skill}</Tag>}
                  description={`Score: ${(item.score * 100).toFixed(2)}%`}
                />
              </List.Item>
            )}
          />
        ) : (
          <p>No recommended skills available for this employee.</p>
        )}
      </>
    );
  };

  return (
    <Table
      columns={columns}
      dataSource={resources}
      rowKey="id"
      expandable={{
        expandedRowRender,
        onExpand: handleExpand,
        expandedRowKeys: expandedRowKeys,
      }}
    />
  );
};

export default Resource;
