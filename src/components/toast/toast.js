import { toast } from 'react-toastify'; // Import the toast function from the library
import { Bounce } from 'react-toastify'; 

const toast_msg = (msg) => {

    toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });

}
export  default toast_msg;