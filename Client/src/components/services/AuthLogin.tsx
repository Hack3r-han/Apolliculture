interface User {
    id: string;
    username: string;
    password: string;
  }
  
  const AuthLogin = {
    login: async (username: string, password: string): Promise<User | null> => {
      try {
        const response = await fetch("http://localhost:3002/mockUsers");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        const user = data.find(
          (user: any) => user.username === username && user.password === password
        );
        return user ? user : null;
      } catch (error) {
        console.error("Error:", error);
        return null;
      }
    },
  };
  
  export default AuthLogin;