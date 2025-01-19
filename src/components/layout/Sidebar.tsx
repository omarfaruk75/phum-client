import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utils/sidebarItemGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.router";
import { studentPaths } from "../../routes/student.route";

const { Sider } = Layout;
const userRole = {
  FACULTY: "faculty",
  STUDENT: "student",
  ADMIN: "admin",
};
const Sidebar = () => {
  const role = "student";
  let sidebarItems;
  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemGenerator(studentPaths, userRole.STUDENT);
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        // className="demo-logo-vertical"
        style={{
          color: "white",
          textAlign: "center",
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          alignItems: "center",
          height: "4rem",
        }}
      >
        <h1>PH Uni</h1>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
