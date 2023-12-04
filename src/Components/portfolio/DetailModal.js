import './detail-modal.css';
import './detail.css';
import PortfolioDetail from "./PortfolioDetail";
const  DetailModal = ({closeModal, selectedItem})=> {
    return(
        <dialog className="modal-overlay" open data-aos="fade-in" data-aos-delay="0" data-aos-duration="650">
            <form method="dialog">
              <button className="close" onClick={()=>closeModal(false)}><i className="bi-list bi-x"></i></button>
            </form>
            <PortfolioDetail selectedItem={selectedItem}/>
        </dialog>    
    )
}
export default  DetailModal;