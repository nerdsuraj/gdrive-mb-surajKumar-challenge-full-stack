/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { gapi } from "gapi-script";
import axios from 'axios';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';



const Dashboard = () => {
    const [files, setFiles] = useState([]);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [api_Key, setApiKey] = useState('');
    const [client_Id, setClientId] = useState('');
    const [publicFiles, setPublicFiles] = useState([]);
    const [peopleWithAccess, setPeopleWithAccess] = useState([]);
    const [externalFiles, setExternalFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);




    const loadGapiAndInitialize = (apiKey, clientId) => {
        gapi.load('client:auth2', () => {
            initializeGapi(apiKey, clientId);
        });
    };

    const getKeys = () => {
        axios.post('https://drive-test-api.vercel.app/api/get-keys')
            .then((response) => {
                setApiKey(response.data.apiKey);
                setClientId(response.data.clientId);
                loadGapiAndInitialize(response.data.apiKey, response.data.clientId);
            })
            .catch((error) => {
                console.error("Failed to fetch keys: ", error);
            });
    };

    const initializeGapi = (api_Key, client_Id) => {
        gapi.client.init({
            apiKey: api_Key,
            clientId: client_Id,
            scope: "https://www.googleapis.com/auth/drive", //"https://www.googleapis.com/auth/drive"  //https://www.googleapis.com/auth/drive.metadata.readonly
            discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]
        }).then(() => {
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        }).catch(error => console.error("Error initializing GAPI: ", error));
    };

    const updateSigninStatus = (isSignedIn) => {
        setIsSignedIn(isSignedIn);
        if (isSignedIn) {
            loadDriveFiles();
            logUserInfo();
        }
    };

    const loadDriveFiles = () => {
        setIsLoading(true);
        gapi.client.drive.files.list({
            'pageSize': 50,
            'fields': "nextPageToken, files(id, name, mimeType, createdTime, owners, permissions, webViewLink, shared, sharingUser)"
        }).then(response => {
            const files = response.result.files;
            const tempPublicFiles = [];
            const tempPeopleWithAccess = [];
            const tempExternalFiles = [];

            files.forEach(file => {
                const { permissions } = file;
                if (!file.permissions) {
                    console.log("No permissions available for file: ", file.name);
                    return;
                }
                permissions.forEach(permission => {
                    if (permission.type === 'anyone' && permission.role === 'reader') {
                        tempPublicFiles.push(file);
                    }
                    if (permission.type === 'user' && permission.role !== 'owner') {
                        tempPeopleWithAccess.push(file);
                    }
                    if (permission.type === 'anyone' && permission.role !== 'reader') {
                        tempExternalFiles.push(file);
                    }
                });
            });

            setPublicFiles(tempPublicFiles);
            setPeopleWithAccess(tempPeopleWithAccess);
            setExternalFiles(tempExternalFiles);
            setFiles(files);
            setIsLoading(false);

        }).catch(error => {
            console.error("Error fetching files: ", error);
            setIsLoading(false);
        });
    };

    const logUserInfo = () => {
        const userProfile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
        console.log("User ID: ", userProfile.getId());
        console.log("Name: ", userProfile.getName());
        console.log("Image URL: ", userProfile.getImageUrl());
        console.log("Email: ", userProfile.getEmail());
        const tokens = gapi.auth2.getAuthInstance().currentUser.get();
        const token = tokens.getAuthResponse().access_token;
        savetoken(token);
    };

    const savetoken = (token) => {
        axios.post('https://drive-test-api.vercel.app/api/save-token', { accessToken: token })
            .then((response) => {
                console.log("Response: ", response.data);
            })
            .catch((error) => {
                console.error("Failed to save token: ", error);
            });
    }


    useEffect(() => {
        getKeys();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAuthClick = () => {
        gapi.auth2.getAuthInstance().signIn();
    };

    const handleSignoutClick = () => {
        gapi.auth2.getAuthInstance().signOut();
    };

    if (isLoading) {
        return <div className="loader">Loading...</div>;
    }

    if (!isSignedIn) {
        return (
            <div className="button-container">
                <button onClick={handleAuthClick}>Sign in with Google</button>
            </div>
        );
    }

    return (
        <div className="dashboard">
            <h2>
                <FontAwesomeIcon icon={faGoogleDrive} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                Google Drive Risk Report
            </h2>
            <div className="section">
                <h3>Publicly Accessible Files</h3>
                {publicFiles.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>File Name</th>
                                <th>Access Setting</th>
                                <th>Shared With</th>
                                <th>Created By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {publicFiles.map(file => (
                                <tr key={file.id}>
                                    <td>{file.name}</td>
                                    <td>Public</td>
                                    <td>{file.permissions.filter(p => p.type === 'user').length}</td>
                                    <td>{file.owners[0].displayName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : <p>No publicly accessible files.</p>}
            </div>
            <div className="section">
                <h3>People with Access to Your Google Drive</h3>
                {peopleWithAccess.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>File Name</th>
                                <th>Access Setting</th>
                                <th>Shared With</th>
                                <th>Created By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {peopleWithAccess.map(file => (
                                <tr key={file.id}>
                                    <td>{file.name}</td>
                                    <td>Specific Users</td>
                                    <td>{file.permissions.filter(p => p.type === 'user').length}</td>
                                    <td>{file.owners[0].displayName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : <p>No people with access found.</p>}
            </div>
            <div className="section">
                <h3>Files Shared Externally</h3>
                {externalFiles.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>File Name</th>
                                <th>Access Setting</th>
                                <th>Shared With</th>
                                <th>Created By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {externalFiles.map(file => (
                                <tr key={file.id}>
                                    <td>{file.name}</td>
                                    <td>External</td>
                                    <td>{file.permissions.filter(p => p.type === 'user').length}</td>
                                    <td>{file.owners[0].displayName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : <p>No files shared externally.</p>}
            </div>
            {!isSignedIn ? (
                <button onClick={handleAuthClick}>Sign in with Google</button>
            ) : (
                <button onClick={handleSignoutClick}>Sign Out</button>
            )}
        </div>
    );
}

export default Dashboard;
