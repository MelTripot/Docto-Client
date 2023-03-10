import { app } from "../main";
import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import React from "react";

const Doctolist = () => {
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), "hooks"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <span>
            Collection:{" "}
            {value.docs.map((doc) => (
              <React.Fragment key={doc.id}>
                {JSON.stringify(doc.data())},{" "}
              </React.Fragment>
            ))}
          </span>
        )}
      </p>
    </div>
  );
};
export default Doctolist;
