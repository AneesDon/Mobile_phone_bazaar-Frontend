import React,{useState} from 'react'
import Button from '../Button'
import { DeleteIcon, Edit, PhoneCallIcon, Trash2Icon } from 'lucide-react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import Input from '../Input';


function ManageAddress() {


    const [open, setOpen] = useState(false);

const onOpenModal = () => setOpen(true);
const onCloseModal = () => {

    setOpen(false)
    setShowForm(false)
}
const [showForm, setShowForm] = useState(false)
const handleEdit = () => {

    setShowForm(true)
    onOpenModal();

}
const handleAddClick = () => {

    setShowForm(true)
    onOpenModal();

}
const handleDelete= () => {

    setShowForm(false)
    onOpenModal();

}

  return (
    <>
      <Button
        btnText={"+ Add Address"}
        className="bg-black px-8 text-white rounded-md
    py-2 hover:bg-gray-500 transition-colors duration-300"
    onClick={handleAddClick}
      />
      <ul className=" border-t border-t-gray-200 *:border-t *:py-2">
        <li className="flex justify-between">
          <div className="*:py-1">
            <p className="text-xl font-medium">Anees Vasa</p>
            <p className="text-md text-gray-600">
              gsecl colony 411/10 gujrat-361140
            </p>
            <div className="text-md text-gray-600 flex gap-2">
              <PhoneCallIcon />
              <p>9724032847</p>
            </div>
          </div>
          <div className=" *:mt-1">
            <button
              className=" bg-white text-red-500 border border-red-500 rounded-lg px-1 py-1 flex gap-1"
              onClick={onOpenModal}
            >
              <Trash2Icon />
              Delete
            </button>
            <button
              className=" bg-white text-black-500 border border-black rounded-lg px-3 py-1 flex gap-2"
              onClick={handleEdit}
            >
              <Edit />
              Edit
            </button>
          </div>
        </li>
      </ul>
      <Modal open={open} onClose={onCloseModal} center>

        { !showForm ?                

                <>
                <h2 className=" px-32 py-5 font-semibold text-xl">Delete Address</h2>
                <div className=" flex gap-3 object-center justify-center">
                  <Link to={""}>
                    <Button
                      btnText={"Yes"}
                      className={
                        " px-12 bg-black rounded-lg text-white py-2 hover:bg-slate-700"
                      }
                    />
                  </Link>
                  <Link to={""}>
                    <Button
                      btnText={"No"}
                      className={
                        " px-12 bg-black rounded-lg text-white py-2 hover:bg-slate-700"
                      }
                      onClick={handleDelete}
                    />
                  </Link>
                </div>
                </>
                :
                <>
                            <form className=" *:py-2">
                  <Input label="Name" placeholder="Enter Name" />

                  <Input
                    label="Phone Number"
                    placeholder="Enter Phone Number"
                    type="number"
                  />

                  <Input label="Flat,House No, Building,Company,Apartment" />
                  <Input label="Area, colony, Street, Village, Sector" />
                  <Input label="City, District" />
                  <Input label="Pincode No." type="number" />
                  <Input label="State" />
                  <Button btnText={"Add Address"}
                  />
                  
                </form> 
                </>
                
                }




      </Modal>
    </>
  );
}

export default ManageAddress