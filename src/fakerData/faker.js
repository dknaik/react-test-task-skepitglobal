export const apps = [
    {
      id: 1,
      name: "Add Folder",
      img: "../../public/images/Diary.png",
    },
    {
      id: 2,
      name: "Add File",
      img: "../../public/images/Diary.png",
    },
    {
      id: 3,
      name: "Calender",
      img: "../../public/images/Calender.png",
    },
    {
      id: 4,
      name: "Chrome",
      img: "../../public/images/Google Chrome.png",
    },
    {
      id: 4,
      name: "Recycle bin",
      img: "../../public/images/Empty Bin.png",
    },
  ];

  export const menuItems = [
    {
      id: "2",
      name: "Add Folder",
      isFolder: true,
      items: [],
    },
    {
      id: "7",
      name: "Add File",
      isFolder: true,
      items: [
        {
          id: "8",
          name: "World",
          isFolder: false,
          items: [],
        },
        {
          id: "9",
          name: "Excel",
          isFolder: false,
          items: [],
        },
        {
          id: "10",
          name: "Power Point",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "11",
      name: "Calender",
      isFolder: false,
      items: [],
    },
    {
      id: "12",
      name: "Recycle bin",
      isFolder: false,
      items: [],
    },
    {
      id: "13",
      name: "Chrome",
      isFolder: false,
      items: [],
    },
  ];