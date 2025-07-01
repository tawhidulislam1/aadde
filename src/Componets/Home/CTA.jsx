import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <div>
            <section className="py-20 bg-blue-600 text-white text-center px-6">
                <h2 className="text-3xl font-bold mb-4">Ready to start your transformation journey?</h2>
                <p className="mb-6">Join us or reach out to schedule a consultation today.</p>
                <Link to={'/contact/send-info'}>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                        Contact Us
                    </button></Link>
            </section>
        </div>
    );
};

export default CTA;