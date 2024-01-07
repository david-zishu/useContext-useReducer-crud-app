import { Header } from "./Header";
import { EmployeeList } from "./EmployeeList";

export const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <h3 className="text-center text-3xl mt-20 leading-8 text-black font-bold tracking-wide uppercase">
          CRUD with React Context API and Redcuer
        </h3>
        <Header />
        <EmployeeList />
      </div>
    </>
  );
};
