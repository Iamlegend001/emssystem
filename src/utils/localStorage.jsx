localStorage.clear()
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Homepage",
        description: "Create a modern and responsive homepage layout.",
        date: "2024-11-13",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Login Bug",
        description: "Resolve authentication bug in the login flow.",
        date: "2024-11-10",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update User Dashboard",
        description: "Add recent activities section in user dashboard.",
        date: "2024-11-15",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write Unit Tests",
        description: "Write unit tests for new API endpoints.",
        date: "2024-11-12",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Prototype for New Feature",
        description: "Create prototype for task scheduling feature.",
        date: "2024-11-08",
        category: "Design"
      }
    ]
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Enhance Security",
        description: "Implement 2FA for sensitive actions.",
        date: "2024-11-20",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize Database",
        description: "Improve query efficiency for large datasets.",
        date: "2024-11-09",
        category: "Database"
      }
    ]
  },
  {
    id: 4,
    firstName: "Myra",
    email: "employee4@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Marketing Plan",
        description: "Develop a marketing plan for the product launch.",
        date: "2024-11-25",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Competitor Analysis",
        description: "Complete competitor analysis report.",
        date: "2024-11-07",
        category: "Research"
      }
    ]
  },
  {
    id: 5,
    firstName: "Aanya",
    email: "employee5@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Customer Support Training",
        description: "Conduct training session for new support team members.",
        date: "2024-11-14",
        category: "Training"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Review Support Tickets",
        description: "Review and resolve outstanding support tickets.",
        date: "2024-11-05",
        category: "Support"
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];




export const setLocalStorage = () => {
  localStorage.setItem('employee', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employee')); 
  const admin = JSON.parse(localStorage.getItem('admin')); 

  return {employees,admin}
};
