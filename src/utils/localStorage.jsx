const employees = [
  {
    id: 1,
    firstName: "Ahmed",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      newTask: 1,
      activeTask: 3,
      completedTask: 1,
      failedTask: 2
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Login Page",
        description: "Create a responsive login page using Tailwind CSS.",
        date: "2025-10-06",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in mobile view.",
        date: "2025-09-28",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Integrate Payment Gateway",
        description: "Add Stripe integration to checkout flow.",
        date: "2025-10-01",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    firstName: "Ali",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      newTask: 2,
      activeTask: 0,
      completedTask: 1,
      failedTask: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Dashboard Cards",
        description: "Design task status cards with hover effects.",
        date: "2025-10-05",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize Images",
        description: "Compress and lazy-load images for performance.",
        date: "2025-09-30",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Setup MongoDB",
        description: "Configure MongoDB Atlas for production.",
        date: "2025-10-02",
        category: "Database"
      }
    ]
  },
  {
    id: 3,
    firstName: "Hassan",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      newTask: 1,
      activeTask: 1,
      completedTask: 1,
      failedTask: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Build Registration Form",
        description: "Create form with validation and error handling.",
        date: "2025-10-04",
        category: "Forms"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Add Dark Mode",
        description: "Implement theme toggle for dark/light mode.",
        date: "2025-09-29",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy to Vercel",
        description: "Push final build to Vercel for testing.",
        date: "2025-10-03",
        category: "Deployment"
      }
    ]
  },
  {
    id: 4,
    firstName: "Umer",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      newTask: 3,
      activeTask: 2,
      completedTask: 1,
      failedTask: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Sidebar Navigation",
        description: "Build collapsible sidebar with icons.",
        date: "2025-10-06",
        category: "Navigation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write Unit Tests",
        description: "Add Jest tests for critical components.",
        date: "2025-09-27",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Setup CI/CD",
        description: "Automate deployment pipeline with GitHub Actions.",
        date: "2025-10-01",
        category: "DevOps"
      }
    ]
  },
  {
    id: 5,
    firstName: "Saad",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      newTask: 1,
      activeTask: 0,
      completedTask: 1,
      failedTask: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Task Modal",
        description: "Design modal for adding new tasks.",
        date: "2025-10-05",
        category: "Component"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Improve Accessibility",
        description: "Add ARIA labels and keyboard navigation.",
        date: "2025-09-30",
        category: "Accessibility"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Connect API",
        description: "Fetch task data from backend API.",
        date: "2025-10-02",
        category: "Integration"
      }
    ]
  }
]

const admins =
  [
    {
      "id": 101,
      firstName: "Nameer",
      "email": "admin@example.com",
      "password": "123"
    }
  ]

export const setLocatlStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin",JSON.stringify(admins))
}

export const getLocalStorage = () => {
  const emp = JSON.parse(localStorage.getItem("employees"))
  const adm = JSON.parse(localStorage.getItem("admin"))
  
  return {emp,adm}
}