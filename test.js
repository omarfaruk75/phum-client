// const arr = [1, 2, 3, 4, 5];
// const result = arr.reduce((acc, item) => {
//   console.log(acc);
//   return acc + item;
// }, 0);
// console.log("Final Result : ", result);
export const adminPaths2 = [
  {
    name: "Dashboard",
    // path: "/admin/dashboard",
    path: "dashboard",
    // element: <AdminDashboard />,
    element: "AdminDashboard",
  },
  {
    name: "User Management",
    element: "Navlink",

    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        // element: <CreateAdmin />,
        element: "CreateAdmin",
      },
      {
        name: "Create Student",
        path: "create-student",
        //element: <CreateStudent />,
        element: "CreateStudent",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        //element: <CreateFaculty />,
        element: "CreateFaculty",
      },
    ],
  },
];
// const result = adminPaths2.reduce((acc, item) => {
//   if (item.name && item.element) {
//     acc.push({
//       key: item.name,
//       label: item.element,
//     });
//   }
//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.element,
//       children: item.children.map((child) => ({
//         key: child.name,
//         label: "Navlink",
//       })),
//     });
//   }
//   return acc;
// }, []);
// console.log("Final Result : ", JSON.stringify(result));

// const result = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);
// console.log("Final Result : ", result);
