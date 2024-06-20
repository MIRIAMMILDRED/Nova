import { Button, Card } from "@chakra-ui/react";
import Header from "./header";
import SideBar from "./sideBar";
import { Link } from "react-router-dom";

const Discussion = () => {
  return (
    <div className="flex h-screen">
      <SideBar className="w-1/5 bg-gray-300" />
      
      <div className="flex-grow flex flex-col">
        <Header />

        <Card className="p-10 flex flex-col items-center justify-center gap-4 bg-white">
          <img src="/images/discuss-header.png" alt="Discussion Header" />
          <img src="/images/discuss-image.png" alt="Image" />
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-semibold text-gray-700">
              Keep up the good Job
            </h3>
            <div>
              <p>You do not have new discussions.</p>
              <p>Your inbox is clear!</p>
            </div>
            <Button colorScheme="blue">
              <Link to="/ticket">Go back to home page</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Discussion;
