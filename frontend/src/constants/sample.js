
export const sampleChats = [
    {
      avatar: ["https://static-00.iconduck.com/assets.00/incognito-circle-icon-256x256-ozj8a2m2.png"],
      name: "anonymous user",
      _id: "1",
      groupChat: false,
      members: ["1", "2"],
    },
  
    {
      avatar: ["https://static-00.iconduck.com/assets.00/incognito-circle-icon-256x256-ozj8a2m2.png"],
        name: "anonymous user",
      _id: "2",
      groupChat: true,
      members: ["1", "2"],
    },
    {
      avatar: ["https://static-00.iconduck.com/assets.00/incognito-circle-icon-256x256-ozj8a2m2.png"],
        name: "anonymous user",
      _id: "3",
      groupChat: true,
      members: ["1", "2"],
    },{
      avatar: ["https://static-00.iconduck.com/assets.00/incognito-circle-icon-256x256-ozj8a2m2.png"],
        name: "anonymous user",
      _id: "4",
      groupChat: true,
      members: ["1", "2"],
    },{
      avatar: ["https://static-00.iconduck.com/assets.00/incognito-circle-icon-256x256-ozj8a2m2.png"],
        name: "anonymous user",
      _id: "5",
      groupChat: true,
      members: ["1", "2"],
    },
    {
      avatar: ["https://static-00.iconduck.com/assets.00/incognito-circle-icon-256x256-ozj8a2m2.png"],
        name: "anonymous user",
      _id: "6",
      groupChat: true,
      members: ["1", "2"],
    },{
      avatar: ["https://static-00.iconduck.com/assets.00/incognito-circle-icon-256x256-ozj8a2m2.png"],
        name: "anonymous user",
      _id: "7",
      groupChat: true,
      members: ["1", "2"],
    },{
      avatar: ["https://static-00.iconduck.com/assets.00/incognito-circle-icon-256x256-ozj8a2m2.png"],
        name: "anonymous user",
      _id: "8",
      groupChat: true,
      members: ["1", "2"],
    },{
      avatar: ["https://static-00.iconduck.com/assets.00/incognito-circle-icon-256x256-ozj8a2m2.png"],
        name: "anonymous user",
      _id: "9",
      groupChat: true,
      members: ["1", "2"],
    },
  ];
  
  export const sampleUsers = [
    {
      avatar: "https://static-00.iconduck.com/assets.00/incognito-circle-icon-256x256-ozj8a2m2.png",
        name: "anonymous user",
      _id: "1",
    },
    {
      avatar: "https://static-00.iconduck.com/assets.00/incognito-circle-icon-256x256-ozj8a2m2.png",
        name: "anonymous user",
      _id: "2",
    },
  ];
  
  export const sampleNotifications = [
    {
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
          name: "anonymous user",
      },
      _id: "1",
    },
    {
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
          name: "anonymous user",
      },
      _id: "2",
    },
  ];
  
  export const sampleMessage = [
    {
      attachments: [],
      content: "L*uda ka Message hai",
      _id: "sfnsdjkfsdnfkjsbnd",
      sender: {
        _id: "user._id",
        name: "Chaman ",
      },
      chat: "chatId",
      createdAt: "2024-11-14T10:41:30.630Z",
    },
  
    {
      attachments: [
        {
          public_id: "asdsad 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "hello bhai keso ho ",
      _id: "sfnsdjkfsdnfkdddjsbnd",
      sender: {
        _id: "sdfsdfsdf",
        name: "Chaman  2",
      },
      chat: "chatId",
      createdAt: "2024-11-14T11:41:30.630Z",
    },
  ];
  
  export const dashboardData = {
    users: [
      {
          name: "anonymous user",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        _id: "1",
        username: "john_doe",
        friends: 20,
        groups: 5,
      },
      {
          name: "anonymous user",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        _id: "2",
        username: "john_boi",
        friends: 20,
        groups: 25,
      },
    ],
  
    chats: [
      {
        name: "LabadBass Group",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        _id: "1",
        groupChat: false,
        members: [
          { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
          { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        ],
        totalMembers: 2,
        totalMessages: 20,
        creator: {
            name: "anonymous user",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
      },
      {
        name: "L*Da Luston Group",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        _id: "2",
        groupChat: true,
        members: [
          { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
          { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        ],
        totalMembers: 2,
        totalMessages: 20,
        creator: {
            name: "anonymous user",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
      },
    ],
  
    messages: [
      {
        attachments: [],
        content: "L*uda ka Message hai",
        _id: "sfnsdjkfsdnfkjsbnd",
        sender: {
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
          name: "Chaman ",
        },
        chat: "chatId",
        groupChat: false,
        createdAt: "2024-02-12T10:41:30.630Z",
      },
  
      {
        attachments: [
          {
            public_id: "asdsad 2",
            url: "https://www.w3schools.com/howto/img_avatar.png",
          },
        ],
        content: "",
        _id: "sfnsdjkfsdnfkdddjsbnd",
        sender: {
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
          name: "Chaman  2",
        },
        chat: "chatId",
        groupChat: true,
        createdAt: "2024-02-12T10:41:30.630Z",
      },
    ],
  };
  