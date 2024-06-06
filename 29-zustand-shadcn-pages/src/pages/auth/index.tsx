import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Key } from "lucide-react";

const AuthPage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center p-4">
      <Tabs
        defaultValue="login"
        className="w-full max-w-[600px] min-h-[600px] flex flex-col"
      >
        <TabsList className="flex justify-between items-center gap-x-12">
          <TabsTrigger className="flex-1 hover:bg-white" value="login">
            <div className="flex items-center gap-x-3">
              <Key /> Login
            </div>
          </TabsTrigger>
          <TabsTrigger className="flex-1 hover:bg-white" value="register">
            <div className="flex items-center gap-x-3">
              <Key /> Register
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="flex-1 flex flex-col">
          <Login />
        </TabsContent>
        <TabsContent value="register" className="flex-1 flex flex-col ">
          <Register />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthPage;
