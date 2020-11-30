import React from 'react';
import clinent1 from '../../../image/customer && caruseel/customer-1.png';
import clinent2 from '../../../image/customer && caruseel/customer-2.png';
import clinent3 from '../../../image/customer && caruseel/customer-3.png';
import ClientFeedBackTwo from '../ClientFeedbackTwo/ClientFeedBackTwo';


const ClientFeedback = () => {
    const FeedbackData=[
        {
            id:1,
            photo: clinent1,
            name: 'Nash Feedak',
            title: 'Ceo Monpal',
            detail:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum suscipit repellendus necessitatibus, possimus iusto inventore?'
            
        },
        {
            id:1,
            photo: clinent2,
            name: 'Miniam Baron',
            title: 'Ceo Monpal',
            detail:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum suscipit repellendus necessitatibus, possimus iusto inventore?'
            
        },
        {
            id:1,
            photo: clinent3,
            name: 'Boli caka',
            title: 'Ceo Monpal',
            detail:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum suscipit repellendus necessitatibus, possimus iusto inventore?'
            
        },
    ];
    return (
        <div className="container">
            <h1 className="text-center py-3">clients<span style={{color:'#7AB259'}}> Feedback</span></h1>
           <div className="row d-flex justify-content-center align-items-center">
            {
                FeedbackData.map(feedback => <ClientFeedBackTwo key={feedback.id} feedback={feedback}></ClientFeedBackTwo>)
            }
           </div>
        </div>
    );
};

export default ClientFeedback;