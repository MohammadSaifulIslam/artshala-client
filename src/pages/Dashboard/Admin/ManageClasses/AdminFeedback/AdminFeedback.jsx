import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import websiteTitle from "../../../../../utility/websiteTitle";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";

const AdminFeedback = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const handleFeedback = (event) => {
        event.preventDefault()
        const feedback = event.target.feedback.value;
        console.log(id, feedback)
        axios.patch(`${import.meta.env.VITE_LOCALHOST}/class-feedback/${id}`, { feedback })
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: `You feedback successfully send`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(err => console.log(err))
        event.target.reset()
        navigate('/dashboard/manage-classes')
    }

    websiteTitle('Feedback - Artshala')


    return (
        <div className="my-10">
            <SectionTitle title={'Admin Feedback'} />
            <form onSubmit={handleFeedback} className="max-w-md mt-10 mx-auto">
                <div>
                    <textarea name="feedback" id="" cols="30" rows="8" className="my-input text-sm font-normal" placeholder="Your Feedback..." required></textarea>

                </div>
                <button className="my-btn mt-5 w-full">Send Feedback</button>
            </form>


        </div>
    );
};

export default AdminFeedback;