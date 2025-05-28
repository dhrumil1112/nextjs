import React from 'react';

const Page = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Customers</h1>
            <p className="text-gray-600">Manage your invoices here.</p>
            {/* Add your invoice management components here */}
            <div className="mt-6">
                {/* Placeholder for invoice list or management UI */}
                <p className="text-gray-500">No invoices available.</p>
            </div>
        </div>
    );
}

export default Page;
