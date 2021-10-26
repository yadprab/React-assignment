import { AnimatePresence } from "framer-motion";
import { useContext, useEffect } from "react";
import { dataContext } from "./dataContext";
import { DeleteComp } from "./DeleteComp";
import { ErrorState } from "./ErrorState";
import { FormEdit } from "./FormEdit";
import { LoadComp } from "./LoadComp";
import { LowerTab } from "./LowerTab";
import { Notification } from "./Notification";
import { PostForm } from "./PostForm";
import { Users } from "./Users";
const Main = () => {
  const context = useContext(dataContext);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => {
        if (!response.ok) {
          throw Error("Failed to fetch the Resource");
        }

        return response.json();
      })
      .then((data) => {
        context?.dispatch({ type: "INITIAL_DATA", payload: data.data });
      })
      .catch((err) => {
        context?.dispatch({ type: "ERROR", payload: err.message });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="outer--wrapper">
      <main id="main">
        <LowerTab />
        <AnimatePresence exitBeforeEnter>
          {context?.state.isLoading && <LoadComp />}
        </AnimatePresence>

        {context?.state.data.length ? <Users data={context.state.data} /> : ""}

        {context?.state.isEdit && <FormEdit />}

        <AnimatePresence exitBeforeEnter>
          {context?.state.isNew && <PostForm />}
        </AnimatePresence>

        {context?.state.isDelete && <DeleteComp />}

        <AnimatePresence exitBeforeEnter>
          {!context?.state.isEdit && context?.state.submitEdit && (
            <Notification
              message="user updated successfully"
              type="SUBMIT__NOTIF"
            />
          )}
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          {!context?.state.isDelete && context?.state.submitDelete && (
            <Notification
              message="user Deleted successfully"
              type="SUBMIT__NOTIF"
            />
          )}
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          {!context?.state.isNew && context?.state.submitNew && (
            <Notification
              message="user Added successfully"
              type="SUBMIT__NOTIF"
            />
          )}
        </AnimatePresence>

        {context?.state.isError && <ErrorState />}
      </main>
    </div>
  );
};
export { Main };
