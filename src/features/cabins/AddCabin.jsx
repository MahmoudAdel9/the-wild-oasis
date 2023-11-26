import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="add-form">
          <Button>Add Cabin</Button>
        </Modal.Open>

        <Modal.Window name="add-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       <Button onClick={() => setIsModalOpen((isShow) => !isShow)}>
//         Add Cabin
//       </Button>
//       {isModalOpen && (
//         <Modal onClose={() => setIsModalOpen(false)}>
//           <CreateCabinForm onClose={() => setIsModalOpen(false)} />
//         </Modal>
//       )}
//     </>
//   );
// }

export default AddCabin;
