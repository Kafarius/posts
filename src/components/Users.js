import { useUsers } from "../hooks/useUsers";
import "../css/Users.css";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { motion } from "framer-motion";

const Users = () => {
  const { error, loading, data } = useUsers();

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>Error...</div>;

  return (
    <div className="Users">
      {data.users.data.map((user, i) => {
        return (
          <motion.div
            className="User"
            key={user.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <h3>
              {user.name} "{user.username}"
            </h3>
            <a href="#">{user.email}</a>
            <p>{user.phone}</p>
            <Link to={`/${user.id}`} className="btn">
              Details
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Users;
