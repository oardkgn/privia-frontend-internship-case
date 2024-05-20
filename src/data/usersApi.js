export let usersData = [
  {
    id: 1,
    name: "John Doe",
    username: "john_doe",
    email: "john.doe@example.com",
    role: "contributor",
    avatar: "profile1.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "jane_smith",
    email: "jane.smith@example.com",
    role: "author",
    avatar: "profile2.png",
  },
  {
    id: 3,
    name: "Michael Johnson",
    username: "michael_johnson",
    email: "michael.johnson@example.com",
    role: "administrator",
    avatar: "profile3.png",
  },
  {
    id: 4,
    name: "Emily Williams",
    username: "emily_williams",
    email: "emily.williams@example.com",
    role: "subscriber",
    avatar: "profile4.png",
  },
  {
    id: 5,
    name: "Christopher Brown",
    username: "christopher_brown",
    email: "christopher.brown@example.com",
    role: "contributor",
    avatar: "profile5.png",
  },
  {
    id: 6,
    name: "Emma Jones",
    username: "emma_jones",
    email: "emma.jones@example.com",
    role: "author",
    avatar: "profile6.png",
  },
  {
    id: 7,
    name: "William Davis",
    username: "william_davis",
    email: "william.davis@example.com",
    role: "administrator",
    avatar: "profile1.png",
  },
  {
    id: 8,
    name: "Olivia Miller",
    username: "olivia_miller",
    email: "olivia.miller@example.com",
    role: "subscriber",
    avatar: "profile2.png",
  },
  {
    id: 9,
    name: "Matthew Wilson",
    username: "matthew_wilson",
    email: "matthew.wilson@example.com",
    role: "contributor",
    avatar: "profile3.png",
  },
  {
    id: 10,
    name: "Ava Taylor",
    username: "ava_taylor",
    email: "ava.taylor@example.com",
    role: "author",
    avatar: "profile4.png",
  },
  {
    id: 11,
    name: "Daniel Anderson",
    username: "daniel_anderson",
    email: "daniel.anderson@example.com",
    role: "administrator",
    avatar: "profile5.png",
  },
  {
    id: 12,
    name: "Sophia Martinez",
    username: "sophia_martinez",
    email: "sophia.martinez@example.com",
    role: "subscriber",
    avatar: "profile6.png",
  },
  {
    id: 13,
    name: "James Taylor",
    username: "james_taylor",
    email: "james.taylor@example.com",
    role: "contributor",
    avatar: "profile1.png",
  },
  {
    id: 14,
    name: "Isabella Hernandez",
    username: "isabella_hernandez",
    email: "isabella.hernandez@example.com",
    role: "author",
    avatar: "profile2.png",
  },
  {
    id: 15,
    name: "Benjamin Gonzalez",
    username: "benjamin_gonzalez",
    email: "benjamin.gonzalez@example.com",
    role: "administrator",
    avatar: "profile3.png",
  },
  {
    id: 16,
    name: "Mia Perez",
    username: "mia_perez",
    email: "mia.perez@example.com",
    role: "subscriber",
    avatar: "profile4.png",
  },
  {
    id: 17,
    name: "Logan Sanchez",
    username: "logan_sanchez",
    email: "logan.sanchez@example.com",
    role: "contributor",
    avatar: "profile5.png",
  },
  {
    id: 18,
    name: "Charlotte Ramirez",
    username: "charlotte_ramirez",
    email: "charlotte.ramirez@example.com",
    role: "author",
    avatar: "profile6.png",
  },
  {
    id: 19,
    name: "Ethan Torres",
    username: "ethan_torres",
    email: "ethan.torres@example.com",
    role: "administrator",
    avatar: "profile1.png",
  },
  {
    id: 20,
    name: "Amelia Flores",
    username: "amelia_flores",
    email: "amelia.flores@example.com",
    role: "subscriber",
    avatar: "profile2.png",
  },
];

export async function createUser(newUser) {

    const lastUserId = usersData.length > 0 ? usersData[usersData.length - 1].id : 0;
  
    const newId = lastUserId + 1;
    const userWithId = { ...newUser, id: newId };

    usersData.push(userWithId);
  
    return userWithId;
}

export async function deleteUser(userId) {
    const index = usersData.findIndex(user => user.id === userId);
    if (index !== -1) {
      usersData.splice(index, 1);
      return true;
    }
    return false;
}

export async function updateUser(userId, updatedUser) {
    const index = usersData.findIndex(user => user.id === userId);
    if (index !== -1) {
      usersData[index] = { ...usersData[index], ...updatedUser };
      return true;
    }
    return false;
}

export async function deleteUsers(userIds) {
    let deletedUsersCount = 0;
    userIds.forEach(userId => {
      const index = usersData.findIndex(user => user.id === userId);
      if (index !== -1) {
        usersData.splice(index, 1);
        deletedUsersCount++;
      }
    });
    return deletedUsersCount;
  }
  

