import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { fetchSkill } from "./skillSlice";
import { Alert, Spin, Table } from "antd";
import SkillDetail from "./skillDetail";

const SkillsDomain: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { skills, loading, error } = useSelector(
    (state: RootState) => state.skill
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  useEffect(() => {
    // Only fetch Resources if they haven't been fetched yet
    if (skills.length === 0) {
      dispatch(fetchSkill());
    }
  }, [dispatch, skills]);

  const selectedSkill = useRef<string>("");

  // Columns for Ant Design Table
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text: string) => {
        return (
          <>
            <a
              onClick={() => {
                setShowModal(true);
                selectedSkill.current = text;
              }}
            >
              {text}
            </a>
          </>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    // {
    //   title: "Type Id",
    //   dataIndex: "typeId",
    //   key: "typeId",
    // },
    // {
    //   title: "Type Name",
    //   dataIndex: "typeName",
    //   key: "typeName",
    // },
    {
      title: "Url",
      dataIndex: "infoUrl",
      key: "infoUrl",
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

  return (
    <>
      <Table columns={columns} dataSource={skills} rowKey="id" />
      {showModal && <SkillDetail id={selectedSkill.current} close={() => setShowModal(false)} />}
    </>
  );
};

export default SkillsDomain;
