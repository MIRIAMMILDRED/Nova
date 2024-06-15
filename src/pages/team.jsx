/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Sidebar from './sideBar';
import Header from './header';
import axios from 'axios';

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        companyId: ''  
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchTeamMembers();
    }, []);

    const fetchTeamMembers = () => {
        setLoading(true);
        axios.get('https://novaend.azurewebsites.net/api/team/query')
            .then(response => {
                setTeamMembers(response.data);
                setLoading(false);
                setErrorMessage('');
            })
            .catch(error => {
                console.error('Error fetching team members:', error);
                setLoading(false);
                setErrorMessage('Failed to fetch team members');
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('https://novaend.azurewebsites.net/api/team/add', formData);
            setTeamMembers([...teamMembers, response.data]);
            setFormData({ name: '', email: '', role: '', companyId: '' });
            setLoading(false);
            setErrorMessage('');
        } catch (error) {
            console.error('Error adding team member:', error);
            setLoading(false);
            if (error.response) {
                if (error.response.status === 400) {
                    setErrorMessage(error.response.data.error);
                } else {
                    setErrorMessage('An unexpected error occurred. Please try again later.');
                }
            } else {
                setErrorMessage('Network error. Please check your connection.');
            }
        }
    };

    const handleSearchChange = (e) => {
        const { value } = e.target;
        setSearchQuery(value);
        filterMembers(value);
    };

    const filterMembers = (query) => {
        if (!query.trim()) {
            fetchTeamMembers(); // Reset to fetch all members when query is empty
        } else {
            const filtered = teamMembers.filter(member =>
                member.name.toLowerCase().includes(query.toLowerCase()) ||
                member.email.toLowerCase().includes(query.toLowerCase()) ||
                member.role.toLowerCase().includes(query.toLowerCase())
            );
            setTeamMembers(filtered);
        }
    };

    return (
        <div className="flex h-screen bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">
            <Sidebar />
            <div className="flex-grow flex flex-col">
                <Header />
                <div className="p-6 bg-white flex-grow overflow-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">Team</h1>
                    </div>
                    {errorMessage && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                            <strong className="font-bold">Error:</strong>
                            <span className="block sm:inline"> {errorMessage}</span>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="flex space-x-4 mb-4">
                        <input
                            className="flex-grow px-4 py-2 border rounded-lg"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter name"
                        />
                        <input
                            className="flex-grow px-4 py-2 border rounded-lg"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                        />
                        <input
                            className="flex-grow px-4 py-2 border rounded-lg"
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="Enter role"
                        />
                        <input
                            className="flex-grow px-4 py-2 border rounded-lg"
                            type="text"
                            name="companyId"
                            value={formData.companyId}
                            onChange={handleChange}
                            placeholder="Company ID"
                        />
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">+ Add member</button>
                    </form>
                    <input
                        className="px-4 py-2 border rounded-lg w-full mb-4"
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search for team members..."
                    />
                    {loading ? (
                        <p>Loading team members...</p>
                    ) : (
                        <div className="overflow-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="py-3 px-4 border-b-2 text-left text-sm font-semibold text-gray-600">Name</th>
                                        <th className="py-3 px-4 border-b-2 text-left text-sm font-semibold text-gray-600">Email Address</th>
                                        <th className="py-3 px-4 border-b-2 text-left text-sm font-semibold text-gray-600">Role</th>
                                        <th className="py-3 px-4 border-b-2 text-left text-sm font-semibold text-gray-600">ID</th>
                                        <th className="py-3 px-4 border-b-2 text-left text-sm font-semibold text-gray-600">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teamMembers.map((member, index) => (
                                        <tr key={index} className="hover:bg-gray-100">
                                            <td className="py-3 px-4 border-b flex items-center">
                                                <img className="w-8 h-8 rounded-full mr-2" src={`https://i.pravatar.cc/150?img=${index + 1}`} alt={member.name} />
                                                {member.name}
                                            </td>
                                            <td className="py-3 px-4 border-b">{member.email}</td>
                                            <td className="py-3 px-4 border-b">{member.role}</td>
                                            <td className="py-3 px-4 border-b">{member.companyId}</td>
                                            <td className="py-3 px-4 border-b">Active</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Team;
