import { toast } from 'react-toastify'; // Import the toast function from the library
import { Bounce } from 'react-toastify'; 

const success_toast_msg = (msg) => {

    toast.success(msg, {
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

export default success_toast_msg