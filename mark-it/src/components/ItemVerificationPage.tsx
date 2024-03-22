import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation
import useAddSequenceStore from '../ZustandStore'; // Import your Zustand store
import { set } from 'firebase/database';

// Define a type for the item prop
interface Item {
  actionType?: string; // Add additional fields used in this component
}

// Define the props for ItemVerificationPage
interface ItemVerificationPageProps {
  item: Item | null;
  id: string;
}

const ItemVerificationPage: React.FC<ItemVerificationPageProps> = ({
  item,
  id,
}) => {
//   const navigate = useNavigate();
//   const { setCurrentStep, dumpWorkingItem, setQRCode } = useAddSequenceStore();

//   const message = 'Verifying item...';

//   useEffect(() => {
//     let state = localStorage.getItem('state');
//     let user;
//     if (state) {
//       user = JSON.parse(state)?.user;
//     }
//     // if (user) {
//     //   updateUser(user); // Update Zustand store with user info if found
//     // }

//     if (item) {
//       if (item.actionType === 'store') {
//         // Item marked "store", navigate or perform actions as needed
//         if (user) {
//           setQRCode(id);
//           setCurrentStep(2);
//           navigate('/app');
//         } else {
//           navigate('/login'); // Redirect to login if no user found
//         }
//       }
//     } else {
//       // Item ID not found in Firestore, start item add process
//       //   startItemAddProcess();
//       navigate('/'); // Adjust the route as needed
//     }
//   }, [item, id, navigate]);

  return <div></div>;
};

export default ItemVerificationPage;
