import React from 'react';
import { Layout, Deposit, Orders } from '../../components';

const Dashboard = () => {
    return (
        <Layout>
            <Deposit />
            <Orders />
        </Layout>
    )
}

export default Dashboard;