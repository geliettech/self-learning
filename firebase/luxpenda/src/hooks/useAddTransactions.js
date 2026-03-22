import { addDoc, collection } from "firebase/firestore";
import { db, serverTimestamp } from "../config/firebase";

export const useAddTransactions = () => {
  const transactionCollectionRef = collection(db, "transactions");

  const addTransactions = async ({
    description,
    transactionAmount,
    transactionType,
  }) => {
    await addDoc(transactionCollectionRef, {
      userId: "",
      description,
      transactionAmount,
      transactionType,
      createdAt: serverTimestamp(),
    });
  };

  return { addTransactions };
};
